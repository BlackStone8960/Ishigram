import React from "react";
import { usePhotosContext } from "../context/PhotosProvider";

const MainPage = () => {
  const { photos } = usePhotosContext();

  return (
    <div>
      <h1>This is Main Page</h1>
      {photos.length !== 0 && (
        <>
          <h2>Context working</h2>
          {photos.map((photo) => (
            <img src={photo.src.medium} alt={photo.photographer} />
          ))}
        </>
      )}
    </div>
  );
};

export default MainPage;
