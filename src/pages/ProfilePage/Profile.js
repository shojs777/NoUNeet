import React from "react";
import styled from "styled-components";
import { Header } from "../../components/header/Header";
import ProfileMain from "./ProfileMain";

export const Profile = () => {
  return (
    <SContainer className="Profile">
      <Header />
      <SProfileMain>
        <ProfileMain />
      </SProfileMain>
    </SContainer>
  );
};
const SContainer = styled.div``;

const SProfileMain = styled.div`
  height: 85%;
`;
