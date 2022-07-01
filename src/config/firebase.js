import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDE5VcL581MmixgBMpOif40XNcZD7AfmRY",
  authDomain: "nouneet-e7537.firebaseapp.com",
  projectId: "nouneet-e7537",
  storageBucket: "nouneet-e7537.appspot.com",
  messagingSenderId: "260154909813",
  appId: "1:260154909813:web:229ff9b570daa7039fc43c",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
