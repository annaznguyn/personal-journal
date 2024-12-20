import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/login/Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrorMessage] = useState("");
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
            console.log("Wrong username or password");
            setErrorMessage(err.message);
            return;
        }

        console.log("Login successful");
        navigate("/");
    }

    return (
        <div className="login">
            <nav>
                <a href="/" className="login-logo">MindFlow</a>
            </nav>
            <div className="login-container">
                <div className="login-content">
                    <div className="login-info">
                        <p className="small-logo">MindFlow</p>
                        <p className="username">Username</p>
                        <input
                            type="text"
                            id="username"
                            placeholder="HandSanitiser"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}/>
                        <p className="password">Password</p>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}/>
                    </div>
                    <button type="button" onClick={handleSubmit}>Log In</button>

                    {/* display error message when username and/or password is wrong */}
                    {error && <p className="login-error">{error}</p>}

                    <p className="signup-suggestion">No Account Yet? <a href="/signup" className="signup-link">Sign Up</a></p>
                </div>
            </div>
        </div>
    );
}

export default Login;