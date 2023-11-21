const { Advert } = require("../models/adverts");
const { controllerWrapper } = require("../helpers");

const getAdvertsSearch = async (req, res) => {
  try {
    const {
      make,
      maxPrice,
      minMileage,
      maxMileage,
      page = 1,
      limit = 10,
    } = req.query;

    const baseQuery = {};

    if (make) {
      baseQuery.make = { $in: make };
    }

    if (maxPrice) {
      baseQuery.rentalPrice = {};
      if (maxPrice) baseQuery.rentalPrice.$lte = parseInt(maxPrice);
    }

    if (minMileage || maxMileage) {
      baseQuery.mileage = {};
      if (minMileage) baseQuery.mileage.$gte = parseInt(minMileage);
      if (maxMileage) baseQuery.mileage.$lte = parseInt(maxMileage);
    }

    const skip = (page - 1) * limit;

    const hits = await Advert.find(baseQuery).skip(skip).limit(limit);

    const totalHits = await Advert.count(baseQuery);
    const hasMore = skip + hits.length < (await Advert.count(baseQuery));

    res.json({ hits, totalHits, hasMore });
  } catch (error) {
    console.error("Error in searchCars:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = {
  getAdvertsSearch: controllerWrapper(getAdvertsSearch),
};
