import React, { useEffect, useReducer } from 'react';
import MyPageTop from './MyPageTop';
import MyPageTabs from './MyPageTabs';
import MyPageAlbum from  './album/MyPageAlbum';
import usersPhotoReducer from '../../reducer/usersPhotoReducer';

const MyPage = () => {
  const [usersPhoto, dispatchUsersPhoto] = useReducer(usersPhotoReducer, []);

  useEffect(() => {
    const localPhotoData = JSON.parse(localStorage.getItem('user'));
    localPhotoData && dispatchUsersPhoto({
      type: 'SET_USERS_PHOTOS',
      payload: localPhotoData
    })
  }, [])

  return (
    <div>
      <MyPageTop
        usersPhoto={usersPhoto}
        dispatchUsersPhoto={dispatchUsersPhoto}
      />
      <MyPageTabs />
      <MyPageAlbum
        usersPhoto={usersPhoto}
        dispatchUsersPhoto={dispatchUsersPhoto}
      />
    </div>
  );
}
// Make context object later
export default MyPage;
