import React, { useState, useContext, useEffect } from "react";
import { AuthContext } from "../../AuthService";
import firebase from "../../config/firebase";
import { getAuth } from "firebase/auth";
import { media } from "../../util/MediaQuery";
import Sample from "./EditPage/Photo/sample";

//material-ui
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import PhotoCamera from "@mui/icons-material/PhotoCamera";

import styled from "styled-components";
import { set } from "date-fns/esm";

const ProfileMain = () => {
  const {
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
  } = useContext(AuthContext);
  let selectValue;

  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setUser(user);
      console.log(user);
    }
  });

  useEffect(() => {
    // firebase.auth().onAuthStateChanged((user) => {
    // })
    // firebase.auth().onAuthStateChanged((user) => {
    //   if (user) {
    //     setUser(user)
    //   }
    // })
    //   .firestore()
    //   .collection("NoUNeet").doc("v1").collection("users").doc("wTIo6Z994WbVaA4wf0rC")
    //   .get()
    //   .then((querySnapshot) => {
    //     console.log(querySnapshot)
    //   });
    // firebase.auth.user
    // console.log(user)
  }, [jobValue]);
  const handleChange = (event) => {
    selectValue = event.target.value;
    setJobvalue(selectValue);
    console.log(selectValue);
    console.log(jobValue);
  };
  return (
    <>
      <STitle>My Profile</STitle>
      <br />
      <br />
      <SProfile>
        <SProfileImage>
          <SImageList>プロフィール画像</SImageList>
          <SIcon>
            <Sample />
          </SIcon>
        </SProfileImage>
        <br />
        <br />
        <br />
        <SProfileName>
          <SNameList>
            ユーザー名
            <br />
            <SSpan>
              (<span style={{ color: "red" }}>※</span>変更不可)
            </SSpan>
          </SNameList>
          <SName>{user ? user.displayName : null}</SName>
        </SProfileName>
        <br />
        <br />
        <br />
        電話番号
        <br />
        email
        <SProfileJobs>
          <SRadioBtn>
            <SJobList>職種</SJobList>
            <FormControl sx={{ width: 120, m: 2 }} variant="standard">
              <InputLabel id="demo-simple-select-label">Job</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={jobValue}
                label="Job"
                onChange={handleChange}
              >
                <MenuItem value={"noAnswer"}>回答しない</MenuItem>
                <MenuItem value={"student"}>学生</MenuItem>
                <MenuItem value={"worker"}>社会人</MenuItem>
              </Select>
            </FormControl>
          </SRadioBtn>
        </SProfileJobs>
        <br />
      </SProfile>
    </>
  );
};

const SProfile = styled.div`
  width: 50%;
  padding: 3%;
  margin-left: 21%;
  border: dashed;
  border-width: 7px;
`;

const STitle = styled.h1`
  text-align: center;
  color: #647878;
  font-family: sans-serif;
`;

const SProfileImage = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SImageList = styled.h2`
  display: flex;
  align-items: center;
  width: 28%;
  text-align: center;
  padding: 1%;
  border-style: solid;
  border-radius: 50px;
  ${media.tablet`  font-size:20px`}
  ${media.tablet`  width:35%`}
  ${media.phone`  font-size:18px`}
  ${media.phone`  width:39%`}
`;

const SIcon = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
`;

const SProfileName = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SNameList = styled.h2`
  width: 28%;
  text-align: center;
  padding: 1%;
  border-style: solid;
  border-radius: 50px;
  ${media.tablet`  font-size:20px`}
  ${media.tablet`  width:35%`}
  ${media.phone`  font-size:18px`}
  ${media.phone`  width:39%`}
`;

const SName = styled.h2`
  width: 40%;
  display: flex;
  align-items: center;
  ${media.tablet`  font-size:20px`}
`;

const SSpan = styled.p`
  font-size: 2px;
`;

const SProfileJobs = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SRadioBtn = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

const SJobList = styled.h2`
  width: 25%;
  text-align: center;
  padding: 1%;
  border-style: solid;
  border-radius: 50px;
  ${media.tablet`  font-size:20px`}
  ${media.tablet`  width:20%`}
  ${media.tablet`  padding-top:7%`}
  ${media.phone`  font-size:18px`}
  ${media.phone`  width:39%`}
  ${media.tablet`  padding-top:11%`}

`;

export default ProfileMain;
