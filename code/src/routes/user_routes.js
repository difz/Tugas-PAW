const express = require('express');
const User = require('../models/user_model.js');
const router = express.Router();
const {createUser, updateUser, deleteUser, getAllUsers} = require('../controllers/user_control.js');

router.post('/', createUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);
router.get('/', getAllUsers);

module.exports = router;  