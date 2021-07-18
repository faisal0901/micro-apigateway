const express = require("express");
const router = express.Router();
const webHookHandler = require("./Handler/WebHook");

/* GET users listing. */
router.post("/", webHookHandler.webhook);

module.exports = router;
