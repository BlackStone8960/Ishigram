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

const PhotosProvider = ({ children }) => {
  const [photosData, dispatch] = useReducer(reducer, initialState);

  const getStoredCommentLikeData = (photosData) => {
    photosData.forEach((photoData) => {
      // if there is data of likes
      if (localStorage.hasOwnProperty(`L-${photoData.id}`)) {
        photoData.like = JSON.parse(localStorage.getItem(`L-${photoData.id}`));
      }
      // if therer is data of comments
      if (localStorage.hasOwnProperty(`C-${photoData.id}`)) {
        photoData.comments = JSON.parse(
          localStorage.getItem(`C-${photoData.id}`)
        );
      }
    });
    return photosData;
  };

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await createClient.get("/v1/curated?page=2&per_page=40");
        const originalPhotos = res.data.photos;

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

        // if there is data of posted photos on localStorage, concat it to photosDataArr
        if (localStorage.hasOwnProperty("user")) {
          const photosDataArrPlusPostedPhotos = [
            ...JSON.parse(localStorage.getItem("user")),
            ...photosDataArr,
          ];
          dispatch({
            type: "SET_PHOTO",
            payload: getStoredCommentLikeData(photosDataArrPlusPostedPhotos),
          });
        } else {
          dispatch({
            type: "SET_PHOTO",
            payload: getStoredCommentLikeData(photosDataArr),
          });
        }

        // console.log(photosDataArr);
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
          dispatch,
        }}
      >
        {children}
      </PhotosContext.Provider>
    </>
  );
};

const usePhotosContext = () => useContext(PhotosContext);

export { usePhotosContext, PhotosProvider as default };
