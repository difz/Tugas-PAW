const express = require('express');
const User = require('../models/user_model.js');
const router = express.Router();
const {createUser, updateUser, deleteUser, getAllUsers} = require('../controllers/user_control.js');

router.post('/create', createUser);
router.put('/update/:id', updateUser);
router.delete('/delete/:id', deleteUser);
router.get('/all', getAllUsers);

module.exports = router;  