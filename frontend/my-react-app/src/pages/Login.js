import React from "react";
import "../styles/Login.css";

function Login() {
    return (
        <>
            <h1>Login page</h1>
            <div className="login-info">
                <p>Username</p>
                <input></input>
                <p>Password</p>
                <input></input>
            </div>
            <button>Login</button>
            <p>No Account? <a href="/signup" className="signup-link">Sign Up</a></p>
        </>
    );
}

export default Login;