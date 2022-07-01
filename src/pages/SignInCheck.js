// lib
import React, { useState, useContext } from "react";
import { Link, Redirect, useHistory } from "react-router-dom";
import styled from "styled-components";
import firebase from "../config/firebase";

// @material-ui
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";

// components

import { AuthContext } from "../AuthService";

export const SignInCheck = () => {
  const [email, setEmail] = useState("");

  const user = useContext(AuthContext);

  const history = useHistory();

  if (user) {
    return <Redirect to="/" />;
  }

  const handleSubmit = (e) => {
    const actionCodeSettings = {
      url: `${window.location.origin}/signup`,
      handleCodeInApp: true,
    };

    e.preventDefault();
    firebase
      .auth()
      .sendSignInLinkToEmail(email, actionCodeSettings)
      .then(function() {
        window.localStorage.setItem("emailForSignIn", email);
        console.log(window.localStorage.getItem("emailForSignIn"));
        console.log("succes");
        history.push("/");
      })
      .catch(function(error) {
        console.log(error.code);
        console.log(error.message);
        alert("無効な値です");
      });
  };

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
          メール認証
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
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />

          <br />
          <Button type="submit" variant="contained" color="primary">
            メールを送る
          </Button>
          <br />
        </Box>
        <p>
          アカウントをお持ちですか？ &nbsp;
          <Link to="/login">ログイン</Link>
        </p>
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
