import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import MediaQuery from 'react-responsive';
import "./Header.scss";
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined';
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';
import ExploreOutlinedIcon from "@material-ui/icons/ExploreOutlined";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Header = () => {
  const [search, setSearch] = useState("");
  const [isMypage, setIsMypage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/mypage" ? setIsMypage(true) : setIsMypage(false);
  }, [location])

  return (
    <>
      <MediaQuery query="(max-width: 480px)">
        {
          !isMypage && (
            <header className="header">
              <div className="header-wrapper">
                <CameraAltOutlinedIcon style={{ fontSize: 40 }} />
                <Link to="/">
                  <div className="header-logo">Ishigram</div>
                </Link>
                <SendOutlinedIcon style={{ fontSize: 40 }} />
              </div>
            </header>
          )
        }
      </MediaQuery> 
      <MediaQuery query="(min-width: 481px)">
        <header className="header">
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
              <SendOutlinedIcon fontSize="large" />
              <ExploreOutlinedIcon fontSize="large" />
              <FavoriteBorderIcon fontSize="large" />
              <Link to="/mypage">
                <AccountCircleIcon fontSize="large" />
              </Link>
            </div>
          </div>
        </header>
      </MediaQuery>
    </>
  );
};

export default Header;
