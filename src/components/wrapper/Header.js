import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SendIcon from "@material-ui/icons/Send";
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
  const [search, setSearch] = useState("");

  return (
    <nav className="header">
      <div className="header-wrapper">
        <Link to="/">
          <div className="header-logo">Ishigram</div>
        </Link>
        <input
          className="header-search-box"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          type="search"
          placeholder="Search"
        />
        <div className="header-icons">
          <Link to="/">
            <HomeOutlinedIcon fontSize="large" />
          </Link>
          <SendIcon fontSize="large" />
          <ExploreOutlinedIcon fontSize="large" />
          <FavoriteBorderIcon fontSize="large" />
          <Link to="/mypage">
            <AccountCircleIcon fontSize="large" />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;
