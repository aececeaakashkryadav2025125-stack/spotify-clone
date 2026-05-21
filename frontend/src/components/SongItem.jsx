import { useContext }
from "react";

import {
  PlayerContext,
}
from "../context/PlayerContext";

const SongItem = ({
  id,
  name,
  artist,
  image,
}) => {

  const {
    playWithId,
  } = useContext(PlayerContext);

  return (
    <div
      className="
        relative
        p-3
        rounded-lg
        hover:bg-[#242424]
        transition-all
        duration-300
        cursor-pointer
        group
      "
    >

      {/* IMAGE */}
      <div className="relative">

        <img
          src={image}
          alt=""
          className="
            rounded-lg
            w-full
            h-[220px]
            object-cover
          "
        />

        {/* PLAY BUTTON */}
        <button
          onClick={() => playWithId(id)}
          className="
            absolute
            bottom-3
            right-3

            bg-green-500

            w-12
            h-12

            rounded-full

            flex
            items-center
            justify-center

            text-black
            text-xl
            font-bold

            opacity-0
            translate-y-3

            group-hover:opacity-100
            group-hover:translate-y-0

            transition-all
            duration-300

            hover:scale-110
          "
        >
          ▶
        </button>

      </div>

      {/* TITLE */}
      <p
        className="
          font-bold
          mt-3
          text-sm
          md:text-base
        "
      >

        {name}

      </p>

      {/* ARTIST */}
      <p
        className="
          text-gray-400
          text-xs
          md:text-sm
        "
      >

        {artist}

      </p>

    </div>
  );
};

export default SongItem;