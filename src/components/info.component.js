import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import OcticonIcon from "react-native-vector-icons/Octicons";
import FeatherIcon from "react-native-vector-icons/Feather";
import styled from "styled-components/native";

import { SafeArea } from "../utils/safe-are.utils";
import { GithubContext } from "../context/context";
import { utils, colors } from "../utils";

const InfoComponentsContainer = styled.View`
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 8px;
  background-color: ${colors.primary10};
`;

const InfoComponent = styled.View`
  border-radius: ${utils.radius};
  padding: 16px;
  align-items: center;
  gap: 16px;
  background: ${colors.white};
  width: 45%;
  align-items: center;
`;

const Figure = styled.Text`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 0;
  letter-spacing: 0;
`;

const Label = styled.Text`
  margin-bottom: 0;
  text-transform: capitalize;
`;

const InfoContainer = styled.View`
  justify-content: center;
  align-items: center;
`;

export default function Info() {
  const { githubUser } = useContext(GithubContext);
  const { public_repos, followers, following, public_gists } = githubUser;
  const items = [
    {
      id: 1,
      icon: (
        <OcticonIcon
          name="repo"
          size={20}
          style={styles.iconStyle("rgb(255, 224, 240)")}
          color="pink"
        />
      ),
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: (
        <FeatherIcon
          name="users"
          size={20}
          style={styles.iconStyle("#e0fcff")}
          color="green"
        />
      ),
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: (
        <FeatherIcon
          name="user-plus"
          size={20}
          style={styles.iconStyle("rgb(230, 230, 255)")}
        />
      ),
      label: "following",
      value: following,
    },
    {
      id: 4,
      icon: (
        <OcticonIcon
          name="code-square"
          size={20}
          style={styles.iconStyle("rgb(255, 251, 234)")}
        />
      ),
      label: "gists",
      value: public_gists,
    },
  ];
  return (
    <SafeArea>
      <InfoComponentsContainer>
        {items.map((item) => {
          const { id, icon, label, value } = item;
          return (
            <InfoComponent key={id}>
              {icon}
              <InfoContainer>
                <Figure>{value}</Figure>
                <Label>{label}</Label>
              </InfoContainer>
            </InfoComponent>
          );
        })}
      </InfoComponentsContainer>
    </SafeArea>
  );
}

const styles = StyleSheet.create({
  iconStyle(color) {
    return {
      height: 50,
      width: 50,
      backgroundColor: color,
      padding: 16,
      borderRadius: 100,
      textAlign: "center",
    };
  },
});
