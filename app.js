const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const advertsRouter = require("./routes/api/adverts");
const makesRouter = require("./routes/api/makes");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api", advertsRouter);
app.use("/api", makesRouter);

app.use((_, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, _, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
