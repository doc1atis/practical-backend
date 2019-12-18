const router = require("express").Router();
const Animal = require("../models/Animal");
router.get("/", async (req, res) => {
  const animals = await Animal.find();
  res.status(200).json({ animals });
});
module.exports = router;
