import React from 'react';
import PhotoBox from './PhotoBox';
import './MyPageAlbum.css';

const MyPageAlbum = ({ usersPhoto }) => {
  return (
    <div className="ambum-wrapper">
      {
        usersPhoto.map(photo => (
          <PhotoBox key={photo.id} photo={photo} />
        ))
      }
    </div>
  )
};

export default MyPageAlbum;