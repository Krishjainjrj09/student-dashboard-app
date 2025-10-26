import React from "react";
import { useNavigate } from "react-router-dom";
import Assignments from "./Assignments";
import Events from "./Events";
import Stats from "./Stats";

function Dashboard() {
  const navigate = useNavigate();
  const studentName = localStorage.getItem("studentName");

  if (!studentName) navigate("/");

  const handleLogout = () => {
    localStorage.removeItem("studentName");
    navigate("/");
  };

  return (
    <div className="dashboard-container">
      <header>
        <h2>Welcome, {studentName} 👋</h2>
        <button onClick={handleLogout}>Logout</button>
      </header>

      <div className="main-content">
        <div className="left-panel">
          <Assignments />
        </div>
        <div className="right-panel">
          <Stats />
          <Events />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
