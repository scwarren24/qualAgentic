const router = require("express").Router();

router.get("/users", async (req, res) => {
  res.json([]);
});

module.exports = router;
