import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/landing-page/LandingPage.css"

function LandingPage() {
    return (
        <div className="landing-container">
            <Navbar />
            <h1>Landing Page</h1>
        </div>
    );
}

export default LandingPage;