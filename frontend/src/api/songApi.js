import axios from "axios";

const API =
  "https://spotify-clone-2srv.onrender.com/songs";

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