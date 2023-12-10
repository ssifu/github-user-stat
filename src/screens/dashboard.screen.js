import { View, ScrollView } from "react-native";
import React from "react";

// import Info from "../components/info.component";
// import User from "../components/User/user.component";
import { colors } from "../utils";

export default function DashboardScreen() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: colors.primary10 }}>
      {/* <Info />
      <User /> */}
    </ScrollView>
  );
}
