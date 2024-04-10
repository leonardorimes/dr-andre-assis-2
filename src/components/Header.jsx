import Search from "./Search";

import logo from "../assets/Giflogo.gif";

import "./Header.css";

const Header = () => {
  return (
    <header>
      <div className="headerImgContainer">
        <img src={logo} alt="logo André Assis" />
      </div>
      <Search />
    </header>
  );
};

export default Header;
