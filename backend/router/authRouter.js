const express = require("express");
const router = express.Router();
const authController = require("../controller/AuthController");

// parse JSON data
router.use(express.json());

router.post("/register", authController.register);

module.exports = router;