//components
import React, { useContext } from "react";
import { AuthContext } from "../AuthService";
import { Route, Redirect } from "react-router-dom";
import { Header } from "../components/header/Header";
import { MainPage } from "../pages/MainPage/MainPage";

export const Home = () => {
  const user = useContext(AuthContext);
  return user ? (
    <>
      <Header />
      <MainPage />
    </>
  ) : (
    <Redirect to="/login" />
  );
};
