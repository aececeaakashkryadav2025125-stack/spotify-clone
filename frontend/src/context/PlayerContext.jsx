import {
  createContext,
  useEffect,
  useRef,
  useState,
} from "react";

import { songsData }
from "../assets/assets";

export const PlayerContext =
  createContext();

const PlayerContextProvider = ({
  children,
}) => {

  // AUDIO REF
  const audioRef =
    useRef(new Audio());

  // SEEK BAR REFS
  const seekBg = useRef();

  const seekBar = useRef();

  // CURRENT TRACK
  const [track, setTrack] =
    useState(songsData[0]);

  // PLAY STATUS
  const [playStatus, setPlayStatus] =
    useState(false);

  // TIMER
  const [time, setTime] =
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

  // PLAY SONG WITH ID
  const playWithId = async (id) => {

    try {

      const selectedSong =
        songsData[id];

      setTrack(selectedSong);

      audioRef.current.src =
        selectedSong.file;

      await audioRef.current.play();

      setPlayStatus(true);

    } catch (error) {

      console.log(error);

    }
  };

  // PLAY
  const playSong = async () => {

    try {

      await audioRef.current.play();

      setPlayStatus(true);

    } catch (error) {

      console.log(error);

    }
  };

  // PAUSE
  const pauseSong = () => {

    audioRef.current.pause();

    setPlayStatus(false);
  };

  // NEXT
  const nextSong = async () => {

    try {

      if (
        track.id <
        songsData.length - 1
      ) {

        await playWithId(
          track.id + 1
        );

      }

    } catch (error) {

      console.log(error);

    }
  };

  // PREVIOUS
  const previousSong = async () => {

    try {

      if (track.id > 0) {

        await playWithId(
          track.id - 1
        );

      }

    } catch (error) {

      console.log(error);

    }
  };

  // SEEK SONG
  const seekSong = async (e) => {

    audioRef.current.currentTime =
      (
        (
          e.nativeEvent.offsetX /
          seekBg.current.offsetWidth
        )
        *
        audioRef.current.duration
      );

  };

  // UPDATE TIMER + SEEK BAR
  useEffect(() => {

    audioRef.current.ontimeupdate =
      () => {

        // SEEK BAR WIDTH
        seekBar.current.style.width =
          Math.floor(
            (
              audioRef.current.currentTime
              /
              audioRef.current.duration
            )
            * 100
          ) + "%";

        // TIMER
        setTime({
          currentTime: {
            second: Math.floor(
              audioRef.current.currentTime
              % 60
            ),

            minute: Math.floor(
              audioRef.current.currentTime
              / 60
            ),
          },

          totalTime: {
            second: Math.floor(
              audioRef.current.duration
              % 60
            ),

            minute: Math.floor(
              audioRef.current.duration
              / 60
            ),
          },
        });
      };

  }, []);

  const value = {
    track,
    playStatus,

    playWithId,
    playSong,
    pauseSong,

    nextSong,
    previousSong,

    seekSong,

    seekBg,
    seekBar,

    time,
  };

  return (
    <PlayerContext.Provider value={value}>

      {children}

    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;