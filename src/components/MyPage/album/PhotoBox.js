import React, { useState } from 'react';
import './PhotoBox.css';
import Modal from '@material-ui/core/Modal';
import '../../../modal.css';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleIcon from '@material-ui/icons/ChatBubble';
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import Comment from './Comment';
import { usePhotosContext } from '../../../context/PhotosProvider';
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { v4 as uuid } from "uuid";

const PhotoBox = ({ id, src, like, comments, usersPhoto, dispatchUsersPhoto }) => {
  const { dispatch } = usePhotosContext();
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState(false);
  const [newComment, setNewComment] = useState('');

  const handleOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  };

  const editLocalData = (updates) => {
    usersPhoto.map(photoData => {
      if(photoData.id === id) {
        return { ...photoData, ...updates }
      } else {
        return photoData;
      }
    })
  };

  const dispatchUpdates = (updates) => {
    dispatch({
      type: "EDIT_PHOTO",
      payload: {
        id,
        updates
      }
    });
    // Unify these reducers later
    dispatchUsersPhoto({
      type: "EDIT_USERS_PHOTO",
      payload: {
        id,
        updates
      }
    })
  };

  const onAddlike = () => {
    const updates = {
      like: {
        isLiked: true,
        numOfLikes: like.numOfLikes + 1
      }
    };
    dispatchUpdates(updates);
    localStorage.setItem('user', JSON.stringify(editLocalData(updates)));
  }

  const onRemoveLike = () => {
    const updates = {
      like: {
        isLiked: false,
        numOfLikes: like.numOfLikes - 1
      }
    };
    dispatchUpdates(updates);
    localStorage.setItem('user', JSON.stringify(editLocalData(updates)));
  }

  const onAddNewComment = () => {
    const commentInfo = {
      user: 'user',
      commentUid: uuid(),
      sentence: newComment
    };
    comments.unshift(commentInfo);
    const updates = { comments };
    dispatchUpdates(updates);
    localStorage.setItem('user', JSON.stringify(editLocalData(updates)));
    setNewComment('');
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
            <img src={src.medium} alt={id}></img>
          </div>
        </div>
        { hover && (
        <div
          onClick={handleOpen}
          className="photo-box-hover"
        >
          <div className="photo-icon-info">
            <FavoriteIcon  />
            <span>{like.numOfLikes}</span>
            <ChatBubbleIcon />
            <span>{comments.length}</span>
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
              <img src={src.large} className="clicked-img" alt={id}></img>
            </div>
            <div className="photo-info">
              <div className="top-bar">
                <AccountCircleIcon style={{ fontSize: 40 }}/>
                <div className="user-name">UserName</div>
              </div>
              <div className="comment-area">
                {
                  comments.map(comment => (
                    <Comment key={comment.commentUid} comment={comment}/>
                  ))
                }
              </div>
              <div className="icon-area">
                <div className="icon-container">
                  <div className="icon-left">
                    <div className="icon-box">
                    {
                      like.isLiked ? (
                        <FavoriteIcon 
                          onClick={onRemoveLike}
                          style={{ color: "red" }}
                          fontSize="large" 
                        />
                      ) : (
                        <FavoriteBorderIcon
                          onClick={onAddlike}
                          fontSize="large" 
                        />
                      )
                    }
                    </div>
                    <div className="icon-box">
                      <ChatBubbleOutlineOutlinedIcon fontSize="large" />
                    </div>
                    <div className="icon-box">
                      <SendOutlinedIcon fontSize="large" />
                    </div>
                  </div>
                  <div className="icon-box">
                    <BookmarkBorderOutlinedIcon fontSize="large" />
                  </div>
                </div>
                <p className="like-text">
                  { like.numOfLikes === 0 ? "Be the first to like this" : `${like.numOfLikes} like` }
                </p>
              </div>
              <form className="add-comment-form" noValidate autoComplete="off">
                <TextField 
                  className="standard-basic"
                  label="Comment"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                />
                <Button
                  onClick={onAddNewComment}
                  variant="outlined"
                >
                  Send
                </Button>
              </form>
            </div>
          </div>
        </div>
      </Modal>
    </>
  )
};

export default PhotoBox;