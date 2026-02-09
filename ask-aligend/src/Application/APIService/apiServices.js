import React from "react";
import axios from "axios";

export default function apiServices() {
  const baseUrl = process.env.REACT_APP_API_URL;
  // const baseUrl = "http://127.0.0.1:8000";
  const accountRegister = async (data) => {
    try {
      const response = await axios.post(`${baseUrl}/user_register`, data);
      console.log("API response:", response.data);
    } catch (error) {
      console.log("Error in accountRegister API call:", error);
    }
  };
const userAccountLogin = async (data) => {
  try {
    const response = await axios.post(
      `${baseUrl}/user_login`,
      data
    );
    console.log("Login API response:", response.data);
    return response.data;   // ✅ MUST
  } catch (error) {
    console.log("Login API error:", error);
    throw error;
  }
};


  return { accountRegister,userAccountLogin };
}
