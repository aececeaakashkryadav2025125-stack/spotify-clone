import {
  createContext,
  useEffect,
  useState,
} from "react";

import {
  getAllSongs,
} from "../api/songApi";

export const PlayerContext =
  createContext();

function PlayerProvider({
  children,
}) {

  /* Songs */

  const [songs, setSongs] =
    useState([]);

  /* Current Song */

  const [currentSongIndex,
    setCurrentSongIndex] =

    useState(

      Number(

        localStorage.getItem(
          "currentSongIndex"
        )

      ) || 0
    );

  /* Search */

  const [search, setSearch] =
    useState("");

  /* Recently Played */

  const [recentlyPlayed,
    setRecentlyPlayed] =

    useState(

      JSON.parse(

        localStorage.getItem(
          "recentlyPlayed"
        )

      ) || []
    );

  /* Liked Songs */

  const [likedSongs,
    setLikedSongs] =

    useState(

      JSON.parse(

        localStorage.getItem(
          "likedSongs"
        )

      ) || []
    );

  /* Playlists */

  const [playlists,
    setPlaylists] =

    useState(

      JSON.parse(

        localStorage.getItem(
          "playlists"
        )

      ) || []
    );

  /* Fetch Songs From Backend */

  useEffect(() => {

    const fetchSongs =
      async () => {

        try {

          const data =
            await getAllSongs();

          setSongs(data);

        } catch (error) {

          console.log(error);
        }
      };

    fetchSongs();

  }, []);

  /* Save Current Song */

  useEffect(() => {

    localStorage.setItem(

      "currentSongIndex",

      currentSongIndex
    );

  }, [currentSongIndex]);

  /* Current Song */

  const currentSong =
    songs[currentSongIndex];

  /* Play Song */

  const playSong =
    (song) => {

      setCurrentSongIndex(

        songs.findIndex(
          (s) =>
            s.id === song.id
        )
      );

      const updatedRecent = [

        song,

        ...recentlyPlayed.filter(
          (s) =>
            s.id !== song.id
        ),

      ].slice(0, 5);

      setRecentlyPlayed(
        updatedRecent
      );

      localStorage.setItem(

        "recentlyPlayed",

        JSON.stringify(
          updatedRecent
        )
      );
    };

  /* Next Song */

  const handleNext = () => {

    setCurrentSongIndex(
      (prev) =>

        prev ===
        songs.length - 1

          ? 0

          : prev + 1
    );
  };

  /* Previous Song */

  const handlePrevious = () => {

    setCurrentSongIndex(
      (prev) =>

        prev === 0

          ? songs.length - 1

          : prev - 1
    );
  };

  /* Toggle Like */

  const toggleLike =
    (song) => {

      const exists =

        likedSongs.find(
          (s) =>
            s.id === song.id
        );

      let updatedLikes;

      if (exists) {

        updatedLikes =
          likedSongs.filter(
            (s) =>
              s.id !== song.id
          );

      } else {

        updatedLikes = [
          ...likedSongs,
          song,
        ];
      }

      setLikedSongs(
        updatedLikes
      );

      localStorage.setItem(

        "likedSongs",

        JSON.stringify(
          updatedLikes
        )
      );
    };

  /* Create Playlist */

  const createPlaylist =
    (playlistName) => {

      const newPlaylist = {

        id: Date.now(),

        name: playlistName,

        songs: [],
      };

      const updatedPlaylists = [

        ...playlists,

        newPlaylist,
      ];

      setPlaylists(
        updatedPlaylists
      );

      localStorage.setItem(

        "playlists",

        JSON.stringify(
          updatedPlaylists
        )
      );
    };

  return (

    <PlayerContext.Provider
      value={{

        songs,

        currentSong,

        search,

        setSearch,

        playSong,

        handleNext,

        handlePrevious,

        recentlyPlayed,

        likedSongs,

        toggleLike,

        playlists,

        createPlaylist,
      }}
    >

      {children}

    </PlayerContext.Provider>
  );
}

export default PlayerProvider;