import styled from "styled-components/native";
import React from "react";

import { fonts } from "../utils";
import { colors } from "../utils";

export const AccountScreen = ({ navigation }) => {
  return (
    <Container>
      <ImageContainer>
        <DisplayImage source={require("../../assets/login-img.png")} />
        <ButtonContainer>
          <LoginSignupButton
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Login")}
          >
            <TextStyle>Login</TextStyle>
          </LoginSignupButton>
          <LoginSignupButton
            activeOpacity={0.6}
            onPress={() => navigation.navigate("Signup")}
          >
            <TextStyle>Signup</TextStyle>
          </LoginSignupButton>
        </ButtonContainer>
      </ImageContainer>
    </Container>
  );
};

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary10};
`;

const ImageContainer = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  text-align: center;
`;

const DisplayImage = styled.Image`
  width: 400px;
  height: 400px;
`;

const ButtonContainer = styled.View`
  margin: 16px;
  flex-direction: row;
  gap: 10px;
`;

const LoginSignupButton = styled.TouchableOpacity`
  border-radius: 4px;
  border-color: transparent;
  padding: 12px 20px;
  text-transform: capitalize;
  letter-spacing: ${spacing.spacing};
  background: ${colors.primary5};
  color: ${colors.white};
  cursor: pointer;
`;

const TextStyle = styled.Text`
  color: white;
  font-family: ${fonts.mono};
  font-size: 24px;
  font-weight: bold;
`;
