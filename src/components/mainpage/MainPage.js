import React from "react";
import Timeline from "./timeline/Timeline";
import Users from "./users/Users";
import "./MainPage.css";

const MainPage = () => (
  <>
    <main className="main-container">
      <div className="timeline-container">
        <Timeline />
      </div>
      <div className="users-container">
        <Users />
      </div>
    </main>
  </>
);

export default MainPage;
