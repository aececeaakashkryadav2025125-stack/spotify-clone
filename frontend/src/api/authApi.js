import axios from "axios";

const BASE_URL =
  "http://localhost:8080/auth";

/* Signup API */

export const signupUser =
  async (userData) => {

    const response =
      await axios.post(

        `${BASE_URL}/signup`,

        userData
      );

    return response.data;
  };

/* Login API */

export const loginUser =
  async (userData) => {

    const response =
      await axios.post(

        `${BASE_URL}/login`,

        userData
      );

    return response.data;
  };