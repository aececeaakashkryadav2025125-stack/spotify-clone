import {
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  FaPlay,
  FaPause,
  FaForward,
  FaBackward,
  FaRandom,
  FaRedo,
} from "react-icons/fa";

import {
  PlayerContext,
} from "../context/PlayerContext";

const Player = () => {

  const {

    audioRef,

    track,

    isPlaying,

    play,

    pause,

    next,

    previous,

    shuffle,

    setShuffle,

    repeat,

    setRepeat,

    handleEnded,

  } = useContext(
    PlayerContext
  );

  const seekBg =
    useRef();

  const seekBar =
    useRef();

  const [time,
    setTime] =
    useState({

      currentTime: {
        second: 0,
        minute: 0,
      },

      totalTime: {
        second: 0,
        minute: 0,
      },
    });

  // UPDATE TIME
  useEffect(() => {

    audioRef.current.ontimeupdate =
      () => {

        if (
          audioRef.current
            .duration
        ) {

          seekBar.current.style.width =
            Math.floor(
              (
                audioRef.current
                  .currentTime /
                audioRef.current
                  .duration
              ) * 100
            ) + "%";

          setTime({

            currentTime: {

              second:
                Math.floor(
                  audioRef.current
                    .currentTime % 60
                ),

              minute:
                Math.floor(
                  audioRef.current
                    .currentTime / 60
                ),
            },

            totalTime: {

              second:
                Math.floor(
                  audioRef.current
                    .duration % 60
                ),

              minute:
                Math.floor(
                  audioRef.current
                    .duration / 60
                ),
            },
          });
        }
      };

  }, []);

  // SEEK
  const seekSong =
    (e) => {

      audioRef.current.currentTime =
        (
          e.nativeEvent.offsetX /
          seekBg.current.offsetWidth
        ) *
        audioRef.current.duration;
    };

  return (

    <div
      className="
        h-[90px]
        bg-black
        border-t
        border-gray-800
        flex
        items-center
        justify-between
        px-6
      "
    >

      {/* LEFT */}
      <div
        className="
          flex
          items-center
          gap-4
          w-[25%]
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
          gap-3
          w-[50%]
        "
      >

        {/* BUTTONS */}
        <div
          className="
            flex
            items-center
            gap-6
            text-2xl
          "
        >

          {/* SHUFFLE */}
          <FaRandom
            onClick={() =>
              setShuffle(
                !shuffle
              )
            }
            className={`
              cursor-pointer
              ${
                shuffle
                  ? "text-green-500"
                  : ""
              }
            `}
          />

          {/* PREVIOUS */}
          <FaBackward
            onClick={previous}
            className="
              cursor-pointer
            "
          />

          {/* PLAY / PAUSE */}
          {isPlaying ? (

            <FaPause
              onClick={pause}
              className="
                cursor-pointer
              "
            />

          ) : (

            <FaPlay
              onClick={play}
              className="
                cursor-pointer
              "
            />

          )}

          {/* NEXT */}
          <FaForward
            onClick={next}
            className="
              cursor-pointer
            "
          />

          {/* REPEAT */}
          <FaRedo
            onClick={() =>
              setRepeat(
                !repeat
              )
            }
            className={`
              cursor-pointer
              ${
                repeat
                  ? "text-green-500"
                  : ""
              }
            `}
          />

        </div>

        {/* SEEK */}
        <div
          className="
            flex
            items-center
            gap-3
            w-full
          "
        >

          {/* CURRENT */}
          <p className="text-sm">

            {time.currentTime.minute}
            :
            {String(
              time.currentTime.second
            ).padStart(2, "0")}

          </p>

          {/* BAR */}
          <div
            ref={seekBg}
            onClick={seekSong}
            className="
              w-full
              bg-gray-600
              rounded-full
              h-1
              cursor-pointer
            "
          >

            <hr
              ref={seekBar}
              className="
                h-1
                border-none
                w-0
                bg-green-500
                rounded-full
              "
            />

          </div>

          {/* TOTAL */}
          <p className="text-sm">

            {time.totalTime.minute}
            :
            {String(
              time.totalTime.second
            ).padStart(2, "0")}

          </p>

        </div>

      </div>

      {/* RIGHT */}
      <div
        className="
          w-[25%]
          flex
          justify-end
          text-sm
          text-gray-400
        "
      >
        Playing Now
      </div>

      {/* AUDIO */}
      <audio
        ref={audioRef}
        onEnded={handleEnded}
      />

    </div>
  );
};

export default Player;