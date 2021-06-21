import React from 'react';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import './Comment.css';

const Comment = ({ comment }) => (
  <div className="comment-wrapper">
    <AccountCircleIcon style={{ fontSize: 40 }} />
    <div className="user-sentence">
      <span className="user-name"><b>{comment.user}</b></span>
      <p className="comment-sentence">{comment.sentence}</p>
    </div>
  </div>
);

export default Comment;