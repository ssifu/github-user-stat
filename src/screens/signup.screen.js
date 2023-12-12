import { useContext, useState } from "react";
import { ActivityIndicator, MD2Colors, useTheme } from "react-native-paper";
import styled from "styled-components/native";
import FontAwesome from "react-native-vector-icons/FontAwesome";

import {
  AccountContainer,
  AccountBackground,
  AccountCover,
  AuthButton,
  AuthInput,
  Title,
  ErrorContainer,
  ErrorText,
} from "../utils/accounts.utils";
import { AuthenticationContext } from "../context/authentication.context";
import { colors, fonts } from "../utils";

export const SignupScreen = ({ navigation }) => {
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const { onSignup, isLoading, error } = useContext(AuthenticationContext);

  const theme = useTheme();
  return (
    <AccountBackground>
      <AccountCover />
      <Title>Sign up</Title>
      <AccountContainer>
        {/* <AuthInput
          placeholder="Username (Github)"
          value={username}
          textContentType="username"
          autoCapitalize="none"
          onChangeText={(text) => setUsername(text)}
        /> */}
        <AuthInput
          placeholder="E-mail"
          value={email}
          textContentType="emailAddress"
          keyboardType="email-address"
          autoCapitalize="none"
          onChangeText={(text) => setEmail(text)}
        />
        <AuthInput
          placeholder="Password"
          value={password}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setPassword(text)}
        />
        <AuthInput
          placeholder="Confirm Password"
          value={confirmPassword}
          textContentType="password"
          secureTextEntry
          autoCapitalize="none"
          onChangeText={(text) => setConfirmPassword(text)}
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
          onPress={() => onSignup(username, email, password, confirmPassword)}
        >
          {isLoading ? (
            <ActivityIndicator
              size={30}
              animating={true}
              color={colors.white}
            />
          ) : null}
          <TextStyle>{isLoading ? "Signing up..." : "Signup"}</TextStyle>
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
