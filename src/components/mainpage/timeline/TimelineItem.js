import React, { useState, useEffect } from "react";
import { usePhotosContext } from "../../../context/PhotosProvider";
import { v4 as uuid } from "uuid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import SendOutlinedIcon from "@material-ui/icons/SendOutlined";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

import "./TimelineItem.css";

// Material-UI
const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      marginRight: theme.spacing(4),
      marginLeft: theme.spacing(4),
      marginBottom: theme.spacing(2),
      width: "90%",
    },
  },
  icon: {
    marginRight: "0.5rem",
    cursor: "pointer",
  },
}));

const TimelineItem = ({ id, photographer, src, comments }) => {
  const classes = useStyles();
  const { dispatch, photosData } = usePhotosContext();
  const [newComment, setNewComment] = useState("");

  const onAddNewComment = (id) => {
    setNewComment("");
    const commentInfo = {
      // change this later
      user: "user",
      commentUid: uuid(),
      sentence: newComment,
    };
    const updates = comments.unshift(commentInfo);
    dispatch({ type: "EDIT_PHOTO", payload: { id, updates } });
  };

  return (
    <div className="item-wrap">
      <img src={src.large} alt={photographer} />
      <p className="photographer">{photographer}</p>
      <div className="icon-wrap">
        <FavoriteBorderIcon className={classes.icon} />
        <ChatBubbleOutlineOutlinedIcon className={classes.icon} />
        <SendOutlinedIcon className={classes.icon} />
        <BookmarkBorderOutlinedIcon className={classes.icon} />
      </div>
      <div className="comments-display">
        {comments.length !== 0 ? (
          comments.map((comment) => (
            <p key={comment.commentUid}>{comment.sentence}</p>
          ))
        ) : (
          <p>No comment yet</p>
        )}
      </div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          className="standard-basic"
          label="Comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
      </form>
      <Button
        onClick={(e) => onAddNewComment(e.target.value)}
        variant="outlined"
        value={id}
      >
        Default
      </Button>
    </div>
  );
};

export default TimelineItem;
