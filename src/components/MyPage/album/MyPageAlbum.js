import React from 'react';
import PhotoBox from './PhotoBox';
import './MyPageAlbum.scss';

const MyPageAlbum = ({ usersPhoto, dispatchUsersPhoto }) => {
  return (
    <div className="album-container">
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
    </div>
  )
};

export default MyPageAlbum;