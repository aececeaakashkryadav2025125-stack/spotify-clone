import { useContext }
from "react";

import {
  FaPlay,
  FaPause,
  FaStepForward,
  FaStepBackward,
} from "react-icons/fa";

import {
  PlayerContext,
}
from "../context/PlayerContext";

const Player = () => {

  const {
    track,
    playStatus,

    playSong,
    pauseSong,

    nextSong,
    previousSong,

    seekSong,

    seekBg,
    seekBar,

    time,
  } = useContext(PlayerContext);

  return (
    <div
      className="
        min-h-[120px]
        bg-black
        border-t
        border-gray-800

        flex
        flex-col
        md:flex-row

        items-center
        justify-between

        gap-4

        px-4
        py-3

        text-white
      "
    >

      {/* LEFT */}
      <div
        className="
          flex
          items-center
          gap-4

          w-full
          md:w-[25%]
        "
      >

        <img
          src={track.image}
          alt=""
          className="
            w-14
            h-14
            rounded
            object-cover
          "
        />

        <div>

          <p className="font-bold">
            {track.name}
          </p>

          <p
            className="
              text-sm
              text-gray-400
            "
          >
            {track.artist}
          </p>

        </div>

      </div>

      {/* CENTER */}
      <div
        className="
          flex
          flex-col
          items-center
          gap-4

          w-full
          md:w-[50%]
        "
      >

        {/* CONTROLS */}
        <div
          className="
            flex
            items-center
            gap-6
          "
        >

          {/* PREVIOUS */}
          <button
            onClick={previousSong}
            className="
              text-gray-300
              hover:text-green-500
              transition-all
              duration-300
            "
          >
            <FaStepBackward size={22} />
          </button>

          {/* PLAY / PAUSE */}
          {playStatus ? (

            <button
              onClick={pauseSong}
              className="
                bg-white
                text-black

                w-14
                h-14

                rounded-full

                flex
                items-center
                justify-center

                hover:scale-105

                transition-all
                duration-300
              "
            >
              <FaPause size={22} />
            </button>

          ) : (

            <button
              onClick={playSong}
              className="
                bg-green-500
                text-black

                w-14
                h-14

                rounded-full

                flex
                items-center
                justify-center

                hover:scale-105

                transition-all
                duration-300
              "
            >
              <FaPlay size={22} />
            </button>

          )}

          {/* NEXT */}
          <button
            onClick={nextSong}
            className="
              text-gray-300
              hover:text-green-500
              transition-all
              duration-300
            "
          >
            <FaStepForward size={22} />
          </button>

        </div>

        {/* SEEK BAR */}
        <div
          className="
            flex
            items-center
            gap-3
            w-full
          "
        >

          {/* CURRENT TIME */}
          <p
            className="
              text-xs
              md:text-sm
            "
          >

            {time.currentTime.minute}:

            {String(
              time.currentTime.second
            ).padStart(2, "0")}

          </p>

          {/* SEEK BAR */}
          <div
            ref={seekBg}
            onClick={seekSong}
            className="
              w-full
              bg-gray-700
              rounded-full
              h-1.5
              cursor-pointer
              overflow-hidden
            "
          >

            <hr
              ref={seekBar}
              className="
                h-full
                border-none
                w-[0%]

                bg-green-500

                rounded-full
              "
            />

          </div>

          {/* TOTAL TIME */}
          <p
            className="
              text-xs
              md:text-sm
            "
          >

            {time.totalTime.minute}:

            {String(
              time.totalTime.second
            ).padStart(2, "0")}

          </p>

        </div>

      </div>

      {/* RIGHT */}
      <div className="hidden md:block w-[25%]"></div>

    </div>
  );
};

export default Player;