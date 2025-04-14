import React from "react";
import "./Card.css";

const KpiCard = ({ title, value, change, changeText, date }) => {
  return (
    <div className="kpi-card">
      <div className="kpi-header">
        <span className="kpi-title">{title}</span>
        <span className="kpi-date">{date}</span>
      </div>
      <div className="kpi-value">{value}</div>
      <div className="kpi-change">
        <span className="change-positive">{change}</span> {changeText}
      </div>
    </div>
  );
};

export default KpiCard;
