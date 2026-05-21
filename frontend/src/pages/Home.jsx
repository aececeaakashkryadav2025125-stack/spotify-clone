import SongCard from "../components/SongCard";

function Home({

  filteredSongs,

  recentlyPlayed,

  playSong,

  likedSongs,

  toggleLike,

}) {

  return (

    <div className="text-white">

      {/* Trending Songs */}

      <h1 className="text-5xl font-bold mb-10">

        Trending Songs

      </h1>

      {

        filteredSongs.length === 0 ? (

          <p className="text-gray-400">

            No songs found

          </p>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-16">

            {

              filteredSongs.map(
                (song) => (

                  <SongCard

                    key={song.id}

                    song={song}

                    playSong={
                      playSong
                    }

                    likedSongs={
                      likedSongs
                    }

                    toggleLike={
                      toggleLike
                    }
                  />
                )
              )
            }

          </div>
        )
      }

      {/* Recently Played */}

      <h1 className="text-4xl font-bold mb-8">

        Recently Played

      </h1>

      {

        recentlyPlayed.length === 0 ? (

          <p className="text-gray-400">

            No recently played songs

          </p>

        ) : (

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

            {

              recentlyPlayed.map(
                (song) => (

                  <SongCard

                    key={song.id}

                    song={song}

                    playSong={
                      playSong
                    }

                    likedSongs={
                      likedSongs
                    }

                    toggleLike={
                      toggleLike
                    }
                  />
                )
              )
            }

          </div>
        )
      }

    </div>
  );
}

export default Home;