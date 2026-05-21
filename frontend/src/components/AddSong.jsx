import {
  useState,
} from "react";

import {
  addSong,
} from "../api/songApi";

const AddSong = ({
  refreshSongs,
}) => {

  const [song,
    setSong] =
    useState({

      name: "",

      artist: "",

      imageUrl: "",

      songUrl: "",
    });

  // HANDLE CHANGE
  const handleChange =
    (e) => {

      setSong({

        ...song,

        [e.target.name]:
          e.target.value,
      });
    };

  // SUBMIT
  const handleSubmit =
    async (e) => {

      e.preventDefault();

      try {

        await addSong(song);

        alert(
          "Song Added Successfully"
        );

        setSong({

          name: "",

          artist: "",

          imageUrl: "",

          songUrl: "",
        });

        refreshSongs();

      } catch (error) {

        console.log(error);
      }
    };

  return (

    <div
      className="
        bg-[#181818]
        p-5
        rounded-lg
        mt-10
      "
    >

      <h1
        className="
          text-2xl
          font-bold
          mb-5
        "
      >
        🎵 Add Song
      </h1>

      <form
        onSubmit={handleSubmit}
        className="
          flex
          flex-col
          gap-4
        "
      >

        <input
          type="text"
          name="name"
          placeholder="Song Name"
          value={song.name}
          onChange={handleChange}
          className="
            p-3
            rounded
            bg-[#242424]
            outline-none
          "
          required
        />

        <input
          type="text"
          name="artist"
          placeholder="Artist"
          value={song.artist}
          onChange={handleChange}
          className="
            p-3
            rounded
            bg-[#242424]
            outline-none
          "
          required
        />

        <input
          type="text"
          name="imageUrl"
          placeholder="Image URL"
          value={song.imageUrl}
          onChange={handleChange}
          className="
            p-3
            rounded
            bg-[#242424]
            outline-none
          "
          required
        />

        <input
          type="text"
          name="songUrl"
          placeholder="/songs/song1.mp3"
          value={song.songUrl}
          onChange={handleChange}
          className="
            p-3
            rounded
            bg-[#242424]
            outline-none
          "
          required
        />

        <button
          type="submit"
          className="
            bg-green-500
            text-black
            py-3
            rounded-full
            font-bold
          "
        >
          Add Song
        </button>

      </form>

    </div>

  );
};

export default AddSong;