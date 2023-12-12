import styled from "styled-components/native";
import { Button, Text } from "react-native-paper";

import colors from "./colors";
import fonts from "./fonts";

export const AccountBackground = styled.ImageBackground`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${colors.primary10};
`;

export const AccountCover = styled.View`
  position: absolute;
  width: 100%;
  height: 100%;
`;

export const AccountContainer = styled.View`
  padding: 4px;
  margin-top: 4px;
  gap: 8px;
`;

export const AuthButton = styled(Button).attrs({
  buttonColor: colors.primary5,
  style: {
    borderRadius: 4,
  },
})`
  padding: 4px;
`;

export const AuthInput = styled.TextInput`
  width: 300px;
  height: 60px;
  border-radius: 8px;
  padding: 16px;
  font-family: ${fonts.mono};
  font-size: 16px;
  border-width: 1px;
  border-color: ${colors.primary5};
  background-color: ${colors.white};
`;

export const Title = styled(Text)`
  font-size: 36px;
  font-family: ${fonts.mono};
  color: ${colors.primary3};
  font-weight: bold;
`;
export const ErrorContainer = styled.View`
  max-width: 300px;
  margin-top: 4px;
  margin-bottom: 4px;
`;

export const ErrorText = styled.Text`
  font-family: ${fonts.mono};
  color: ${colors.redDark};
  font-weight: bold;
`;

export const AnimationWrapper = styled.View`
  width: 100%;
  height: 40%;
  position: absolute;
  top: 30px;
  padding: 4px;
`;
