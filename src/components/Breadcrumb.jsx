import React from "react";
import "./breadcrumb.css";

const Breadcrumb = () => {
  return (
    <div className="breadcrumb-container">
      <span className="breadcrumb-inactive">Dashboards</span>
      <span className="breadcrumb-separator">/</span>
      <span className="breadcrumb-active">Sales</span>
    </div>
  );
};

export default Breadcrumb;
