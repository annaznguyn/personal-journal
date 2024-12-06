import React from "react";
import "../styles/dashboard/Dashboard.css";
import Navbar from "../components/Navbar.js";
import Cards from "../components/dashboard/Cards.js"

function Dashboard() {
    return (
        <>
            <head>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
            </head>
            <Navbar />
            <div className="dashboard-container">
                <div className="dashboard">
                    <div className="header">
                        <h2>Journals</h2>
                        <button><i class="fa fa-plus"></i> Create</button>
                    </div>
                    <div className="cards">
                        <Cards/>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;