import React from 'react';
import './MyPageTabs.css';

const MyPageTabs = () => {
  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        <div className="tab-box">POSTS</div>
        <div className="tab-box">IGTV</div>
        <div className="tab-box">SAVED</div>
        <div className="tab-box">TAGGED</div>
      </div>
    </div>
  );
};

export default MyPageTabs;