import { React, useContext, useState, useEffect } from "react";
import { AuthContext } from "../../../../AuthService";
import styled from "styled-components";
import firebase from "../../../../config/firebase";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import Button from "@mui/material/Button";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import CheckIcon from "@mui/icons-material/Check";
import { set } from "date-fns/esm";
import { Padding } from "@mui/icons-material";
const Sample = () => {
  const {
    user,
    email,
    password,
    userName,
    imageState,
    imageUrl,
    setUser,
    setEmail,
    setPassword,
    setName,
    setImageState,
    setImageUrl,
  } = useContext(AuthContext);
  let nowImage;
  const defaultUrl =
    "https://www.pngkit.com/png/full/301-3012694_account-user-profile-avatar-comments-fa-user-circle.png";
  if (user) {
    setImageUrl(user.photoURL);
    console.log("初回画像セット成功");
  }
  const handleImage = (e) => {
    console.log("handleImage");
    loading = true;
    nowImage = e.target.files[0];
    firebase
      .storage()
      .ref(`userProfileImage/${user.uid}/${nowImage.name}`)
      .put(nowImage)
      .then(() => {
        console.log("画像アップseikou");
        firebase
          .storage()
          .ref(`userProfileImage/${user.uid}/${nowImage.name}`)
          .getDownloadURL()
          .then((fireBaseUrl) => {
            firebase
              .auth()
              .currentUser.updateProfile({
                photoURL: fireBaseUrl,
              })
              .then(() => {
                console.log("URLアップデート成功:" + user.photoURL);
                setImageUrl(fireBaseUrl);
                loading = null;
              })
              .catch((error) => {
                // An error occurred
                // ...
              });
          });
      });
  };
  const deleteImage = () => {
    handleClose();
    firebase
      .auth()
      .currentUser.updateProfile({
        photoURL: "",
      })
      .then(() => {
        setImageUrl("");
      });
  };
  // useEffect(() => {}, []);
  const Input = styled("input")({
    display: "none",
  });
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const asx = {
    position: "absolute",
    top: "25%",
    left: "25%",
    zIndex: 10,
  };
  let success;
  let loading;
  return (
    <div style={{ textAlign: "center" }}>
      <Box sx={{ m: 1, position: "relative" }}>
        {/* {success ? (
          <CheckIcon />
        ) : ( */}
        <Avatar
          alt="preview"
          src={imageUrl ? imageUrl : defaultUrl}
          sx={{ width: 80, height: 80 }}
        />
        {/* )} */}

        {loading && <CircularProgress sx={asx} />}
      </Box>
      <SDiv>
        <Tooltip title="Upload">
          <label htmlFor="icon-button-file">
            <Input
              accept="image/*"
              id="icon-button-file"
              type="file"
              onChange={handleImage}
            />
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="span"
            >
              <PhotoCamera />
            </IconButton>
          </label>
        </Tooltip>
        <Tooltip title="Delete">
          <IconButton onClick={imageUrl ? handleClickOpen : null}>
            <DeleteIcon />
          </IconButton>
        </Tooltip>
        <div>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                本当に写真を削除しますか？
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleClose}>いいえ</Button>
              <Button onClick={deleteImage} autoFocus>
                はい
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </SDiv>
    </div>
  );
};

const SImg = styled.img`
  width: 100px;
  padding: 1em;
`;

const SDiv = styled.div`
  text-align: center;
  display: flex;
`;

const Sbutton = styled.button`
  :hover {
    cursor: pointer;
  }
`;

export default Sample;
