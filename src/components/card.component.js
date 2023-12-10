import { View, Text, Linking, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import { Button } from "react-native-paper";
import styled from "styled-components/native";
import OcticonIcon from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { GithubContext } from "../context/context";
import { colors, fonts, spacing } from "../utils";

export default function Card() {
  const { githubUser } = useContext(GithubContext);
  const {
    avatar_url,
    html_url,
    name,
    company,
    blog,
    bio,
    location,
    twitter_username,
  } = githubUser;
  return (
    <CardComponent>
      <CardTag>
        <CardTagText>User</CardTagText>
      </CardTag>
      <UserInfoView>
        <UserImage source={{ uri: avatar_url }} />
        <View>
          <UserName>{name}</UserName>
          <TwitterName>@{twitter_username || "john_doe"}</TwitterName>
        </View>
        <TouchableOpacity activeOpacity={0.2}>
          <AccountButton
            mode="contained"
            buttonColor={`${colors.primary5}`}
            textColor={`${colors.white}`}
            onPress={() => Linking.openURL(html_url)}
          >
            Follow
          </AccountButton>
        </TouchableOpacity>
      </UserInfoView>
      <UserBio>{bio}</UserBio>
      <UserLinks>
        <Link>
          <OcticonIcon
            name="organization"
            size={20}
            color={`${colors.grey3}`}
          />
          <LinkText>{company}</LinkText>
        </Link>
        <Link>
          <Ionicons name="location-sharp" size={20} color={`${colors.grey3}`} />
          <LinkText>{location || "Earth"}</LinkText>
        </Link>
        <Link>
          <Ionicons name="link" size={20} color={`${colors.grey3}`} />
          <TouchableOpacity activeOpacity={0.1}>
            <LinkText
              style={{ color: `${colors.primary5}` }}
              onPress={() => Linking.openURL(`https://${blog}`)}
            >{`https://${blog}`}</LinkText>
          </TouchableOpacity>
        </Link>
      </UserLinks>
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

const UserInfoView = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  margin: 16px 0;
`;

const UserImage = styled.Image`
  width: 75px;
  height: 75px;
  border-radius: 40px;
`;

const UserName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 4px;
  letter-spacing: ${spacing.spacing};
  font-family: ${fonts.mono};
`;

const TwitterName = styled.Text`
  margin-bottom: 0px;
  font-family: ${fonts.mono};
`;

const AccountButton = styled(Button)`
  justify-self: flex-end;
  margin-left: 16px;
  font-family: ${fonts.mono};
`;

const UserBio = styled.Text`
  color: ${colors.grey3};
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 50px;
  font-family: ${fonts.mono};
`;

const UserLinks = styled.View`
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
`;

const Link = styled.View`
  flex-direction: row;
  gap: 16px;
`;

const LinkText = styled.Text`
  font-size: 14px;
  font-family: ${fonts.mono};
`;
