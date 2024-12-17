import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();

        if (!username || !password) {
            console.log("Missing username or password");
            return;
        }

        const res = await fetch("http://localhost:4000/api/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            }),
        });

        if (!res.ok) {
            const err = await res.json();
            console.error("Error:", err.message);
            return;
        }

        console.log("Login successful");
        navigate("/");
    }

    return (
        <>
            <h1>Login page</h1>
            <div className="login-info">
                <p>Username</p>
                <input
                    type="text"
                    id="username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                <p>Password</p>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="button" onClick={handleSubmit}>Login</button>
            <p>No Account? <a href="/signup" className="signup-link">Sign Up</a></p>
        </>
    );
}

export default Login;