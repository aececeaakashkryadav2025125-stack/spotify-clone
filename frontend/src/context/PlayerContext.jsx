import {
  createContext,
  useRef,
  useState,
} from "react";

import {
  songsData,
} from "../assets/assets";

export const PlayerContext =
  createContext();

const PlayerContextProvider =
  ({ children }) => {

    const audioRef =
      useRef();

    const [track,
      setTrack] =
      useState(
        songsData[0]
      );

    const [isPlaying,
      setIsPlaying] =
      useState(false);

    const [shuffle,
      setShuffle] =
      useState(false);

    const [repeat,
      setRepeat] =
      useState(false);

    // QUEUE
    const [queue,
      setQueue] =
      useState([]);

    // PLAY SONG
    const playWithId =
      async (id) => {

        const song =
          songsData.find(
            (item) =>
              item.id === id
          );

        if (!song) return;

        setTrack(song);

        setTimeout(() => {

          audioRef.current.src =
            song.file;

          audioRef.current.play();

          setIsPlaying(true);

        }, 100);
      };

    // PLAY
    const play = () => {

      audioRef.current.play();

      setIsPlaying(true);
    };

    // PAUSE
    const pause = () => {

      audioRef.current.pause();

      setIsPlaying(false);
    };

    // NEXT
    const next = () => {

      // REPEAT
      if (repeat) {

        audioRef.current.play();

        return;
      }

      // QUEUE FIRST
      if (queue.length > 0) {

        const nextSong =
          queue[0];

        setQueue(
          queue.slice(1)
        );

        playWithId(
          nextSong.id
        );

        return;
      }

      // SHUFFLE
      if (shuffle) {

        const randomIndex =
          Math.floor(
            Math.random() *
            songsData.length
          );

        playWithId(
          songsData[randomIndex]
            .id
        );

        return;
      }

      // NORMAL
      if (
        track.id <
        songsData.length - 1
      ) {

        playWithId(
          track.id + 1
        );

      } else {

        playWithId(0);
      }
    };

    // PREVIOUS
    const previous = () => {

      if (track.id > 0) {

        playWithId(
          track.id - 1
        );

      } else {

        playWithId(
          songsData.length - 1
        );
      }
    };

    // ENDED
    const handleEnded =
      () => {

        next();
      };

    // ADD TO QUEUE
    const addToQueue =
      (song) => {

        setQueue([
          ...queue,
          song,
        ]);
      };

    // REMOVE QUEUE
    const removeFromQueue =
      (id) => {

        const updated =
          queue.filter(
            (song) =>
              song.id !== id
          );

        setQueue(updated);
      };

    const value = {

      audioRef,

      track,

      isPlaying,

      play,

      pause,

      next,

      previous,

      playWithId,

      shuffle,

      setShuffle,

      repeat,

      setRepeat,

      handleEnded,

      queue,

      addToQueue,

      removeFromQueue,
    };

    return (

      <PlayerContext.Provider
        value={value}
      >

        {children}

      </PlayerContext.Provider>

    );
  };

export default
PlayerContextProvider;