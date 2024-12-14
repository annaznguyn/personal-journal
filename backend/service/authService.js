const express = require("express");
const bcrypt = require("bcrypt");

const database = require("../db/databaseConnection");

class AuthService {

    /**
     * Insert new user to the users table (with hashed password).
     * @param username Input username.
     * @param password Input password.
     * @returns Inserted data.
     */
    async register(username, password) {
        try {
            // check if username already exists
            const { data: checkData, error: checkError } = await database
                .from("users")
                .select("username")
                .eq("username", username);

            if (checkError) {
                console.error("Error checking username:", checkError.message);
                return null;
            }
            
            if (checkData.length > 0) {
                console.log("Username already exists");
                return null;
            }

            // hash the password
            const saltRounds = 10;
            const hash = await bcrypt.hash(password, saltRounds);

            // add user to the table
            const { data: insertData, error: insertError } = await database
                .from("users")
                .insert([{
                    username: username,
                    password: hash,
                }])
                .select();
            
            if (insertError) {
                console.error("Error inserting user:", insertError.message);
                return null;
            }
            
            console.log("Added user successfully");
            return insertData;
        } catch (err) {
            console.error("Unexpected error:", err.message);
            return null;
        }
    }

    async login(username, password) {
        try {
            // check if username exists
            const { data: checkData, error: checkError } = await database
                .from("users")
                .select("username")
                .eq("username", username);
            
            if (checkError) {
                console.error("Error fetching user:", checkError.message);
                return null;
            }
            
            // if username doesn't exist, return null
            if (checkData.length == 0) {
                console.log("Username doesn't exist");
                return null;
            }

            // retrieve hashed password
            const { data: hash, error: fetchError } = await database
                .from("users")
                .select("password")
                .eq("username", username);

            if (fetchError) {
                console.error("Error fetching password:", fetchError.message);
                return null;
            }

            if (hash.length == 0) {
                console.log("There's something wrong. Password doesn't exist.");
                return null;
            }

            // console.log("Hashed:", typeof hash[0].password, hash[0].password);
            // console.log("Input pwd:", typeof password, password);

            // compare passwords
            const result = await bcrypt.compare(password, hash[0].password);

            console.log("result:", result);

            return result;

        } catch (err) {
            console.error("Unexpected error:", err.message);
            return null;
        }
    }
}

module.exports = new AuthService();