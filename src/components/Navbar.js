import React from "react";
import "./Navbar.css";
import SearchIcon from "@mui/icons-material/Search";
function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__logo">
        <img src="/images/Logo.png" alt="" />
      </div>
      <div className="navbar__items">
        <ul>
          <li>About</li>
          <li>612-400-9000</li>
        </ul>
      </div>
      <div className="navbar__search">
        <input
          className="font-face-hv"
          type="text"
          placeholder="City, Neighborhood, Address, ZIP, MLS #"
        />
        <SearchIcon fontSize="small" />
      </div>
    </div>
  );
}

export default Navbar;
