import axios from "axios";
import React, { useState, createContext, useContext, useEffect } from "react";

const createClient = axios.create({
  baseURL: `https://api.pexels.com`,
  headers: {
    Authorization: process.env.REACT_APP_PHOTO_API_KEY,
  },
});

const PhotosContext = createContext();

const initialState = {
  photosData: [],
};

const PhotosProvider = ({ children }) => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await createClient.get("/v1/curated?page=2&per_page=40");
        const originalPhotos = res.data.photos;

        setPhotos(originalPhotos);
      } catch (error) {
        console.log(`Oops, error!: ${error}`);
      }
    };
    fetchAPI();
    photos && console.log(photos);
  }, []);

  return (
    <>
      <PhotosContext.Provider
        value={{
          photos,
        }}
      >
        {children}
      </PhotosContext.Provider>
    </>
  );
};

const usePhotosContext = () => useContext(PhotosContext);

export { usePhotosContext, PhotosProvider as default };
