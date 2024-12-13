const express = require("express");
const authService = require("../service/authService");

/**
 * Endpoint of register.
 */
function register(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);

    // call service to authenticate
    authService.register(username, password);

    res.send("Register successful");
}

module.exports = {
    register
};