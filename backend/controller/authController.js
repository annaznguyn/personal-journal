const express = require("express");

/**
 * Endpoint of login.
 */
function login(req, res) {
    const username = req.body.username;
    const password = req.body.password;

    console.log(username, password);

    // call service to authenticate

    res.send("Login successful");
}

module.exports = {
    login
};