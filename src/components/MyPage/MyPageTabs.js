import React from 'react';
import MediaQuery from 'react-responsive';
import AppsIcon from '@material-ui/icons/Apps';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import './MyPageTabs.scss';

const MyPageTabs = () => {
  return (
    <div className="tabs-wrapper">
      <div className="tabs">
        <MediaQuery query="(max-width: 480px)">
          <AppsIcon style={{ fontSize: 40 }} />
          <AssignmentIndIcon style={{ fontSize: 40 }} />
        </MediaQuery>
        <MediaQuery query="(min-width: 481px)">
          <div className="tab-box">POSTS</div>
          <div className="tab-box">IGTV</div>
          <div className="tab-box">SAVED</div>
          <div className="tab-box">TAGGED</div>
        </MediaQuery>
      </div>
    </div>
  );
};

export default MyPageTabs;