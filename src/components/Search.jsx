import { BiSearchAlt2 } from "react-icons/bi";

import "./Search.css";

const Search = () => {
  return (
    <form className="searchForm">
      <input type="text" placeholder="Busca" />

      <button type="submit">
        <BiSearchAlt2 />
      </button>
    </form>
  );
};

export default Search;
