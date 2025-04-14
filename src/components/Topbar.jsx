import React from "react";
import { FaUser, FaCog, FaBell } from "react-icons/fa";
import "./topbar.css";

const Topbar = () => {
  return (
    <div className="topbar-container">
      <input type="text" placeholder="Search here" className="search-input" />

      <div className="icon-group">
        <FaUser className="topbar-icon" />
        <FaCog className="topbar-icon" />
        <div className="notification-wrapper">
          <FaBell className="topbar-icon" />
          <span className="notification-badge">9</span>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
