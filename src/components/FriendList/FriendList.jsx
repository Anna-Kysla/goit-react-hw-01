import React from "react";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <li key={id} className="friend-item">
          <img src={avatar} alt="Avatar" width="48" />
          <p className="friend-name">{name}</p>
          <p className={`status ${isOnline ? "online" : "offline"}`}>
            {isOnline ? "Online" : "Offline"}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default FriendList;
