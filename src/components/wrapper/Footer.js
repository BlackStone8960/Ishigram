import React from 'react';
import { Link } from 'react-router-dom';
import MediaQuery from 'react-responsive';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import './Footer.scss';

const Footer = () => (
  <>
    <MediaQuery query="(max-width: 480px)">
      <footer className="footer-container-sp">
        <div className="footer-wrapper">
          <Link to="/">
            <HomeIcon style={{ fontSize: 40 }} />
          </Link>
          <Link to="">
            <SearchIcon style={{ fontSize: 40 }} />
          </Link>
          <Link to="/mypage">
            <AccountCircleOutlinedIcon style={{ fontSize: 40 }} />
          </Link>
        </div>
      </footer>
    </MediaQuery>
    <MediaQuery query="(min-width: 481px)">
      <footer className="footer-container">
        <div className="footer-wrapper">
          <div className="footer-upper-section">
            <div className="upper-flex">
              <div className="upper-content">About</div>
              <div className="upper-content">Blog</div>
              <div className="upper-content">Jobs</div>
              <div className="upper-content">Help</div>
              <div className="upper-content">API</div>
              <div className="upper-content">Privacy</div>
              <div className="upper-content">Terms</div>
              <div className="upper-content">Top Accounts</div>
              <div className="upper-content">Hashtags</div>
              <div className="upper-content">Locations</div>
            </div>
          </div>
          <div className="footer-lower-section">
            <div>© 2021 Ishigram from Miyabi &amp; Taichi</div>
          </div>
        </div>
      </footer>
    </MediaQuery>
  </>
);

export default Footer;