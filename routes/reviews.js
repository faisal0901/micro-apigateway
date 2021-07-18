const express = require("express");
const router = express.Router();
const reviewHandler = require("./Handler/Review");

/* GET users listing. */
router.post("/", reviewHandler.create);
router.put("/:id", reviewHandler.update);
// router.post("/", usersHandler.create);
router.delete("/:id", reviewHandler.destroy);
module.exports = router;
