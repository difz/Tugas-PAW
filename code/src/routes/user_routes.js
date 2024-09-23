const UserRouter = require('express').Router();

const {createUser, updateUser, deleteUser, getAllUsers} = require('../controllers/user_control');

UserRouter.post('/create', createUser);
UserRouter.put('/update/:id', updateUser);
UserRouter.delete('/delete/:id', deleteUser);
UserRouter.get('/all', getAllUsers);

module.exports = UserRouter;  