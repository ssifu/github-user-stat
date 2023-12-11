import { View, Platform } from "react-native";
import React, { useContext, useState } from "react";
import { SearchBar } from "@rneui/themed";
import styled from "styled-components/native";
import { colors, fonts, spacing } from "../../utils";
import { SafeArea } from "../../utils/safe-are.utils";
import { GithubContext } from "../../context/context";
import { AntDesign } from "@expo/vector-icons";
import { Dialog, Portal, Text, Provider } from "react-native-paper";

const Heading = styled.Text`
  margin-vertical: 16px;
  font-size: 20px;
  font-family: ${fonts.mono};
  letter-spacing: ${spacing.spacing};
  color: ${colors.grey5};
`;

const SearchButton = styled.TouchableOpacity`
  border-radius: 4px;
  border-color: transparent;
  padding: 8px;
  text-transform: capitalize;
  letter-spacing: ${spacing.spacing};
  background: ${colors.primary5};
  color: ${colors.white};
  cursor: pointer;
  font-family: ${fonts.mono};
`;

const ErrorText = styled.Text`
  margin-vertical: 16px;
  font-size: 14px;
  font-family: ${fonts.mono};
  letter-spacing: ${spacing.spacing};
  color: ${colors.redDark};
`;

export default function Search() {
  const [user, setUser] = useState("");

  const { requests, error, searchGithubUser } = useContext(GithubContext);

  const updateSearch = () => {
    if (user) {
      searchGithubUser(user);
    }
  };
  return (
    <SafeArea
      style={{
        marginHorizontal: 16,
      }}
    >
      {requests > 0 && (
        <SearchBar
          platform={Platform.OS}
          placeholder="Search"
          clearIcon={() => (
            <SearchButton activeOpacity={0.6} onPress={updateSearch}>
              <Text style={{ color: "white", fontFamily: fonts.mono }}>
                Search
              </Text>
            </SearchButton>
          )}
          onChangeText={(text) => setUser(text)}
          value={user}
        />
      )}
      <Heading>Requests: {requests} / 60</Heading>
      {error.show ? <ErrorText>{error.message}</ErrorText> : null}
    </SafeArea>
  );
}
