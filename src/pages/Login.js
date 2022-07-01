// lib
import React, { useState, useContext } from "react";
import { Redirect, Link } from "react-router-dom";
import styled from "styled-components";
import firestore from "firebase/firestore";
// material-ui
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
// import Container from "@material-ui/core/Container";

// components

import { AuthContext } from "../AuthService";
import firebase from "../config/firebase";

export const Login = ({ history }) => {
  const { user, email, password, setUser, setEmail, setPassword } = useContext(
    AuthContext
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    await firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((user) => {
        history.push("/");
        setUser(user);
      })
      .catch((err) => {
        console.log(err);
        alert("メールアドレスまたはパスワードが間違っています。");
      });
  };

  if (user) {
    // return <Redirect to="/" />;
  }

  return (
    <SContainer>
      <Box
        sx={{
          paddingTop: 100,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          ログイン
        </Typography>
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={{
            display: "flex",
            flexDirection: "column",
            width: 300,
            marginBottom: 15,
          }}
        >
          <TextField
            margin="normal"
            required
            fullwidth="true"
            variant="outlined"
            label="E-mail"
            name="e-mail"
            autoComplete="e-mail"
            autoFocus
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <TextField
            type="password"
            margin="normal"
            required
            fullwidth="true"
            variant="outlined"
            label="Password"
            name="password"
            autoComplete="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Link style={{ fontSize: "18px" }} to="/resetpassword">
            パスワードをお忘れですか？
          </Link>
          <br />
          <br />
          <Button
            type="submit"
            fullwidth="true"
            variant="contained"
            color="primary"
            size="large"
          >
            ログイン
          </Button>
        </Box>
        <br />
        <br />
        <p>
          アカウントをお持ちでないですか？&nbsp;
          <Link to="/signup">新規登録</Link>
        </p>
        <br />
        <br />
        <br />
        <br />
      </Box>
    </SContainer>
  );
};
const SContainer = styled.div`
  background-image: url("https://www.beiz.jp/images_M/sky/sky_00359.jpg");
  max-width: 100vw;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100vh;
`;
