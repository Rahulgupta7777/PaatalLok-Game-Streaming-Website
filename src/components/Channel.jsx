import React from "react";
import { Avatar } from "@mui/material";
import "./Channel.css";


const Channel = ({ avatarUrl, name, followers }) => {
  return (
    <div className="channel">
      <img className="channel_avatar" src={avatarUrl} alt={name} />
      <div className="channel_details">
        <p className="channel_name">{name}</p>
        <p className="channel_followers">{followers} followers</p>
      </div>
      <span className="channel_dot" />
    </div>
  );
};


export default Channel;
