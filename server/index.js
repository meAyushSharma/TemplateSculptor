const express = require("express");
const cors = require("cors");
const path = require("path");
const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, "../src")));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../public", "temp1")));
app.use(express.static(path.join(__dirname, "../public", "temp2")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../src", "main.html"));
});

app.get("/about", (req, res) => {
  console.log("were at about section!");
  res.sendFile(path.join(__dirname, "../public", "temp1/fancy_words.html"));
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
