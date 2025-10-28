const express = require("express");
const router = express.Router();
const authService = require("../services/authService");
const userService = require("../services/userService");
const authenticateJWT = require("../middlewares/authMiddleware");

// Public routes
router.post("/login", authService.login);

// Protected routes
router.get("/users", authenticateJWT, userService.getAllUsers);
router.post("/logout", authenticateJWT, authService.logout);

module.exports = router;
