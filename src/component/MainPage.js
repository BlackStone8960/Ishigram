import React from "react";
import { usePhotosContext } from "../context/PhotosProvider";

const MainPage = () => {
  const { photosData } = usePhotosContext();

  return (
    <div>
      <h1>This is Main Page</h1>
      {photosData.length !== 0 && (
        <>
          <h2>Context working</h2>
          {photosData.map((photo) => (
            <img
              key={photo.id}
              src={photo.src.large}
              alt={photo.photographer}
            />
          ))}
        </>
      )}
    </div>
  );
};

export default MainPage;
