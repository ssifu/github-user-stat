import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { DashboardScreen, ProfileStats } from "../screens";
import { GithubProvider } from "../context/context";

const Stack = createStackNavigator();

export const AppNavigator = () => {
  return (
    <GithubProvider>
      <Stack.Navigator
        screenOptions={{
          ...TransitionPresets.FadeFromBottomAndroid,
        }}
      >
        <Stack.Screen
          options={{ headerShown: false }}
          name="Dashboard"
          component={DashboardScreen}
        />
        <Stack.Screen name="ProfileStats" component={ProfileStats} />
      </Stack.Navigator>
    </GithubProvider>
  );
};
