const express = require("express");
const authService = require("../service/AuthService");

class AuthController {
    
    /**
     * Endpoint of user registration.
     */
    async register(req, res) {
        const username = req.body.username;
        const password = req.body.password;

        console.log(username, password);

        // call service to insert user
        const data = await authService.register(username, password);

        // data is null if username already exists
        if (!data) {
            res.send("Username already exists");
            return;
        }

        res.status(200).json({ message: "Register successful", user: data});
    }
}

module.exports = new AuthController();