const app = require("./app");
const mongoose = require("mongoose");

require("dotenv").config();

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST, { dbName: "db-carRental" })
  .then(() => {
    app.listen(3000, () => {
      console.log("Database connection successful");
    });
  })
  .catch((e) => {
    console.log(e.message);
    process.exit(1);
  });
