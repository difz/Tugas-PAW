const Auth = require("../models/auth_model");
const signup = async (req, res) => {
    try {
        const newAuth = new Auth(req.body);
        await newAuth.save();
        res.status(201).send(newAuth);
    } catch (error) {
        res.status(400).send(error);
    }
}

const signin = async (req, res) => {    
    try {
        const auth = await Auth.findOne({ username:
        req.body.username, password: req.body.password });
        if (!auth) {
            return res.status(404).send("Auth not found");
        }
        res.status(200).send(auth);
    }
    catch (error) {
        res.status(500).send(error);
    }
}

module.exports = {
    signup,
    signin,
};  