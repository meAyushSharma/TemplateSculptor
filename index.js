const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const fn = require("./dataHandle");
const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static(path.join(__dirname, "src")));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.static(path.join(__dirname, "public", "business-temp")));
app.use(express.static(path.join(__dirname, "public", "portfolio-temp")));

app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "src", "main.html"));
});

app.get("/business", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "business-temp/business-temp.html")
  );
});

app.post("/business", (req, res) => {
  const sentData = req.body;
  let data = fn.businessData(sentData);
  res.json({
    htmlbusiness: data.htmlkeybusiness,
    cssbusiness: data.csskeybusiness,
  });
});

app.get("/portfolio", (req, res) => {
  res.sendFile(
    path.join(__dirname, "public", "portfolio-temp/portfolio-temp.html")
  );
});

app.post("/portfolio", (req, res) => {
  const sentDataPortfolio = req.body;
  console.log(sentDataPortfolio);
  let dataPortfolio = fn.portfolioData(sentDataPortfolio);
  res.json({
    htmlportfolio: dataPortfolio.htmlkey,
    cssportfolio: dataPortfolio.csskey,
  });
});

const port = process.env.PORT || 5678;

app.listen(port, () => {
  console.log("server running on port: ", port);
});
