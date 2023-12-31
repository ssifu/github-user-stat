import { useContext, useState } from "react";
import { ActivityIndicator, useTheme } from "react-native-paper";
import styled from "styled-components/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import {
  AccountContainer,
  AccountBackground,
  AccountCover,
  AuthInput,
  Title,
  ErrorContainer,
  ErrorText,
} from "../utils/accounts.utils";
import { AuthenticationContext } from "../context/authentication.context";
import { colors, fonts } from "../utils";

export const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const { onLogin, isLoading, error } = useContext(AuthenticationContext);

  const theme = useTheme();
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Login</Title>
      <AccountContainer>
        <AuthInput
          label="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          placeholder="E-mail"
          onChangeText={(text) => setEmail(text)}
        />
        <AuthInput
          label="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          placeholder="Password"
          onChangeText={(text) => setPassword(text)}
        />
        {error && (
          <ErrorContainer>
            <ErrorText>{error}</ErrorText>
          </ErrorContainer>
        )}

        <LoginSignupButton
          activeOpacity={0.6}
          disabled={isLoading}
          style={{ opacity: isLoading ? 0.5 : 1 }}
          onPress={() => onLogin(email, password)}
        >
          {isLoading ? (
            <ActivityIndicator
              size={30}
              animating={true}
              color={colors.white}
            />
          ) : null}
          <TextStyle>{isLoading ? "Loging in..." : "Login"}</TextStyle>
        </LoginSignupButton>
      </AccountContainer>
      <LoginSignupButton
        activeOpacity={0.6}
        style={{ width: 150 }}
        onPress={() => navigation.goBack()}
      >
        <FontAwesome name="arrow-left" size={24} color={colors.white} />
        <TextStyle>Back</TextStyle>
      </LoginSignupButton>
    </AccountBackground>
  );
};

const LoginSignupButton = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  border-radius: 4px;
  border-color: transparent;
  padding: 8px 16px;
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
  text-align: center;
`;
