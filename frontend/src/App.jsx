import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
  useEffect,
  useState,
} from "react";

import Sidebar
from "./components/Sidebar";

import Player
from "./components/Player";

import Navbar
from "./components/Navbar";

import DisplayHome
from "./components/DisplayHome";

import Album
from "./pages/Album";

function Home({
  user,
  setUser,
  search,
  setSearch,
  likedSongs,
  setLikedSongs,
  playlists,
  setPlaylists,
}) {

  return (
    <div
      className="
        flex-1
        bg-[#121212]
        m-2
        rounded-lg
        p-4
        overflow-y-auto
      "
    >

      <Navbar
        user={user}
        setUser={setUser}
        search={search}
        setSearch={setSearch}
      />

      <DisplayHome
        search={search}
        likedSongs={likedSongs}
        setLikedSongs={setLikedSongs}
        playlists={playlists}
        setPlaylists={setPlaylists}
      />

    </div>
  );
}

function App() {

  const [user, setUser] =
    useState(null);

  const [search, setSearch] =
    useState("");

  const [likedSongs,
    setLikedSongs] =
    useState([]);

  const [playlists,
    setPlaylists] =
    useState([]);

  // LOAD STORAGE
  useEffect(() => {

    const likes =
      JSON.parse(
        localStorage.getItem(
          "likedSongs"
        )
      );

    const storedPlaylists =
      JSON.parse(
        localStorage.getItem(
          "playlists"
        )
      );

    if (likes)
      setLikedSongs(likes);

    if (storedPlaylists)
      setPlaylists(
        storedPlaylists
      );

  }, []);

  // SAVE STORAGE
  useEffect(() => {

    localStorage.setItem(
      "likedSongs",

      JSON.stringify(
        likedSongs
      )
    );

    localStorage.setItem(
      "playlists",

      JSON.stringify(
        playlists
      )
    );

  }, [
    likedSongs,
    playlists,
  ]);

  return (
    <BrowserRouter>

      <div
        className="
          bg-black
          h-screen
          text-white
          flex
          flex-col
        "
      >

        {/* MAIN */}
        <div
          className="
            flex
            flex-1
            overflow-hidden
          "
        >

          <Sidebar />

          <Routes>

            <Route
              path="/"
              element={
                <Home
                  user={user}
                  setUser={setUser}
                  search={search}
                  setSearch={setSearch}
                  likedSongs={likedSongs}
                  setLikedSongs={setLikedSongs}
                  playlists={playlists}
                  setPlaylists={setPlaylists}
                />
              }
            />

            <Route
              path="/album/:id"
              element={<Album />}
            />

          </Routes>

        </div>

        <Player />

      </div>

    </BrowserRouter>
  );
}

export default App;