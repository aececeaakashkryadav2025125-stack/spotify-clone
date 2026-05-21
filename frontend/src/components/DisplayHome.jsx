import {
  songsData,
  albumsData,
}
from "../assets/assets";

import SongItem
from "./SongItem";

import AlbumItem
from "./AlbumItem";

const DisplayHome = () => {

  return (
    <div className="mt-10">

      {/* ALBUMS */}
      <h1
        className="
          text-2xl
          md:text-3xl
          font-bold
          mb-5
        "
      >

        Featured Albums

      </h1>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-5
          mb-10
        "
      >

        {albumsData.map((item) => (

          <AlbumItem
            key={item.id}
            id={item.id}
            name={item.name}
            image={item.image}
          />

        ))}

      </div>

      {/* SONGS */}
      <h1
        className="
          text-2xl
          md:text-3xl
          font-bold
          mb-5
        "
      >

        Trending Songs

      </h1>

      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-5
        "
      >

        {songsData.map((item) => (

          <SongItem
            key={item.id}
            id={item.id}
            name={item.name}
            artist={item.artist}
            image={item.image}
          />

        ))}

      </div>

    </div>
  );
};

export default DisplayHome;