import React, { createContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../config";
import { createUser, userSignIn, verifyOTP } from "../api/auth";
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [userInfo, setUserInfo] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [splashLoading, setSplashLoading] = useState(false);
  const [error, setError] = useState("");

  const register = async (name, email, password, navigation) => {
    try {
      const data = await createUser(name, email, password);
      if (data.success) {
        setUserInfo((prev) => {
          return data.userInfo;
        });
        navigation.replace("SignUpOTP");
      } else {
        alert(data.message);
        setIsLoading(false);
      }
    } catch (e) {
      console.log(e);
      console.log(`register error ${e}`);
      setIsLoading(false);
    }
  };
  const OTPverification = async (otp, navigation) => {
    const userEmail = userInfo.email;
    try {
      const data = await verifyOTP(userEmail, otp);
      if (data.success) {
        setIsLoading(false);
        navigation.replace("Login");
      } else {
        alert(data.message);
        setIsLoading(false);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const login = async (email, password, navigation) => {
    setIsLoading(true);
    try {
      const data = await userSignIn(email, password);

      if (data.success) {
        navigation.replace("Home");
        AsyncStorage.setItem(
          "refreshToken",
          JSON.stringify(data.refresh_token)
        );
        AsyncStorage.setItem("accessToken", JSON.stringify(data.access_token));
        setIsLoading(false);
      } else {
        alert(data.message);
        setIsLoading(false);
      }
    } catch (error) {
      console.log("here is ther error");
      setIsLoading(false);
      console.log(error);
    }
  };

  const logout = async (navigation) => {
    try {
      await AsyncStorage.removeItem("accessToken");
    } catch (err) {
      console.log(err);
    }
    navigation.replace("GetStarted");
  };

  // const isLoggedIn = async () => {
  //   try {
  //     setSplashLoading(true);

  //     let userInfo = await AsyncStorage.getItem("");
  //     userInfo = JSON.parse(userInfo);

  //     if (userInfo) {
  //       setUserInfo(userInfo);
  //     }

  //     setSplashLoading(false);
  //   } catch (e) {
  //     setSplashLoading(false);
  //     console.log(`is logged in error ${e}`);
  //   }
  // };

  return (
    <AuthContext.Provider
      value={{
        isLoading,
        userInfo,
        splashLoading,
        error,
        register,
        OTPverification,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
