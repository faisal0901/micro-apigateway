const express = require("express");
const router = express.Router();
const usersHandler = require("./Handler/Users");
const verfiyToken = require("../middleware/verifyToken");
/* GET users listing. */
router.post("/register", usersHandler.register);
router.post("/login", usersHandler.login);
router.post("/logout", verfiyToken, usersHandler.logout);
router.put("/", verfiyToken, usersHandler.update);
router.get("/", verfiyToken, usersHandler.getUser);
// router.post("/", usersHandler.create);
// router.delete("/:id", usersHandler.destroy);
module.exports = router;
