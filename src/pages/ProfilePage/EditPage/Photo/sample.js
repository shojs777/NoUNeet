import { React, useContext, useEffect } from 'react';
import { useFileUpload } from 'use-file-upload';
import { AuthContext } from '../../../../AuthService';
import styled from 'styled-components';
import firebase from '../../../../config/firebase';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';

import { set } from 'date-fns/esm';
import { Padding } from '@mui/icons-material';
const Sample = () => {
  const {
    user,
    email,
    password,
    userName,
    picture,
    setUser,
    setEmail,
    setPassword,
    setName,
    setPicture
  } = useContext(AuthContext);
  const defaultSrc =
    'https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png';
  const [files, selectFiles] = useFileUpload();
  useEffect(() => {
    const storageRef = firebase.storage().ref('userProfileImage').child(`DSC00792.JPG`);
    storageRef.getDownloadURL()
      .then((url) => {
        console.log('初回画像セット成功')
        setPicture(url)
      })
  }, [])
  return (
    < div >
      <Avatar
        alt="preview"
        src={picture ? picture : defaultSrc}
        sx={{ width: 80, height: 70 }}
      />
      {/* <SImg src={picture ? picture : defaultSrc} alt="preview" /> */}
      {/* "gs://" + selectSrc.location.bucket + "/" + selectSrc.location.path_ */}
      <SDiv>
        <Sbutton
          onClick={() => {
            selectFiles(
              { accept: 'image/*' },
              ({ name, size, source, file }) => {
                console.log('Files Selected', { name, size, source, file });
                const setFile = file;// use the Blob or File API
                const storageRef = firebase.storage().ref('userProfileImage').child(`${file.name}`);
                storageRef.put(setFile)
                  .then(() => {
                    console.log('Uploaded 成功');
                    storageRef.getDownloadURL()
                      .then((url) => {
                        console.log('画像セット成功')
                        setPicture(url)
                      })
                  })
                firebase.auth().onAuthStateChanged((user) => {
                  if (user) {
                    user.updateProfile({
                      photoURL: files?.source
                    })
                      .then(() => {
                        console.log(files)
                        console.log('user.photoURLをセット成功')

                      })
                      .catch(error => {
                        console.log(error)
                        console.log('失敗')
                      })
                  }
                });
              })
          }
          }
        >
          画像をアップ
        </Sbutton>
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
