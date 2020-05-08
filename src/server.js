const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

app.get("/", (req, res) => {
  const pathToHtmlFile = path.resolve(__dirname, "../dist/index.html");
  const contentFromHtmlFile = fs.readFileSync(pathToHtmlFile, "utf-8");
  res.send(contentFromHtmlFile);
});

// all the requests from url that starts with /static will go directly to
// our dist folder
app.use("/static", express.static(path.resolve(__dirname, "../dist")));

app.listen(3000, () => {
  console.log("server running on http://localhost:3000");
});
