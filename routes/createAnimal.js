const router = require("express").Router();
const Animal = require("../models/Animal");
router.post("/", async (req, res) => {
  const { name, type } = req.body;
  let animal = new Animal({ name, type });
  animal = await animal.save();
  res.status(200).json({ animal });
});
module.exports = router;
