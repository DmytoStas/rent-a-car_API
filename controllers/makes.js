const { Makes } = require("../models/makes");
const { controllerWrapper } = require("../helpers");

const getMakes = async (_, res) => {
  try {
    const result = await Makes.find();
    res.json(result);
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getMakes: controllerWrapper(getMakes),
};
