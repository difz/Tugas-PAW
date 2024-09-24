const express = require("express")
const  { signin, signout, signup } = require("../controllers/auth_control.js")
const Auth = require('../models/auth_model.js');
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)


module.exports = router