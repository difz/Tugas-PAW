const UserRouter = require('express').Router();

const {createUser, updateUser, deleteUser} = require('../controllers/user_control');

UserRouter.post('/create', createUser);
UserRouter.put('/update/:id', updateUser);
UserRouter.delete('/delete/:id', deleteUser);

module.exports = UserRouter;    