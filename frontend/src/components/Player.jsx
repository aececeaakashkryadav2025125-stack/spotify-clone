import {
  useEffect,
  useRef,
  useState,
} from "react";

import {

  Play,

  Pause,

  SkipBack,

  SkipForward,

} from "lucide-react";

function Player({

  currentSong,

  onNext,

  onPrevious,

}) {

  const audioRef =
    useRef(null);

  const [isPlaying,
    setIsPlaying] =

    useState(false);

  /* Auto Play */

  useEffect(() => {

    if (

      currentSong?.file &&

      audioRef.current

    ) {

      audioRef.current.play()

        .then(() => {

          setIsPlaying(true);

        })

        .catch((error) => {

          console.log(error);
        });
    }

  }, [currentSong]);

  /* Play / Pause */

  const togglePlay =
    () => {

      if (!audioRef.current)
        return;

      if (isPlaying) {

        audioRef.current.pause();

      } else {

        audioRef.current.play();
      }

      setIsPlaying(
        !isPlaying
      );
    };

  /* Prevent Crash */

  if (!currentSong) {

    return null;
  }

  return (

    <div className="fixed bottom-0 left-0 w-full bg-[#181818] border-t border-gray-800 px-6 py-4 flex items-center justify-between z-50">

      {/* Song Info */}

      <div className="flex items-center gap-4 w-[30%]">

        <img

          src={

            currentSong.image ||

            "https://via.placeholder.com/150"
          }

          alt={currentSong.title}

          className="w-16 h-16 object-cover rounded"
        />

        <div>

          <h2 className="font-bold text-white">

            {

              currentSong.title ||

              "Unknown Song"
            }

          </h2>

          <p className="text-gray-400 text-sm">

            {

              currentSong.artist ||

              "Unknown Artist"
            }

          </p>

        </div>

      </div>

      {/* Controls */}

      <div className="flex items-center gap-6">

        <button
          onClick={
            onPrevious
          }
        >

          <SkipBack
            className="text-white"
          />

        </button>

        <button

          onClick={
            togglePlay
          }

          className="bg-white rounded-full p-3 text-black"
        >

          {

            isPlaying

              ? <Pause />

              : <Play />
          }

        </button>

        <button
          onClick={
            onNext
          }
        >

          <SkipForward
            className="text-white"
          />

        </button>

      </div>

      {/* Audio */}

      {

        currentSong.file && (

          <audio

            ref={audioRef}

            src={currentSong.file}
          />
        )
      }

    </div>
  );
}

export default Player;