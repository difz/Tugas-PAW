const User = require("../models/user_model");

exports.createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).send(newUser);
  } catch (error) {
    res.status(400).send (error);
    }
}
    
exports.updateUser = async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);

        }
     catch (error) {
        res.status(400).send(error);
    }
}
exports.deleteUser = async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).send(error);
    }
}