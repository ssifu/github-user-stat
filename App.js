import { NavigationContainer } from "@react-navigation/native";
import { useAuth0, Auth0Provider } from "react-native-auth0";

import { AppNavigator } from "./src/navigation/app.navigator";
import { GithubProvider } from "./src/context/context";

export default function App() {
  return (
    // <Auth0Provider
    //   domain={"samiulsifat.us.auth0.com"}
    //   clientId="ghMS4tLLkSROc9Gt11z5VFLSBCpmmrQl"
    // >
    <NavigationContainer>
      <GithubProvider>
        <AppNavigator />
      </GithubProvider>
    </NavigationContainer>
    // </Auth0Provider>
  );
}
