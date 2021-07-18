const express = require("express");
const router = express.Router();
const refreshTokenHandler = require("./Handler/refresh-token");
/* GET users listing. */
router.post("/", refreshTokenHandler.refreshToken);

// router.post("/", usersHandler.create);
// router.delete("/:id", usersHandler.destroy);
module.exports = router;
