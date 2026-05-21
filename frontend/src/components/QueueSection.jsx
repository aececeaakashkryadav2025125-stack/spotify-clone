import {
  useContext,
} from "react";

import {
  PlayerContext,
} from "../context/PlayerContext";

const QueueSection = () => {

  const {

    queue,

    removeFromQueue,

    playWithId,

  } = useContext(
    PlayerContext
  );

  return (

    <div className="mt-10">

      <h1
        className="
          text-2xl
          font-bold
          mb-5
        "
      >
        🎶 Queue
      </h1>

      {queue.length === 0 ? (

        <p
          className="
            text-gray-400
          "
        >
          Queue is empty
        </p>

      ) : (

        <div
          className="
            flex
            flex-col
            gap-3
          "
        >

          {queue.map(
            (song, index) => (

              <div
                key={index}
                className="
                  flex
                  items-center
                  justify-between
                  bg-[#242424]
                  p-3
                  rounded-lg
                "
              >

                <div
                  onClick={() =>
                    playWithId(
                      song.id
                    )
                  }
                  className="
                    flex
                    items-center
                    gap-4
                    cursor-pointer
                  "
                >

                  <img
                    src={song.image}
                    alt=""
                    className="
                      w-12
                      h-12
                      rounded
                      object-cover
                    "
                  />

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

                </div>

                <button
                  onClick={() =>
                    removeFromQueue(
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
          )}

        </div>

      )}

    </div>

  );
};

export default QueueSection;