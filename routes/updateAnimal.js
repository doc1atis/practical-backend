const router = require("express").Router();
const Animal = require("../models/Animal");
router.get("/", async (req, res) => {
  const { newName, animalId } = req.query;
  let animal = await Animal.findById(animalId);
  animal.name = newName;
  animal = await animal.save();
  res.status(200).json({ animal });
});
module.exports = router;
