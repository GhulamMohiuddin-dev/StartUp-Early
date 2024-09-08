import React, { createContext, useState } from "react";
import axios from "axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
  const [refreshToken, setRefreshToken] = useState(localStorage.getItem("refreshToken"));

  const setTokens = (access, refresh) => {
    setAccessToken(access);
    setRefreshToken(refresh);
    localStorage.setItem("accessToken", access); 
    localStorage.setItem("refreshToken", refresh);
  };

  const refreshAccessToken = async () => {
    try {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) throw new Error("No refresh token available");

      const response = await axios.post(
        "https://api.campusspace.startupearly.com/api/v1/users/token/refresh/",
        { refresh: refreshToken }
      );
      const { access } = response.data;
      setAccessToken(access); 
      localStorage.setItem("accessToken", access);
      return access;
    } catch (error) {
      console.error("Failed to refresh access token", error);
      toast.error("Session Expired. Please login again!")
      window.location.href = '/';
      return null;
    }
  };

  return (
    <AuthContext.Provider value={{ accessToken, refreshAccessToken, setTokens }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;
