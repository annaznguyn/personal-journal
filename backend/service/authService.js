const express = require("express");
const database = require("../db/databaseConnection");

class authService {

    async register(username, password) {
        // add user to the table
        const { data, error } = await database.from("users").insert([{
            username: username,
            password: password,
        }]);

        if (error) {
            console.error("Error inserting user:", error.message);
            return null;
        }

        console.log("Added user successfully");
    }
}

module.exports = new authService();