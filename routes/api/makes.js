const express = require("express");

const { getMakes } = require("../../controllers/makes");

const router = express.Router();

router.get("/makes", getMakes);

module.exports = router;
