const express = require("express");
const router = express.Router();
const courseHandler = require("./Handler/Courses");
const can = require("../middleware/permision");
const verifyToken = require("../middleware/verifyToken");
/* GET users listing. */
router.get("/:id", courseHandler.get);
router.get("/", courseHandler.getAll);
router.post("/", verifyToken, can("admin"), courseHandler.create);
router.put("/:id", verifyToken, can("admin"), courseHandler.update);
router.delete("/:id", verifyToken, can("admin"), courseHandler.destroy);

module.exports = router;
