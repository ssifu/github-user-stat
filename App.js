import { initializeApp } from "firebase/app";

import Navigation from "./src/navigation";
import AuthenticationContextProvider from "./src/context/authentication.context";

const firebaseConfig = {
  apiKey: "AIzaSyD3TlZ0aOgkKm5Ti2Zpv81luu-E59mJfpg",
  authDomain: "githubuserstat.firebaseapp.com",
  projectId: "githubuserstat",
  storageBucket: "githubuserstat.appspot.com",
  messagingSenderId: "407696514058",
  appId: "1:407696514058:web:9a74307df1cc49fd61d3f3",
};

initializeApp(firebaseConfig);

export default function App() {
  return (
    <AuthenticationContextProvider>
      <Navigation />
    </AuthenticationContextProvider>
  );
}
