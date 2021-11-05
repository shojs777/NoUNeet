import React, { useState, useEffect } from "react";
import firebase from "./config/firebase";
// import { getAuth } from "firebase/auth";

const AuthContext = React.createContext();

// childrenを引数に持つ事によってAuthProviderで囲まれているすべてのコンポーネントでuserが使える
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [userName, setName] = useState(null);
  const [picture, setPicture] = useState(null)
  const [jobValue, setJobvalue] = useState('回答しない')
  const value = {
    user,
    email,
    password,
    userName,
    picture,
    jobValue,
    setUser,
    setEmail,
    setPassword,
    setName,
    setPicture,
    setJobvalue,
  }

  // const auth = getAuth();
  // const appUser = auth.currentUser;
  // if (appUser !== null) {
  //   // The user object has basic properties such as display name, email, etc.
  //   const displayName = appUser.displayName;
  //   const email = appUser.email;
  //   const photoURL = appUser.photoURL;
  //   // The user's ID, unique to the Firebase project. Do NOT use
  //   // this value to authenticate with your backend server, if
  //   // you have one. Use User.getToken() instead.
  //   const uid = appUser.uid;

  // }
  // firebase.auth().currentUser((user) => {
  //   if (user) {
  //     console.log(user);
  //   } else {
  //     return null;
  //   }
  // })
  // const fetchUser = async () => {
  // }


  useEffect(() => {
    firebase.auth().onAuthStateChanged(user => setUser(user))
  }, []);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
