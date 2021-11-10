import { React, useContext, useEffect } from 'react';
import { AuthContext } from '../../../../AuthService';
import styled from 'styled-components';
import firebase from '../../../../config/firebase';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import { set } from 'date-fns/esm';
import { Padding } from '@mui/icons-material';
const Sample = () => {
  const {
    user,
    email,
    password,
    userName,
    image,
    imageUrl,
    setUser,
    setEmail,
    setPassword,
    setName,
    setImage,
    setImageUrl
  } = useContext(AuthContext);
  let nowImage;
  const defaultUrl = 'https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png';

  if (user) {
    // console.log(`userProfileImage/${user.uid}/${user.photoURL}`)
    console.log('imageUrl:' + user.photoURL)
    firebase
      .storage()
      .ref(user.photoURL)
      .getDownloadURL()
      .then((url) => {
        console.log('初回画像セット成功')
        setImageUrl(url)
      })
  }
  const handleImage = event => {
    console.log('handleImage')
    console.log(user)
    nowImage = event.target.files[0];
    setImage(nowImage.name);
    console.log(image)
    firebase
      .storage()
      .ref(`userProfileImage/${user.uid}/${nowImage.name}`)
      .put(nowImage)
      .then(() => {
        console.log('seikou');
        complete();
        firebase
          .auth()
          .currentUser
          .updateProfile({
            photoURL: `userProfileImage/${user.uid}/${nowImage.name}`
          }).then(() => {
            console.log('URLアップデート成功:' + user.photoURL)
          }).catch((error) => {
            // An error occurred
            // ...
          });
      })
  };
  const complete = () => {
    firebase
      .storage()
      .ref(`userProfileImage/${user.uid}/${nowImage.name}`)
      .getDownloadURL()
      .then(fireBaseUrl => {
        setImageUrl(fireBaseUrl);
      });
  };
  // useEffect(() => {
  // }, [imageUrl])
  const Input = styled('input')({
    display: 'none',
  });
  return (
    < div >
      <Avatar
        alt="preview"
        src={imageUrl ? imageUrl : defaultUrl}
        sx={{ width: 80, height: 80 }}
      />
      <SDiv>
        <label htmlFor="contained-button-file">
          <Input accept="image/*" id="contained-button-file" type="file" onChange={handleImage} />
          <Button variant="contained" component="span">
            写真を選択
         </Button>
        </label>
      </SDiv>
    </div >
  );
};

const SImg = styled.img`
  width: 100px;
  padding: 1em;
`;


const SDiv = styled.div`
  text-align: center;
`;

const Sbutton = styled.button`
  :hover {
    cursor: pointer;
  }
`;

export default Sample;
