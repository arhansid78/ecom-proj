const express = require("express");
const userModel = require("../models/user-schema");
const bcrypt = require("bcrypt");
const Jwt = require("jsonwebtoken"); // Import JWT for token generation
const { body, validationResult } = require("express-validator"); // Validator to check the data
const authMiddleware = require("../middlewares/auth");
// Router to handle various requests
const router = express.Router();

// // Home page
// router.get("/", authMiddleware, (req, res) => {
//   res.send("Home Page");
// });

// // About page
// router.route("/about").get((req, res) => {
//   res.send("About page");
// });

// Register page
// router.get("/register", (req, res) => {
//   res.render("register");
// });

// Handle POST for registration
router.post(
  "/register",
  body("email").trim().isEmail(),
  body("password").trim().isLength({ min: 4 }),
  body("username").trim().isLength({ min: 6 }),
  async (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.json({
        message: "Invalid Data",
      });
    }

    const { username, password, email } = req.body;

    // Hashing the password
    const hashedPass = await bcrypt.hash(password, 10);

    const existUsername = await userModel.findOne({ username: username });

    if (existUsername) {
      return res.json({
        message: "This username already exist",
      });
    }
    const existEmail = await userModel.findOne({ email: email });

    if (existEmail) {
      return res.json({
        message: "This email already exist",
      });
    }

    const newUser = await userModel.create({
      username: username,
      email: email,
      password: hashedPass,
    });

    res.json(newUser);
  }
);

// Handle POST for login
router.post(
  "/login",
  body("username").trim().isLength({ min: 4 }),
  body("password").trim().isLength({ min: 6 }),
  async (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).json({
        error: error.array(),
        message: "Invalid data",
      });
    }

    const { username, password } = req.body;
    const user = await userModel.findOne({ username });

    if (!user) {
      return res.status(400).json({
        message: "Username or password is incorrect",
      });
    }

    // Compare password
    const isMatch = await bcrypt.compare(password, user.password);

    if (isMatch) {
      return res.status(400).json({
        message: "Password or username is incorrect",
      });
    }

    // Generate JWT token
    const token = Jwt.sign(
      {
        userId: user.id,
        email: user.email,
        username: user.username,
      },
      process.env.JWT_SECRET
    );

    res.cookie("token", token);
    res.send(token);
  }
);
module.exports = router;
