const express = require("express")
const  { signin, signup, deleteUser, updateUser, getAllUsers } = require("../controllers/auth_control.js")
const Auth = require('../models/auth_model.js');
const router = express.Router()

router.post("/signup", signup)
router.post("/signin", signin)
router.put('/update/:id', updateUser);
router.delete('/delete/:username', deleteUser);
router.get('/user/all', getAllUsers);

module.exports = router