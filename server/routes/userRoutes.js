const express = require("express");

const {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
} = require("../controllers/userController");

const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

// Get all users
router.get("/", authMiddleware, getUsers);

// Create user
router.post("/", authMiddleware, createUser);

// Update user
router.put("/:id", authMiddleware, updateUser);

// Delete user
router.delete("/:id", authMiddleware, deleteUser);

module.exports = router;