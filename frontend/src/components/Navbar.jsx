import {
  useContext,
} from "react";

import {
  Search,
} from "lucide-react";

import {
  AuthContext,
} from "../context/AuthContext";

function Navbar({
  search,
  setSearch,
}) {

  const {
    logout,
  } = useContext(
    AuthContext
  );

  return (

    <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">

      {/* Search Bar */}
      <div className="relative w-full md:w-96">

        <Search
          size={18}
          className="absolute left-3 top-3 text-gray-400"
        />

        <input
          type="text"

          placeholder="Search songs..."

          value={search}

          onChange={(e) =>
            setSearch(
              e.target.value
            )
          }

          className="w-full bg-[#242424] text-white pl-10 pr-4 py-3 rounded-full outline-none"
        />

      </div>

      {/* Logout Button */}
      <button
        onClick={logout}

        className="bg-red-500 hover:bg-red-600 transition px-5 py-2 rounded-full font-semibold"
      >

        Logout

      </button>

    </div>
  );
}

export default Navbar;