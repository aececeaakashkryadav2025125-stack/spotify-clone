import {
  House,
  Search,
  Library,
} from "lucide-react";

import { Link } from "react-router-dom";

function Sidebar() {
  return (

    <div className="hidden md:block md:w-[25%] bg-[#121212] p-5">

      <h1 className="text-3xl font-bold text-green-500 mb-10">
        Spotify
      </h1>

      <ul className="space-y-6 text-lg">

        <Link to="/">
          <li className="flex items-center gap-3 hover:text-green-500 cursor-pointer">
            <House />
            Home
          </li>
        </Link>

        <Link to="/search">
          <li className="flex items-center gap-3 hover:text-green-500 cursor-pointer">
            <Search />
            Search
          </li>
        </Link>

        <Link to="/library">
          <li className="flex items-center gap-3 hover:text-green-500 cursor-pointer">
            <Library />
            Your Library
          </li>
        </Link>

      </ul>

    </div>
  );
}

export default Sidebar;