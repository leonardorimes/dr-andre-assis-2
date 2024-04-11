import { BiSearchAlt2 } from "react-icons/bi";

import { useState } from "react";

import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!search) return;
  };
  return (
    <form className="searchForm">
      <input
        type="text"
        placeholder="Busca"
        onChange={(e) => setSearch(e.target.value)}
        value={search}
      />

      <button type="submit">
        <BiSearchAlt2 />
      </button>
    </form>
  );
};

export default Search;
