import {
  Routes,
  Route,
} from "react-router-dom";

import {
  useContext,
  useState,
} from "react";

import {
  PlayerContext,
} from "./context/PlayerContext";

import {
  AuthContext,
} from "./context/AuthContext";

import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Player from "./components/Player";

import Home from "./pages/Home";
import Search from "./pages/Search";
import Library from "./pages/Library";

import Login from "./pages/Login";
import Signup from "./pages/Signup";

function App() {

  const [search, setSearch] =
    useState("");

  /* Auth Context */

  const {
    user,
  } = useContext(
    AuthContext
  );

  /* Player Context */

  const {

    songs,

    currentSong,

    playSong,

    likedSongs,

    toggleLike,

    recentlyPlayed,

    playlists,

    createPlaylist,

    handleNext,

    handlePrevious,

  } = useContext(
    PlayerContext
  );

  /* Search Filter */

  const filteredSongs =
    songs.filter((song) =>

      song.title
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  return (

    <div className="flex h-screen bg-black text-white">

      {/* Sidebar */}

      {user && <Sidebar />}

      <div className="w-full md:w-[75%] p-6 overflow-y-auto pb-32">

        {/* Navbar */}

        {user && (

          <Navbar
            search={search}
            setSearch={setSearch}
          />

        )}

        <Routes>

          {/* Login */}

          <Route
            path="/login"
            element={<Login />}
          />

          {/* Signup */}

          <Route
            path="/signup"
            element={<Signup />}
          />

          {/* Home */}

          <Route
            path="/"
            element={

              user ? (

                <Home

                  filteredSongs={
                    filteredSongs
                  }

                  recentlyPlayed={
                    recentlyPlayed
                  }

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

              ) : (

                <Login />

              )
            }
          />

          {/* Search */}

          <Route
            path="/search"
            element={

              user ? (

                <Search />

              ) : (

                <Login />

              )
            }
          />

          {/* Library */}

          <Route
            path="/library"
            element={

              user ? (

                <Library

                  likedSongs={
                    likedSongs
                  }

                  playSong={
                    playSong
                  }

                  toggleLike={
                    toggleLike
                  }

                  playlists={
                    playlists
                  }

                  createPlaylist={
                    createPlaylist
                  }
                />

              ) : (

                <Login />

              )
            }
          />

        </Routes>

      </div>

      {/* Player */}

      {user && currentSong && (

        <Player
          currentSong={
            currentSong
          }

          onNext={
            handleNext
          }

          onPrevious={
            handlePrevious
          }
        />

      )}

    </div>
  );
}

export default App;