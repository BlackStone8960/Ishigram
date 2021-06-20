import React from "react";
import { usePhotosContext } from "../../../context/PhotosProvider";
import TimelineItem from "./TimelineItem";
import "./Timeline.css";

const Timeline = () => {
  const { photosData } = usePhotosContext();

  console.log(photosData);

  return (
    photosData && (
      <section className="timeline-container">
        {photosData.map((photoData) => (
          <TimelineItem key={photoData.id} {...photoData} />
        ))}
      </section>
    )
  );
};

export default Timeline;
