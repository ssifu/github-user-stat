import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { SignupScreen, AccountScreen } from "../screens";
import { LoginScreen } from "../screens";

const Stack = createStackNavigator();

export const AccountNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Account" component={AccountScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
};
