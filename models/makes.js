const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../middlewares");

const makesSchema = new Schema({
  makes: { type: Array },
});

makesSchema.post("save", handleMongooseError);

const Makes = model("makes", makesSchema);

module.exports = { Makes };
