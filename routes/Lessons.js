const express = require("express");
const router = express.Router();
const lessonsHandler = require("./Handler/Lessons");

/* GET users listing. */

router.post("/", lessonsHandler.create);
router.get("/", lessonsHandler.getAll);
router.put("/:id", lessonsHandler.update);
router.delete("/:id", lessonsHandler.destroy);
router.get("/:id", lessonsHandler.get);
module.exports = router;
