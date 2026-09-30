const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const morgan = require("morgan");
require("dotenv").config();

const app = express();
const SECRET_KEY = process.env.SECRET_KEY || 3000;

app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(morgan("combined"));

app.get("/health", (req, res) => {
  res.json({
    status: "ok",
  });
});

app.get("/api/hello", (req, res) => {
  res.json({
    message: "Hello, world, running first ci/cd pipeline!",
  });
});

app.get("/api/key", (req, res) => {
  res.json({
    message: `Your Secret Key: ${SECRET_KEY}`,
  });
});

app.use((req, res) => {
  res.status(404).json({
    error: "Not found",
  });
});

module.exports = app;
