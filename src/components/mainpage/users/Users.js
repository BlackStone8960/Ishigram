import React from "react";
import usersData from "../usersData";
import "./Users.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";

const Users = () => (
  <section>
    <div className="main-user-wrap">
      <div className="icon-name-wrap">
        <img className="main-user-icon" src="./takosan.jpeg" alt="tako" />
        <div>
          <p className="username">BlackStone1496</p>
          <p className=" name">Taishi</p>
        </div>
      </div>
      <a className="accout-switch-link" href="#">
        Switch Account
      </a>
    </div>
    <div className="users-list-titles">
      <p className="ppl-may-know">People you may know</p>
      <a className="view-all" href="#">
        View all
      </a>
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
          <a className="follow-link" href="#">
            Follow
          </a>
        </div>
      ))}
    </div>
  </section>
);

export default Users;
