import { useNavigate }
from "react-router-dom";

const AlbumItem = ({
  id,
  name,
  image,
}) => {

  const navigate =
    useNavigate();

  return (
    <div
      onClick={() =>
        navigate(`/album/${id}`)
      }
      className="
        p-3
        rounded-lg
        hover:bg-[#242424]
        transition-all
        duration-300
        cursor-pointer
      "
    >

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

      <p
        className="
          font-bold
          mt-3
        "
      >
        {name}
      </p>

    </div>
  );
};

export default AlbumItem;