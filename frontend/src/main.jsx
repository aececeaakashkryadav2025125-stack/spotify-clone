import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import App from "./App";

import PlayerContextProvider
from "./context/PlayerContext";

ReactDOM.createRoot(
  document.getElementById(
    "root"
  )
).render(

  <React.StrictMode>

    <PlayerContextProvider>

      <App />

    </PlayerContextProvider>

  </React.StrictMode>

);