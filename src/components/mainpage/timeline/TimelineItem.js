import React, { useState } from "react";
import { usePhotosContext } from "../../../context/PhotosProvider";
import { v4 as uuid } from "uuid";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
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
      width: "100%",
      display: "flex",
    },
  },
  icon: {
    marginRight: "0.5rem",
    cursor: "pointer",
  },
  btn: {
    marginRight: theme.spacing(4),
  },
}));

const TimelineItem = ({ id, photographer, src, like, comments }) => {
  const classes = useStyles();
  const { dispatch } = usePhotosContext();
  const [newComment, setNewComment] = useState("");

  const onAddlike = (id) => {
    console.log("clicked");
    const updates = {
      like: {
        isLiked: true,
        numOfLikes: like.numOfLikes + 1,
      },
    };
    dispatch({
      type: "EDIT_PHOTO",
      payload: {
        id,
        updates,
      },
    });
  };

  const onRemoveLike = () => {
    const updates = {
      like: {
        isLiked: false,
        numOfLikes: like.numOfLikes - 1,
      },
    };
    dispatch({
      type: "EDIT_PHOTO",
      payload: {
        id,
        updates,
      },
    });
  };

  const onAddNewComment = (id) => {
    setNewComment("");
    const commentInfo = {
      user: "user",
      commentUid: uuid(),
      sentence: newComment,
    };
    comments.unshift(commentInfo);
    const updates = {
      comments,
    };
    dispatch({ type: "EDIT_PHOTO", payload: { id, updates } });
  };

  return (
    <div className="item-wrap">
      <img src={src.large} alt={photographer} />
      <p className="photographer">{photographer}</p>
      <div className="icon-wrap">
        <div className="fav-icon-wrap">
          {like.isLiked ? (
            <FavoriteIcon
              className={classes.icon}
              onClick={() => onRemoveLike(id)}
              style={{ color: "red" }}
            />
          ) : (
            <FavoriteBorderIcon
              className={classes.icon}
              onClick={() => onAddlike(id)}
            />
          )}
          <p className="num-of-likes">{like.isLiked ? like.numOfLikes : ""}</p>
        </div>
        <ChatBubbleOutlineOutlinedIcon className={classes.icon} />
        <SendOutlinedIcon className={classes.icon} />
        <BookmarkBorderOutlinedIcon className={classes.icon} />
      </div>
      <div className="comments-display">
        {comments.length !== 0 ? (
          comments.map((comment) => (
            <p key={comment.commentUid}>
              {" "}
              <span>
                <b>{comment.user}</b>
              </span>{" "}
              {comment.sentence}
            </p>
          ))
        ) : (
          <p style={{ color: "gray" }}>No comments yet</p>
        )}
      </div>
      <form className={`${classes.root} form`} noValidate autoComplete="off">
        <TextField
          className="standard-basic"
          label="Comment"
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <Button
          className={classes.btn}
          onClick={() => onAddNewComment(id)}
          variant="outlined"
        >
          Send
        </Button>
      </form>
    </div>
  );
};

export default TimelineItem;
