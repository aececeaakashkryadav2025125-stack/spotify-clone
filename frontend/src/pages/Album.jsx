import { useParams }
from "react-router-dom";

import {
  albumsData,
  songsData,
}
from "../assets/assets";

import { useContext }
from "react";

import {
  PlayerContext,
}
from "../context/PlayerContext";

const Album = () => {

  const { id } =
    useParams();

  const albumData =
    albumsData[id];

  const {
    playWithId,
  } = useContext(PlayerContext);

  return (
    <div
      className="
        flex-1
        bg-[#121212]
        m-2
        rounded-lg
        p-6
        overflow-y-auto
      "
    >

      {/* ALBUM INFO */}
      <div
        className="
          flex
          flex-col
          md:flex-row
          gap-8
        "
      >

        <img
          src={albumData.image}
          alt=""
          className="
            w-[250px]
            rounded-lg
          "
        />

        <div
          className="
            flex
            flex-col
            justify-end
          "
        >

          <p className="text-sm">

            Playlist

          </p>

          <h1
            className="
              text-3xl
              md:text-5xl
              font-bold
              my-4
            "
          >

            {albumData.name}

          </h1>

          <p className="text-gray-400">

            {albumData.desc}

          </p>

        </div>

      </div>

      {/* SONG TABLE */}
      <div className="mt-10">

        <div
          className="
            grid
            grid-cols-3
            md:grid-cols-4

            text-gray-400
            text-sm

            pb-2
            border-b
            border-gray-700
          "
        >

          <p>#</p>

          <p>Title</p>

          <p className="hidden md:block">
            Artist
          </p>

          <p className="text-center">
            Play
          </p>

        </div>

        {songsData.map((item, index) => (

          <div
            key={item.id}
            className="
              grid
              grid-cols-3
              md:grid-cols-4

              items-center

              gap-2

              p-3

              hover:bg-[#242424]

              rounded-lg

              transition-all
            "
          >

            <p>
              {index + 1}
            </p>

            <div
              className="
                flex
                items-center
                gap-3
              "
            >

              <img
                src={item.image}
                alt=""
                className="
                  w-10
                  h-10
                  rounded
                  object-cover
                "
              />

              <p>
                {item.name}
              </p>

            </div>

            <p
              className="
                hidden
                md:block
                text-gray-400
              "
            >
              {item.artist}
            </p>

            <button
              onClick={() =>
                playWithId(item.id)
              }
              className="
                bg-green-500
                text-black

                px-4
                py-1

                rounded-full
              "
            >
              Play
            </button>

          </div>

        ))}

      </div>

    </div>
  );
};

export default Album;