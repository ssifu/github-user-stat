import React, { createContext, useState, useMemo, useEffect } from "react";
import { getApp } from "firebase/app";
import {
  signOut,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  getAuth,
  getReactNativePersistence,
  initializeAuth,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

import { loginRequest } from "./authentication.service";

export const AuthenticationContext = createContext();

export default function AuthenticationContextProvider({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  // const auth = useRef(getAuth()).current;
  const auth = useMemo(() => {
    // Initialize Firebase only if it hasn't been initialized
    initializeAuth(getApp(), {
      persistence: getReactNativePersistence(ReactNativeAsyncStorage),
    });

    return getAuth();
  }, []);
  onAuthStateChanged(auth, (usr) => {
    if (usr) {
      console.log(usr);
      setUser(usr);
      setIsLoading(false);
    } else {
      // setIsLoading(false);
    }
  });

  useEffect(() => {
    const usr = onAuthStateChanged(auth, (usr) => {
      if (usr) {
        setUser(usr);
        setIsLoading(false);
      } else {
        setIsLoading(false);
      }
    });
    if (usr) {
      setUser(usr);
    } else {
      onLogout();
    }
  }, []);

  const onLogin = (email, password) => {
    setIsLoading(true);
    loginRequest(auth, email, password)
      .then((u) => {
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(
          e.toString().split(":")[2].split(".")[0].trim() ===
            "Error (auth/invalid-credential)"
            ? "Invalid Credential"
            : null
        );
      });
  };

  const onSignup = (username, email, password, confirmPassword) => {
    setIsLoading(true);
    if (password !== confirmPassword) {
      setError("Error: Passwords do not match");
      setIsLoading(false);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((u) => {
        console.log("Creating User");
        setUser(u);
        setIsLoading(false);
      })
      .catch((e) => {
        setIsLoading(false);
        setError(
          e.toString().split(":")[2].split(".")[0].trim() ===
            "Error (auth/email-already-in-use)"
            ? "Email already in use"
            : null
        );
      });
  };

  const onLogout = () => {
    signOut(auth).then(() => {
      setUser(null);
      setError(null);
    });
  };

  return (
    <AuthenticationContext.Provider
      value={{
        isAuthenticated: !!user,
        user,
        isLoading,
        error,
        onLogin,
        onSignup,
        onLogout,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
