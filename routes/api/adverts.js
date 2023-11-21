const express = require("express");

const {
  getAdvertsSearch,
  getAllAdverts,
} = require("../../controllers/adverts");

const router = express.Router();

router.get("/allAdverts", getAllAdverts);

router.get("/adverts", getAdvertsSearch);

module.exports = router;
