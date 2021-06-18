import React from 'react';
import './MyPageTop.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';

const MyPageTop = () => {
  return (
    <>
      <div className="user-info-wrapper">
        <div className="icon-wrapper">
          <div className="icon">
            <AccountCircleIcon style={{ fontSize: 150 }}/>
          </div>
        </div>
        <div className="user-info">
          <div className="user-info-first">
            <span className="user-name">UserName</span>
            <div className="margin-left-middle">
              <Button variant="outlined">Edit Profile</Button>
            </div>
            <div className="setting-icon margin-left-short">
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>
      <div className="post-button">
        <Button variant="contained" color="primary">
          Post
        </Button>
      </div>
    </>
  )
};

export default MyPageTop;