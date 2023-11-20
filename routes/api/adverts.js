const express = require("express");

const { getAdvertsSearch } = require("../../controllers/adverts");

const router = express.Router();

router.get("/adverts", getAdvertsSearch);

module.exports = router;
