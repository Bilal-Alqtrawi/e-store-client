import { HomeIcon, ShoppingCartIcon } from "@heroicons/react/20/solid";
import { Typography } from "@mui/material";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  return (
    <header className="flex min-h-16 items-center justify-between gap-2 bg-vibrant-primary px-2 text-white shadow">
      <div className="flex items-center">
        <Link to="/" className="w-8 transition hover:text-gray-800">
          <HomeIcon width={25} height={25} />
        </Link>

        <SearchBar />
      </div>

      <Link to="home">
        <Typography
          component="h2"
          fontFamily="cursive"
          fontSize="20px"
          fontWeight="bold"
          className="flex-grow text-center"
        >
          Bilal - Store
        </Typography>
      </Link>

      <Link to="/basket" className="w-8 transition hover:text-gray-800">
        <ShoppingCartIcon width={25} height={25} />
      </Link>
    </header>
  );
}
