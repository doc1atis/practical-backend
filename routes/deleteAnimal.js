const router = require("express").Router();
const Animal = require("../models/Animal");
router.delete("/", async (req, res) => {
  console.log(req.query);
  const { animalId } = req.query;
  let animal = await Animal.findById(animalId);
  animal = await animal.remove();
  res.status(200).json({ animal });
});
module.exports = router;
