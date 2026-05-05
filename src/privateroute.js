const express = require("express");
const router = express.Router();
function middleware(req, res, next) {
  const authHeader = req.headers["authorization"];
  if (authHeader === "admin123") {
    next();
  } else {
    res.status(403).send("access denied");
  }
}
router.get("/", middleware, (req, res) => {
  res.send("private route");
});
module.exports = router;
