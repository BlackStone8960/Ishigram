import React, { useState } from 'react';
import './MyPageTop.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Button from '@material-ui/core/Button';
import SettingsIcon from '@material-ui/icons/Settings';
import Modal from '@material-ui/core/Modal';

const MyPageTop = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  }

  const onPhotoChange = () => {
    handleClose();
  }

  return (
    <div className="my-page-top">
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
        <Button onClick={handleOpen} variant="contained" color="primary">
          Post
        </Button>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="post-modal-title"
        aria-describedby="post-modal-description"
      >
        <div className="modal">
          <div className="post-modal-title-wrapper">
            <h2 id="post-modal-title">New Post</h2>
          </div>
          <div className="posting-area">
            <Button component="label" variant="contained" color="primary">
              Post a photo
              <input 
                type="file"
                onChange={onPhotoChange}
                accept="image/*"
                hidden
              />
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  )
};

export default MyPageTop;