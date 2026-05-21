import {
  Heart,
} from "lucide-react";

function SongCard({

  song,

  playSong,

  likedSongs,

  toggleLike,

}) {

  const isLiked =

    likedSongs.some(
      (s) =>
        s.id === song.id
    );

  return (

    <div className="bg-[#181818] p-4 rounded-lg hover:bg-[#282828] transition cursor-pointer w-[280px]">

      {/* Song Image */}

      <img

        src={song.image}

        alt={song.title}

        className="w-full h-52 object-cover rounded-md"

        onClick={() =>
          playSong(song)
        }
      />

      {/* Song Info */}

      <div className="flex justify-between items-start mt-4">

        <div>

          <h2 className="text-xl font-bold">

            {song.title}

          </h2>

          <p className="text-gray-400">

            {song.artist}

          </p>

        </div>

        {/* Like Button */}

        <button
          onClick={() =>
            toggleLike(song)
          }
        >

          <Heart

            size={24}

            fill={
              isLiked
                ? "#22c55e"
                : "none"
            }

            className={

              isLiked
                ? "text-green-500"
                : "text-white"
            }
          />

        </button>

      </div>

    </div>
  );
}

export default SongCard;