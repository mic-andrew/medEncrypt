// import React from "react";
import AddPatient from "./AddPatient";
import "./dashboard.css";
import PatientList from "./PatientList";
import SideBar from "./SideBar";

function Dashboard() {


  return (
    <div className="container">
      <SideBar />
      <PatientList />
      {/* <AddPatient /> */}
    </div>
  );
}

export default Dashboard;
