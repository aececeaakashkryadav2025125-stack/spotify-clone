import Login
from "./Login";

const Navbar = ({
  user,
  setUser,
  search,
  setSearch,
}) => {

  return (
    <div
      className="
        flex
        flex-col
        md:flex-row
        items-center
        justify-between
        gap-4
        mb-6
      "
    >

      {/* LEFT */}
      <div
        className="
          flex
          items-center
          gap-4
          w-full
        "
      >

        <h1
          className="
            text-2xl
            md:text-3xl
            font-bold
            whitespace-nowrap
          "
        >
          Home
        </h1>

        <input
          type="text"
          placeholder="Search songs..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            bg-[#242424]
            px-4
            py-2
            rounded-full
            outline-none
            w-full
            max-w-md
          "
        />

      </div>

      {/* RIGHT */}
      <Login
        user={user}
        setUser={setUser}
      />

    </div>
  );
};

export default Navbar;