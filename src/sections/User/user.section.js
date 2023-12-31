import { View, Text } from "react-native";
import React from "react";
import styled from "styled-components/native";

import Card from "./components/card.component";
import Followers from "./components/followers.component";

const UserComponentContainer = styled.View`
  margin-top: 20px;
`;

export default function User() {
  return (
    <UserComponentContainer>
      <Card />
      <Followers />
    </UserComponentContainer>
  );
}
