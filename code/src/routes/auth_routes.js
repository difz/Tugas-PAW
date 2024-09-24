const express = require("express");
const Auth = require("../models/auth_model.js");
const router = express.Router();
const { signup, signin, signout } = require("../controllers/auth_control.js");


router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;    