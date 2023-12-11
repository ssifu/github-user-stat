import { View, Platform, StatusBar } from "react-native";
import React, { useContext, useState } from "react";
import { SearchBar } from "@rneui/themed";
import styled from "styled-components/native";
import { Text } from "react-native-paper";

import { colors, fonts, spacing } from "../../utils";
import { GithubContext } from "../../context/context";

const Heading = styled.Text`
  margin: 16px;
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
    <View
      style={{
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight + 10 : 0,
        backgroundColor: colors.primary10,
      }}
    >
      <SearchBar
        platform={Platform.OS}
        placeholder="Search"
        clearIcon={() =>
          requests > 0 ? (
            <SearchButton activeOpacity={0.6} onPress={updateSearch}>
              <Text style={{ color: "white", fontFamily: fonts.mono }}>
                Search
              </Text>
            </SearchButton>
          ) : null
        }
        onChangeText={(text) => setUser(text)}
        value={user}
      />
      <Heading>Requests: {requests} / 60</Heading>
      {error.show ? <ErrorText>{error.message}</ErrorText> : null}
    </View>
  );
}
