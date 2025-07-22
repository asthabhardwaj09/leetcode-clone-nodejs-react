const express = require("express");
const router = express.Router();
const { runCode } = require("../controllers/codeControllers");

// POST route to run code
router.post("/", runCode);

// Optional: GET route to confirm this endpoint is working
router.get("/", (req, res) => {
  res.send("Run Code API is active 🚀");
});

module.exports = router;
