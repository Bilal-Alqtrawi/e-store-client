import { useEffect, useState } from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const SearchIcon = styled.span`
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
`;

function SearchBar() {
  const [query, setQuery] = useState("");

  const navigate = useNavigate();

  function handleChange(e) {
    setQuery(e.target.value);
  }

  useEffect(
    function () {
      const timeout = setTimeout(() => {
        if (query.length >= 3) {
          navigate(`/search?s=${query}`);
        } else {
          navigate(`/`);
        }
      }, 500); // Runs after 0.5s
      return function cleanup() {
        clearTimeout(timeout);
      };
    },

    [query],
  );

  return (
    <div className="relative ml-5 flex w-fit items-center">
      <label htmlFor="search">Search</label>
      <input
        type="text"
        id="search"
        name="search"
        value={query}
        onChange={handleChange}
        className="ml-2 mt-1 h-8 rounded-md px-2 py-1 text-black focus:outline-vibrant-primary"
      />
      <SearchIcon>
        <MagnifyingGlassIcon width={20} height={20} />
      </SearchIcon>
    </div>
  );
}

export default SearchBar;
