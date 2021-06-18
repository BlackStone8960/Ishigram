import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
const TimelineItem = ({ photographer, src, comments }) => (
  <div>
    <img src={src.large} alt={photographer} />
    <h3>{photographer}</h3>
    <FavoriteBorderIcon />
  </div>
);

export default TimelineItem;
