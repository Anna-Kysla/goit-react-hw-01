import React from "react";

const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <li className="friend-item">
      <img src={avatar} alt="Avatar" width="48" />
      <p className="friend-name">{name}</p>
      <p className={`status ${isOnline ? "online" : "offline"}`}>
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
};

export default FriendListItem;
