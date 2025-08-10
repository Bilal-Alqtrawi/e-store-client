import {
  HomeIcon,
  MoonIcon,
  ShoppingCartIcon,
  SunIcon,
} from "@heroicons/react/20/solid";
import { Typography } from "@mui/material";
import { useTheme } from "../contexts/ThemeContext";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

export default function Header() {
  const { isDarkMode, toggleTheme } = useTheme();
  return (
    <header className="flex min-h-16 items-center justify-between gap-2 bg-vibrant-primary px-2 text-white shadow-md backdrop-blur-md dark:bg-[#121212]/90 dark:shadow-lg">
      <div className="flex items-center">
        <Link
          to="/"
          className="w-8 transition hover:text-gray-800 dark:hover:text-stone-500"
        >
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

      <div className="flex items-center gap-2">
        <Link
          to="/basket"
          className="w-8 transition hover:text-gray-800 dark:hover:text-stone-500"
        >
          <ShoppingCartIcon width={25} height={25} />
        </Link>

        <button
          className="rounded-full bg-gradient-to-tr from-purple-700 to-indigo-500 p-2 text-white shadow-lg transition-transform duration-300 hover:scale-105"
          onClick={toggleTheme}
        >
          <span
            key={isDarkMode ? "sun" : "moon"}
            className="animate-fade-scale block transform transition-all duration-300 ease-in-out"
          >
            {isDarkMode ? (
              <SunIcon width={24} height={24} />
            ) : (
              <MoonIcon width={24} height={24} />
            )}
          </span>
        </button>
      </div>
    </header>
  );
}
