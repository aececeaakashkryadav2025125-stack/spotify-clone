import {
  useEffect,
  useState,
} from "react";

import SongItem
from "./SongItem";

import PlaylistSection
from "./PlaylistSection";

import QueueSection
from "./QueueSection";

import AddSong
from "./AddSong";

import {
  getSongs,
} from "../api/songApi";

const DisplayHome = ({
  search,
  likedSongs,
  setLikedSongs,
  playlists,
  setPlaylists,
}) => {

  const [songs,
    setSongs] =
    useState([]);

  // FETCH SONGS
  const fetchSongs =
    async () => {

      try {

        const data =
          await getSongs();

        setSongs(data);

      } catch (error) {

        console.log(error);
      }
    };

  useEffect(() => {

    fetchSongs();

  }, []);

  // FILTER
  const filteredSongs =
    songs.filter((song) =>
      song.name
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <div>

      {/* SONGS */}
      <h1
        className="
          my-5
          font-bold
          text-2xl
        "
      >
        Trending Songs
      </h1>

      <div
        className="
          flex
          overflow-auto
          gap-4
          pb-4
        "
      >

        {filteredSongs.map(
          (item, index) => (

            <SongItem
              key={index}
              song={{
                ...item,

                image:
                  item.imageUrl,

                file:
                  item.songUrl,
              }}
              likedSongs={likedSongs}
              setLikedSongs={setLikedSongs}
              playlists={playlists}
              setPlaylists={setPlaylists}
            />

          )
        )}

      </div>

      {/* LIKED */}
      {likedSongs.length > 0 && (

        <>

          <h1
            className="
              my-8
              font-bold
              text-2xl
            "
          >
            ❤️ Liked Songs
          </h1>

          <div
            className="
              flex
              overflow-auto
              gap-4
              pb-4
            "
          >

            {likedSongs.map(
              (item, index) => (

                <SongItem
                  key={index}
                  song={item}
                  likedSongs={likedSongs}
                  setLikedSongs={setLikedSongs}
                  playlists={playlists}
                  setPlaylists={setPlaylists}
                />

              )
            )}

          </div>

        </>

      )}

      {/* PLAYLIST */}
      <PlaylistSection
        playlists={playlists}
        setPlaylists={setPlaylists}
      />

      {/* QUEUE */}
      <QueueSection />

      {/* ADMIN */}
      <AddSong
        refreshSongs={fetchSongs}
      />

    </div>

  );
};

export default DisplayHome;