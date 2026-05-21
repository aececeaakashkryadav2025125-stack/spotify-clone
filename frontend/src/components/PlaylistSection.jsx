const PlaylistSection = ({
  playlists,
  setPlaylists,
}) => {

  const createPlaylist =
    () => {

      const playlistName =
        prompt(
          "Enter playlist name"
        );

      if (!playlistName)
        return;

      const newPlaylist = {

        id: Date.now(),

        name: playlistName,

        songs: [],
      };

      setPlaylists([
        ...playlists,
        newPlaylist,
      ]);
    };

  const removeSong =
    (
      playlistId,
      songId
    ) => {

      const updated =
        playlists.map(
          (playlist) => {

            if (
              playlist.id ===
              playlistId
            ) {

              return {

                ...playlist,

                songs:
                  playlist.songs.filter(
                    (song) =>
                      song.id !==
                      songId
                  ),
              };
            }

            return playlist;
          }
        );

      setPlaylists(updated);
    };

  return (

    <div className="mt-10">

      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
          mb-5
        "
      >

        <h1
          className="
            text-2xl
            font-bold
          "
        >
          🎵 Playlists
        </h1>

        <button
          onClick={
            createPlaylist
          }
          className="
            bg-green-500
            text-black
            px-4
            py-2
            rounded-full
            font-bold
          "
        >
          + Create
        </button>

      </div>

      {/* PLAYLISTS */}
      <div
        className="
          flex
          flex-col
          gap-5
        "
      >

        {playlists.map(
          (playlist) => (

            <div
              key={playlist.id}
              className="
                bg-[#242424]
                p-5
                rounded-lg
              "
            >

              <h2
                className="
                  text-2xl
                  font-bold
                "
              >
                {playlist.name}
              </h2>

              {/* SONGS */}
              <div className="mt-4">

                {playlist.songs.length ===
                0 ? (

                  <p
                    className="
                      text-gray-400
                    "
                  >
                    No songs added
                  </p>

                ) : (

                  playlist.songs.map(
                    (song) => (

                      <div
                        key={song.id}
                        className="
                          flex
                          items-center
                          justify-between
                          bg-black
                          p-3
                          rounded-lg
                          mb-3
                        "
                      >

                        <div>

                          <p
                            className="
                              font-bold
                            "
                          >
                            {song.name}
                          </p>

                          <p
                            className="
                              text-sm
                              text-gray-400
                            "
                          >
                            {song.artist}
                          </p>

                        </div>

                        <button
                          onClick={() =>
                            removeSong(
                              playlist.id,
                              song.id
                            )
                          }
                          className="
                            bg-red-500
                            px-3
                            py-1
                            rounded-full
                          "
                        >
                          Remove
                        </button>

                      </div>

                    )
                  )

                )}

              </div>

            </div>

          )
        )}

      </div>

    </div>

  );
};

export default PlaylistSection;