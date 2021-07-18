const express = require("express");
const router = express.Router();
const chaptersHandler = require("./Handler/Chapters");

/* GET users listing. */

router.get("/:id", chaptersHandler.get);
router.get("/", chaptersHandler.getAll);
router.post("/", chaptersHandler.create);
router.delete("/:id", chaptersHandler.destroy);
router.put("/:id", chaptersHandler.update);

module.exports = router;
