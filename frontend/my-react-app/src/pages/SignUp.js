import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // send post request to the server when clicking on the sign up button
    async function handleSubmit(e) {
        e.preventDefault();

        // check username and password
        if (!username || !password) {
            console.log("Missing username or password");
            return;
        }

        const res = await fetch("http://localhost:4000/api/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json", // let the server know this is a json object
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

        console.log("Sign up successful");
        navigate("/");
    };

    return (
        <>
            <h1>Sign Up</h1>
            <div className="signup-info">
                <p>Username</p>
                <input 
                    type="text" 
                    id="username" 
                    placeholder="e.g. Big Chungus" 
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
                <p>Password</p>
                <input 
                    type="password" 
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </div>
            <button type="button" onClick={handleSubmit}>Sign Up</button>
        </>
    );
}

export default SignUp;