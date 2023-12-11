import { View, ScrollView, Image } from "react-native";
import React, { useContext } from "react";
import { StatusBar } from "expo-status-bar";
import { ActivityIndicator, MD2Colors } from "react-native-paper";

import Search from "../sections/Search/search.section";
import Info from "../sections/User/components/info.component";
import User from "../sections/User/user.section";
import Repos from "../sections/Repository/repos.section";

import { colors } from "../utils";
import { SafeArea } from "../utils/safe-are.utils";
import { GithubContext } from "../context/context";

export default function DashboardScreen() {
  const [state, setState] = React.useState({ open: false });

  const { isLoading } = useContext(GithubContext);

  if (isLoading) {
    return (
      <>
        <StatusBar />
        <SafeArea>
          <Search />
        </SafeArea>
        <View
          style={{
            flex: 1,
            backgroundColor: colors.primary10,
            justifyContent: "center",
          }}
        >
          <ActivityIndicator
            size={200}
            animating={true}
            color={colors.primary5}
          />
        </View>
      </>
    );
  }

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  return (
    <>
      <StatusBar />
      <SafeArea>
        <Search />
        <ScrollView style={{ backgroundColor: colors.primary10 }}>
          <Info />
          <User />
          <Repos />
        </ScrollView>
      </SafeArea>
    </>
  );
}
