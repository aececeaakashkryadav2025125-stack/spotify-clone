import axios from "axios";

const API =
  "http://localhost:8080/songs";

// GET SONGS
export const getSongs =
  async () => {

    const response =
      await axios.get(API);

    return response.data;
};

// ADD SONG
export const addSong =
  async (song) => {

    const response =
      await axios.post(
        API,
        song
      );

    return response.data;
};