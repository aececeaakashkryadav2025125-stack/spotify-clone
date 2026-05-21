import Login
from "./Login";

const Navbar = ({
  user,
  setUser,
}) => {

  return (
    <div
      className="
        flex
        items-center
        justify-between
        gap-4
      "
    >

      {/* LEFT */}
      <h1
        className="
          text-2xl
          md:text-3xl
          font-bold
        "
      >
        Home
      </h1>

      {/* RIGHT */}
      <Login
        user={user}
        setUser={setUser}
      />

    </div>
  );
};

export default Navbar;