import React from "react";
import "../styles/dashboard/Dashboard.css";
import Navbar from "../components/Navbar.js";
import Cards from "../components/dashboard/Cards.js"

function Dashboard() {
    return (
        <div>
            <Navbar />
            <div className="dashboard-container">
                <div className="dashboard">
                    <h2>Dashboard</h2>
                    <div className="cards">
                        <Cards/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;