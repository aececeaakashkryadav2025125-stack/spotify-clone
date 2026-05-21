import axios from "axios";

const BASE_URL =
  "http://localhost:8080/songs";

/* Get All Songs */

export const getAllSongs =
  async () => {

    const response =
      await axios.get(
        BASE_URL
      );

    return response.data;
  };