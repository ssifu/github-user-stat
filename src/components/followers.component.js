import {
  View,
  Text,
  Image,
  ScrollView,
  FlatList,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import React, { useContext } from "react";
import { GithubContext } from "../context/context";
import { fonts } from "../utils";

export default function Followers() {
  const { followers } = useContext(GithubContext);
  return (
    <CardComponent>
      <CardTag>
        <CardTagText>Followers</CardTagText>
      </CardTag>
      <FollowersContainer
        nestedScrollEnabled={true}
        showsVerticalScrollIndicator={true}
      >
        {followers.map((follower, index) => {
          const { avatar_url: img, html_url, login } = follower;
          return (
            <TouchableOpacity key={index} activeOpacity={0.5}>
              <FollowerItem>
                <FollowerImage source={{ uri: img }} alt={login} />
                <View>
                  <FollowerName>{login}</FollowerName>
                  <FollowerLink>{html_url}</FollowerLink>
                </View>
              </FollowerItem>
            </TouchableOpacity>
          );
        })}
      </FollowersContainer>
    </CardComponent>
  );
}

const CardComponent = styled.View`
  background: ${colors.white};
  padding: 16px;
  margin: 16px;
  position: relative;
`;

const CardTag = styled.View`
  position: absolute;
  top: 0px;
  left: 0px;
  transform: translateY(-20px);
  background: ${colors.white};
  color: ${colors.grey5};
  border-top-right-radius: ${spacing.radius};
  border-top-left-radius: ${spacing.radius};
  text-transform: capitalize;
  padding: 2px 16px;
`;

const CardTagText = styled.Text`
  font-size: 20px;
  font-family: ${fonts.mono};
  letter-spacing: ${spacing.spacing};
  background: ${colors.white};
  color: ${colors.grey5};
`;

const FollowersContainer = styled.ScrollView`
  height: 260px;
  padding-vertical: 10px;
`;

const FollowerItem = styled.View`
  flex-direction: row;
  align-items: center;
  border-color: #ddd;
  margin-bottom: 16px;
  gap: 16px;
`;

const FollowerImage = styled.Image`
  width: 45px;
  height: 45px;
  border-radius: 40px;
`;

const FollowerName = styled.Text`
  font-family: ${fonts.mono};
`;

const FollowerLink = styled.Text`
  font-family: ${fonts.mono};
`;
