import React from "react";
import { usePhotosContext } from "../../context/PhotosProvider";
import TimelineItem from "./TimelineItem";

const Timeline = () => {
  const { photosData } = usePhotosContext();

  return (
    photosData && (
      <section>
        {photosData.map((photoData) => (
          <TimelineItem key={photoData.id} {...photoData} />
        ))}
      </section>
    )
  );
};

export default Timeline;
