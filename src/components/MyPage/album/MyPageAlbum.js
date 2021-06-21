import React from 'react';
import PhotoBox from './PhotoBox';
import './MyPageAlbum.css';

const MyPageAlbum = ({ usersPhoto, dispatchUsersPhoto }) => {
  return (
    <div className="ambum-wrapper">
      {
        usersPhoto.map(photo => (
          <PhotoBox
            key={photo.id}
            {...photo}
            usersPhoto={usersPhoto}
            dispatchUsersPhoto={dispatchUsersPhoto}
          />
        ))
      }
    </div>
  )
};

export default MyPageAlbum;