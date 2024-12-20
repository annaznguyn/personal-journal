import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/landing-page/Navbar";
import "../styles/landing-page/LandingPage.css"

function LandingPage() {
    return (
        // <div className="landing-container">
        <main>
            <Navbar />
            <h1>Landing Page</h1>
        </main>
    );
}

export default LandingPage;