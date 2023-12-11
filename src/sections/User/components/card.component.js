import { View, Text, Linking, TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import styled from "styled-components/native";
import OcticonIcon from "react-native-vector-icons/Octicons";
import Ionicons from "react-native-vector-icons/Ionicons";

import { GithubContext } from "../../../context/context";
import { colors, fonts, spacing } from "../../../utils";
import { CardComponent, CardTag, CardTagText } from "./card.styles";

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

  const linkPreix = blog.split(".")[0].split(":")[0];
  const blogLink =
    linkPreix === "http" || linkPreix === "https"
      ? `${blog}`
      : `https://${blog}`;

  return (
    <CardComponent>
      <CardTag>
        <CardTagText>User</CardTagText>
      </CardTag>
      <AccountButton
        activeOpacity={0.2}
        onPress={() => Linking.openURL(html_url)}
      >
        <Text
          style={{
            fontFamily: fonts.mono,
            fontWeight: "bold",
            color: colors.white,
            textAlign: "center",
            fontSize: 11,
          }}
        >
          Follow
        </Text>
      </AccountButton>
      <UserInfoView>
        <UserImage source={{ uri: avatar_url }} />
        <View>
          <UserName>{name}</UserName>
          <TwitterName
            onPress={() =>
              Linking.openURL(`https://www.twitter.com/${twitter_username}`)
            }
          >
            @{twitter_username || null}
          </TwitterName>
        </View>
      </UserInfoView>
      {bio ? (
        <UserBio>{bio}</UserBio>
      ) : (
        <UserBio style={{ color: colors.grey8 }}>No bio found!</UserBio>
      )}
      <UserLinks>
        <Link>
          <OcticonIcon
            name="organization"
            size={20}
            color={`${colors.grey3}`}
          />
          {company ? (
            <LinkText>{company}</LinkText>
          ) : (
            <LinkText style={{ color: colors.grey8 }}>No Company</LinkText>
          )}
        </Link>
        <Link>
          <Ionicons name="location-sharp" size={20} color={`${colors.grey3}`} />
          <LinkText>{location || "Earth"}</LinkText>
        </Link>
        <Link>
          <Ionicons name="link" size={20} color={`${colors.grey3}`} />
          {blog ? (
            <TouchableOpacity activeOpacity={0.1}>
              <LinkText
                style={{ color: `${colors.primary5}` }}
                onPress={() => Linking.openURL(blogLink)}
              >{`${blog}`}</LinkText>
            </TouchableOpacity>
          ) : (
            <LinkText style={{ color: colors.grey8 }}>No blog found</LinkText>
          )}
        </Link>
      </UserLinks>
    </CardComponent>
  );
}

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
  color: ${colors.primary5};
  margin-bottom: 0px;
  font-family: ${fonts.mono};
`;

const AccountButton = styled.TouchableOpacity`
  positon: absolute;
  padding: 10px 12px;
  left: 250px;
  width: 70px;
  font-weight: bold;
  background-color: ${colors.primary5};
  border-radius: 20px;
  justify-self: flex-end;
  margin-left: 10px;
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
