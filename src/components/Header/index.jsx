import "./style.css";
import { HiSearch } from "react-icons/hi";

import Slider from "../Slider";

function Header(props) {
  return (
    <header className="main-header">
      <div className="header-content">
        <div className="logo">
          <h1>
            Burguer <span className="red-text">Kenzie</span>
          </h1>
        </div>

        <div className="searchbar">
          <input
            onChange={props.handleChange}
            className="search-input"
            type="text"
            placeholder="Buscar produtos"
          />

          <button className="search-btn">
            <HiSearch></HiSearch>
          </button>
        </div>
      </div>
      <Slider />
    </header>
  );
}

export default Header;
