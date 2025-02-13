import React from "react";
import "./Dashboard.css";
import Cards from "../Cards/Cards";
import Table from "../Table/Table";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <h1>Dashboard</h1>
      <Cards />
      <Table />
    </div>
  );
};

export default Dashboard;
