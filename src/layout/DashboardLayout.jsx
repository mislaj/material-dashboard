import React from "react";
import Sidebar from "../components/sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ marginLeft: "260px", width: "100%", padding: "2rem" }}>
        {children}
      </div>
    </div>
  );
};

export default DashboardLayout;
