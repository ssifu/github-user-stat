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
import { GithubContext } from "../../../context/context";
import { fonts } from "../../../utils";
import { CardComponent, CardTag, CardTagText } from "./card.styles";

const ErrorText = styled.Text`
  margin-vertical: 16px;
  font-size: 14px;
  align-self: center;
  font-family: ${fonts.mono};
  letter-spacing: ${spacing.spacing};
  color: ${colors.redDark};
`;

export default function Followers() {
  const { followers } = useContext(GithubContext);
  return (
    <CardComponent>
      <CardTag>
        <CardTagText>Followers</CardTagText>
      </CardTag>
      {followers.length > 0 ? (
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
      ) : (
        <ErrorText>No followers found.</ErrorText>
      )}
    </CardComponent>
  );
}

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
