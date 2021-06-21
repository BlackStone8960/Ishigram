import React, { useState } from 'react';
import './PhotoBox.css';
import Modal from '@material-ui/core/Modal';
import '../../../modal.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';

const PhotoBox = ({ photo }) => {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div
        className="photo-box-wrapper"
        onClick={handleOpen}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <div className="photo-box">
          <div className="img-wrapper">
            <img src={photo.src.medium} alt={photo.id}></img>
          </div>
        </div>
        { hover && (
        <div
          onClick={handleOpen}
          className="photo-box-hover"
        >
          <div className="photo-icon-info">
            <FavoriteIcon  />
            <span>{photo.like.numOfLikes}</span>
            <ChatBubbleIcon />
            <span>{photo.comments.length}</span>
          </div>
        </div>
      ) }
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="post-modal-title"
        aria-describedby="post-modal-description"
      >
        <div className="modal">
          <div className="modal-inner">
            <div className="modal-image-background">
              <img src={photo.src.large} className="clicked-img" alt={photo.id}></img>
            </div>
            <div className="photo-info">
              <div className="top-bar">
                <AccountCircleIcon style={{ fontSize: 24 }}/>
                <div>UserName</div>
              </div>
              <div className="comment-area">
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
};

export default PhotoBox;