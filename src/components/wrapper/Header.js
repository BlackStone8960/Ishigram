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
import AppsIcon from '@material-ui/icons/Apps';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

const Header = () => {
  const [search, setSearch] = useState("");
  const [isMypage, setIsMypage] = useState(false);
  const location = useLocation();

  useEffect(() => {
    location.pathname === "/mypage" ? setIsMypage(true) : setIsMypage(false);
  }, [location])

  return (
    <header className="header">
      <div className="header-wrapper">
        <MediaQuery query="(max-width: 480px)">
        {
          isMypage ? (
            <>
              <div className="header-userID-wrapper">
                <div className="header-userID">
                  <span className="header-userID-span">User ID</span>
                  <KeyboardArrowDownIcon />
                </div>
              </div>
              <AppsIcon style={{ fontSize: 40 }} />
            </>
          ) :
          (
            <>
              <CameraAltOutlinedIcon style={{ fontSize: 40 }} />
              <Link to="/">
                <div className="header-logo">Ishigram</div>
              </Link>
              <SendOutlinedIcon style={{ fontSize: 40 }} />
            </>
          )
        }
        </MediaQuery> 
        <MediaQuery query="(min-width: 481px)">
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
        </MediaQuery>
      </div>
    </header>
  );
};

export default Header;
