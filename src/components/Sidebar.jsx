import React, { useState } from "react";
import menuData from "./SidebarMenuData";
import "./Sidebar.css";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">Material Dashboard PRO</div>

      <div className="sidebar-user">
        <img src="https://i.pravatar.cc/100?img=68" alt="User" />
        <span>Brooklyn Alice</span>
      </div>

      <ul className="sidebar-menu">
        {menuData.map((item, idx) => {
          if (item.section) {
            return <li key={idx} className="sidebar-section">{item.section}</li>;
          }

          const isOpen = openSections[item.title] ?? item.defaultOpen;

          return (
            <li key={idx} className={`menu-item ${isOpen ? "open" : ""}`}>
              <div className="menu-title" onClick={() => toggleSection(item.title)}>
                <span className="menu-icon">{item.icon}</span>
                <span>{item.title}</span>
                {item.subItems.length > 0 && (
                  <span className="arrow">{isOpen ? "▾" : "▸"}</span>
                )}
              </div>

              {isOpen && item.subItems.length > 0 && (
                <ul className="submenu">
                  {item.subItems.map((sub, subIdx) => (
                    <li key={subIdx} className={sub === "Sales" ? "active-sub" : ""}>
                      {sub}
                    </li>
                  ))}
                </ul>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidebar;
