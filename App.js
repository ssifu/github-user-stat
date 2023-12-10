import { NavigationContainer } from "@react-navigation/native";

import { AppNavigator } from "./src/navigation/app.navigator";
import { GithubProvider } from "./src/context/context";

export default function App() {
  return (
    <>
      <NavigationContainer>
        <GithubProvider>
          <AppNavigator />
        </GithubProvider>
      </NavigationContainer>
    </>
  );
}
