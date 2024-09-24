const User = require("../models/user_model");

const createUser = async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save();
        res.status(201).send(newUser);
    } catch (error) {
        res.status(400).send(error);
    }
}

const updateUser = async (req, res) => {
    try {
        await User.findByIdAndUpdate(req.params.id, req.body);

    }
    catch (error) {
        res.status(400).send(error);
    }
}
const deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.query.username);
        res.status(204).json({
            message: "User Successfully Deleted"
        }); 
    } catch (error) {
    res.status(500).send(error);
  }
}

const getAllUsers = async (req, res) => {
    try {
        // Filtering berdasarkan username
        const filter = {};
        if (req.query.username) {
            filter.username = req.query.username;
        }

        // Sorting berdasarkan username atau createdAt
        let sort = {};
        if (req.query.sortBy) {
            const order = req.query.order === 'desc' ? -1 : 1;
            sort[req.query.sortBy] = order;
        }

        const users = await User.find(filter).sort(sort);
        res.status(200).send(users);
    } catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    createUser,
    updateUser,
    deleteUser,
    getAllUsers,
};