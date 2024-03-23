const express = require("express");
const cors = require("cors");
const path = require("path");
const portfolioData = require("./dataHandle.js");

// import { express } from "express";
// import {cors} from "cors";
// import {path} from "path";
// import {processData} from "dataHandle.js";
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "../src")));
app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../public", "temp1")));
app.use(express.static(path.join(__dirname, "../public", "portfolio-temp")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "../src", "main.html"));
});

app.get("/about", (req, res) => {
  console.log("were at about section!");
  res.sendFile(path.join(__dirname, "../public", "temp1/fancy_words.html"));
});
app.get("/portfolio", (req, res) => {
  res.sendFile(
    path.join(__dirname, "../public", "portfolio-temp/portfolio-temp.html")
  );
  console.log("were at portfolio template!");
});

app.post("/portfolio", (req, res) => {
  const sentData = req.body;
  let data = portfolioData(sentData);
  // console.log(data);
  res.json({ html: data.htmlkey, css: data.csskey });
});

app.listen(3000, () => {
  console.log("server running on port 3000");
});
