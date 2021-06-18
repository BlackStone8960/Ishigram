import axios from "axios";
import React, { createContext, useContext, useEffect, useReducer } from "react";
import { reducer } from "../reducer/reducer";

const createClient = axios.create({
  baseURL: `https://api.pexels.com`,
  headers: {
    Authorization: process.env.REACT_APP_PHOTO_API_KEY,
  },
});

const PhotosContext = createContext();
const initialState = [];

// photosData: [{}, {}, {}, {}]
// {id: string src: string photographer: string isLiked: boolean comments: [] }

const PhotosProvider = ({ children }) => {
  const [photosData, dispatch] = useReducer(reducer, initialState);

  // const addPhoto = (newPhoto) => {
  //   dispatch({ type: "ADD_PHOTO", payload: newPhoto });
  // };

  // const deletePhoto = (id) => {
  //   dispatch({ type: "DELETE_PHOTO", payload: id });
  // };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await createClient.get("/v1/curated?page=2&per_page=40");
        const originalPhotos = res.data.photos;

        // setPhotos(originalPhotos);

        const photosDataArr = [];
        originalPhotos &&
          originalPhotos.forEach((photoData) => {
            const photoDataObj = {};
            const src = (photoDataObj.src = {});
            const like = (photoDataObj.like = {});
            photoDataObj.id = photoData.id;
            photoDataObj.photographer = photoData.photographer;
            src.large = photoData.src.large;
            src.medium = photoData.src.medium;
            like.isLiked = photoData.liked;
            like.numOfLikes = 0;
            photoDataObj.comments = [];
            photosDataArr.push(photoDataObj);
          });
        dispatch({ type: "SET_PHOTO", payload: photosDataArr });
        console.log(photosDataArr);
      } catch (error) {
        console.log(`Oops, error!: ${error}`);
      }
    };
    fetchAPI();
  }, []);

  return (
    <>
      <PhotosContext.Provider
        value={{
          photosData,
        }}
      >
        {children}
      </PhotosContext.Provider>
    </>
  );
};

const usePhotosContext = () => useContext(PhotosContext);

export { usePhotosContext, PhotosProvider as default };
