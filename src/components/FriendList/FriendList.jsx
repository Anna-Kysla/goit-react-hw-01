import React from "react";
import FriendListItem from "./FriendListItem";
import "./FriendList.css";

const FriendList = ({ friends }) => {
  return (
    <ul className="friend-list">
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </ul>
  );
};

export default FriendList;
