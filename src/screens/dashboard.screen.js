import { View, ScrollView } from "react-native";
import React from "react";

import Info from "../sections/User/components/info.component";
import User from "../sections/User/user.section";
import Repos from "../sections/Repository/repos.section";
import { colors } from "../utils";

export default function DashboardScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.primary10 }}>
      <Info />
      <User />
      <Repos />
    </ScrollView>
  );
}
