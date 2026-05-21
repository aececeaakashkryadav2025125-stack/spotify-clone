import { useState } from "react";

import SongCard from "../components/SongCard";

function Library({
  likedSongs,
  playSong,
  toggleLike,

  playlists,
  createPlaylist,
}) {

  const [playlistName, setPlaylistName] =
    useState("");

  return (
    <div>

      <h1 className="text-4xl font-bold mb-10">
        Your Library
      </h1>

      {/* Create Playlist */}
      <div className="mb-12">

        <h2 className="text-2xl font-semibold mb-4">
          Create Playlist
        </h2>

        <div className="flex flex-col sm:flex-row gap-4">

          <input
            type="text"
            placeholder="Playlist name"
            value={playlistName}

            onChange={(e) =>
              setPlaylistName(
                e.target.value
              )
            }

            className="bg-[#242424] px-4 py-2 rounded text-white outline-none w-full sm:w-80"
          />

          <button
            onClick={() => {

              createPlaylist(
                playlistName
              );

              setPlaylistName("");
            }}

            className="bg-green-500 hover:bg-green-600 transition px-5 py-2 rounded font-semibold"
          >

            Create Playlist

          </button>

        </div>

      </div>

      {/* Liked Songs */}
      <h2 className="text-2xl font-semibold mb-8">
        Liked Songs
      </h2>

      {likedSongs.length === 0 ? (

        <p className="text-gray-400 mb-12">
          No liked songs yet
        </p>

      ) : (

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-14">

          {likedSongs.map(
            (song, index) => (

              <SongCard
                key={index}
                title={song.title}
                artist={song.artist}
                image={song.image}

                onClick={() =>
                  playSong(song)
                }

                isLiked={true}

                toggleLike={() =>
                  toggleLike(song)
                }
              />

            )
          )}

        </div>

      )}

      {/* Playlists */}
      <h2 className="text-2xl font-semibold mb-8">
        Your Playlists
      </h2>

      {playlists.length === 0 ? (

        <p className="text-gray-400">
          No playlists created yet
        </p>

      ) : (

        <div className="space-y-6">

          {playlists.map(
            (playlist) => (

              <div
                key={playlist.id}

                className="bg-[#181818] p-5 rounded-lg hover:bg-[#242424] transition"
              >

                <h3 className="text-xl font-bold mb-2">
                  {playlist.name}
                </h3>

                <p className="text-gray-400">
                  {playlist.songs.length}
                  {" "}
                  songs
                </p>

              </div>

            )
          )}

        </div>

      )}

    </div>
  );
}

export default Library;