const { Schema, model } = require("mongoose");

const { handleMongooseError } = require("../middlewares");

const advertSchema = new Schema(
  {
    year: {
      type: Number,
    },
    make: {
      type: String,
    },
    model: {
      type: String,
    },
    type: {
      type: String,
    },
    img: {
      type: String,
    },
    description: {
      type: String,
    },
    fuelConsumption: {
      type: String,
    },
    engineSize: {
      type: String,
    },
    accessories: {
      type: Array,
    },
    functionalities: {
      type: Array,
    },
    rentalPrice: {
      type: Number,
    },
    rentalCompany: {
      type: String,
    },
    address: {
      type: String,
    },
    rentalConditions: {
      type: String,
    },
    mileage: {
      type: Number,
    },
  },
  { versionKey: false, timestamps: true }
);

advertSchema.post("save", handleMongooseError);

const Advert = model("advert", advertSchema);

module.exports = { Advert };
