import {
  useContext,
} from "react";

import {
  FaHeart,
  FaRegHeart,
  FaPlus,
} from "react-icons/fa";

import {
  PlayerContext,
} from "../context/PlayerContext";

const SongItem = ({
  song,
  likedSongs,
  setLikedSongs,
  playlists,
  setPlaylists,
}) => {

  const {

    playWithId,

    addToQueue,

  } = useContext(
    PlayerContext
  );

  // LIKE
  const isLiked =
    likedSongs.some(
      (item) =>
        item.id === song.id
    );

  const toggleLike =
    (e) => {

      e.stopPropagation();

      if (isLiked) {

        const updatedSongs =
          likedSongs.filter(
            (item) =>
              item.id !== song.id
          );

        setLikedSongs(
          updatedSongs
        );

      } else {

        setLikedSongs([
          ...likedSongs,
          song,
        ]);

      }
    };

  // ADD PLAYLIST
  const addToPlaylist =
    (e) => {

      e.stopPropagation();

      if (
        playlists.length === 0
      ) {

        alert(
          "Create playlist first"
        );

        return;
      }

      const playlistName =
        prompt(
          "Enter playlist name"
        );

      const updatedPlaylists =
        playlists.map(
          (playlist) => {

            if (
              playlist.name ===
              playlistName
            ) {

              const alreadyExists =
                playlist.songs.some(
                  (item) =>
                    item.id ===
                    song.id
                );

              if (
                !alreadyExists
              ) {

                return {

                  ...playlist,

                  songs: [
                    ...playlist.songs,
                    song,
                  ],
                };
              }
            }

            return playlist;
          }
        );

      setPlaylists(
        updatedPlaylists
      );
    };

  // ADD QUEUE
  const handleQueue =
    (e) => {

      e.stopPropagation();

      addToQueue(song);
    };

  return (

    <div
      onClick={() =>
        playWithId(song.id)
      }
      className="
        min-w-[180px]
        p-3
        rounded-lg
        cursor-pointer
        hover:bg-[#242424]
        transition
        relative
      "
    >

      {/* IMAGE */}
      <img
        src={song.image}
        alt=""
        className="
          w-full
          h-[180px]
          object-cover
          rounded-lg
        "
      />

      {/* BUTTONS */}
      <div
        className="
          absolute
          top-4
          right-4
          flex
          gap-3
          text-xl
        "
      >

        {/* HEART */}
        <div
          onClick={toggleLike}
          className="
            cursor-pointer
          "
        >

          {isLiked ? (

            <FaHeart
              className="
                text-green-500
              "
            />

          ) : (

            <FaRegHeart />

          )}

        </div>

        {/* PLAYLIST */}
        <FaPlus
          onClick={addToPlaylist}
          className="
            cursor-pointer
          "
        />

        {/* QUEUE */}
        <button
          onClick={handleQueue}
          className="
            text-xs
            bg-green-500
            text-black
            px-2
            py-1
            rounded-full
          "
        >
          Queue
        </button>

      </div>

      {/* INFO */}
      <p
        className="
          font-bold
          mt-3
        "
      >
        {song.name}
      </p>

      <p
        className="
          text-gray-400
          text-sm
        "
      >
        {song.artist}
      </p>

    </div>

  );
};

export default SongItem;