const express = require("express");
const app = express();
const publicroute = require("./src/publicroute");
const privateroute = require("./src/privateroute");
app.use("/public", publicroute);
app.use("/private", privateroute);
app.listen(3000, () => {
  console.log("server running on port 3000");
});
