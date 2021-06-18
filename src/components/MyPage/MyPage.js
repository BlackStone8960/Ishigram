import React from 'react';
import MyPageTop from './MyPageTop';
import MyPageTabs from './MyPageTabs';
import MyPageAlbum from  './album/MyPageAlbum';

const MyPage = () => {
  return (
    <div>
      <MyPageTop />
      <MyPageTabs />
      <MyPageAlbum />
    </div>
  );
}

export default MyPage;
