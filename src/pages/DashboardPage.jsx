import React from "react";
import Card from "../components/Card";
import ChannelsPieChart from "../components/charts/ChannelsPieChart";
import RevenueLineChart from "../components/charts/RevenueLineChart";
import SalesByAgeBarChart from "../components/charts/SalesByAgeBarChart";
import CountryStatsCard from "../components/CountryStatsCard";
import Breadcrumb from "../components/Breadcrumb";
import Topbar from "../components/Topbar";
import "./DashboardPage.css";

const DashboardPage = () => {
  return (
    <div>
      <div className="topbar">
        <Breadcrumb />
        <Topbar />
      </div>

      <h1 className="dashboard-title">Sales</h1>

      <div className="kpi-row">
        <Card
          title="Sales"
          value="$230,220"
          change="+55%"
          changeText="since last month"
          date="6 May - 7 May"
        />
        <Card
          title="Customers"
          value="3,200"
          change="+12%"
          changeText="since last month"
          date="6 May - 7 May"
        />
        <Card
          title="Avg. Revenue"
          value="$1,200"
          change="$213"
          changeText="since last month"
          date="6 May - 7 May"
        />
      </div>
      <div className="dashboard-grid">
        <ChannelsPieChart />
        <RevenueLineChart />
      </div>
      <div className="dashboard-grid">
        <SalesByAgeBarChart />
        <CountryStatsCard />
      </div>
    </div>
  );
};

export default DashboardPage;
