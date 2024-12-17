const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");

// parse JSON data
router.use(express.json());

router.post("/signup", authController.signup);
router.post("/login", authController.login);

module.exports = router;