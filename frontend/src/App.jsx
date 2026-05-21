import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import {
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
      />

      <DisplayHome />

    </div>
  );
}

function App() {

  const [user, setUser] =
    useState(null);

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
                />
              }
            />

            <Route
              path="/album/:id"
              element={<Album />}
            />

          </Routes>

        </div>

        {/* PLAYER */}
        <Player />

      </div>

    </BrowserRouter>
  );
}

export default App;