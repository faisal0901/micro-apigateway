const express = require("express");
const router = express.Router();
const courseHandler = require("./Handler/ImageCourses");
const verifyToken = require("../middleware/verifyToken");

router.post("/", courseHandler.create);
router.delete("/:id", courseHandler.destroy);

module.exports = router;
