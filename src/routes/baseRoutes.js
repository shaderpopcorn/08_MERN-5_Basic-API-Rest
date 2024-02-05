const express = require("express");
const router = express.Router();

router.get("*", (req, res) => {
  res.status(404).send("<h1>404 - Page Not Found</h1>");
});

module.exports = router;
