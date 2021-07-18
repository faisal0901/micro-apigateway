const express = require("express");
const router = express.Router();
const mediaHandler = require("./Handler/Media");
/* GET users listing. */
router.get("/", mediaHandler.getAll);
router.post("/", mediaHandler.create);
router.delete("/:id", mediaHandler.destroy);
module.exports = router;
