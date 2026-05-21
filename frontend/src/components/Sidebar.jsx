const Sidebar = () => {

  return (
    <div
      className="
        hidden
        md:block

        w-[25%]

        bg-black
        p-2
      "
    >

      {/* TOP */}
      <div
        className="
          bg-[#121212]
          rounded-lg
          p-4
        "
      >

        <h1
          className="
            text-green-500
            text-4xl
            font-bold
            mb-8
          "
        >
          Spotify
        </h1>

        <div
          className="
            flex
            flex-col
            gap-5
            text-lg
          "
        >

          <p
            className="
              hover:text-green-500
              cursor-pointer
              transition-all
            "
          >
            🏠 Home
          </p>

          <p
            className="
              hover:text-green-500
              cursor-pointer
              transition-all
            "
          >
            🔍 Search
          </p>

          <p
            className="
              hover:text-green-500
              cursor-pointer
              transition-all
            "
          >
            📚 Library
          </p>

        </div>

      </div>

      {/* PLAYLISTS */}
      <div
        className="
          bg-[#121212]
          rounded-lg
          mt-2
          p-4
        "
      >

        <h2
          className="
            text-xl
            font-bold
            mb-5
          "
        >
          Playlists
        </h2>

        <div
          className="
            flex
            flex-col
            gap-4
          "
        >

          <div
            className="
              bg-[#242424]
              p-4
              rounded-lg
              hover:bg-[#333333]
              transition-all
              cursor-pointer
            "
          >

            <p className="font-bold">

              Create Playlist

            </p>

          </div>

          <div
            className="
              bg-[#242424]
              p-4
              rounded-lg
              hover:bg-[#333333]
              transition-all
              cursor-pointer
            "
          >

            <p className="font-bold">

              ❤️ Liked Songs

            </p>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Sidebar;