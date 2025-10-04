import React from "react";

const Dashboard = () => {
  if (2 < 5) {
    throw new Error("Error in dashboard");
  }
  return <div>Dashboard</div>;
};

export default Dashboard;
