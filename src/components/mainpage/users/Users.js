import React from "react";
import usersData from "../usersData";
import "./Users.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Users = () => (
  <section className="main-user-container">
    <div className="main-user-wrap">
      <div className="icon-name-wrap">
        <img className="main-user-icon" src="./takosan.jpeg" alt="tako" />
        <div>
          <p className="username">BlackStone1496</p>
          <p className=" name">Taishi</p>
        </div>
      </div>
      <p className="accout-switch-link">Switch Account</p>
    </div>
    <div className="users-list-titles">
      <p className="ppl-may-know">People you may know</p>
      <p className="view-all">View all</p>
    </div>
    <div className="users-wrap">
      {usersData.map((user) => (
        <div key={user.id} className="user-wrap">
          <div className="icon-name-wrap">
            <AccountCircleIcon
              style={{
                fontSize: 42,
                color: "#595959",
                marginRight: "0.8rem",
              }}
            />
            <div>
              <p className="username">{user.username}</p>
              <p className="name">{user.name}</p>
            </div>
          </div>
          <p className="follow-link">Follow</p>
        </div>
      ))}
    </div>
  </section>
);

export default Users;
