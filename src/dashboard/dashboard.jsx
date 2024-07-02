// import React from "react";
import "./dashboard.css";
import PatientList from "./PatientList";
import SideBar from "./SideBar";

function Dashboard() {


  return (
    <div className="container">
      <SideBar />
      <PatientList />
    </div>
  );
}

export default Dashboard;
