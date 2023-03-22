import React from "react";

const ProfileCard = ({ profilePic, user, post }) => {
  return (
    <div className="profileCard">
      <img src={profilePic} alt="user logo" />
      <p>{user}</p>
      <h3>{post}</h3>
    </div>
  );
};

export default ProfileCard;
