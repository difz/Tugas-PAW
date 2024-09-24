// const User = require("../models/auth_model"); 
const bcrypt = require('bcrypt');
const Auth = require("../models/auth_model");

const signin = async (req, res) => {
    
    try {
        const { username, password } = req.body;
        console.log("Received login request for:", username);

        // Find user by username
        const user = await Auth.findOne({ username });
      
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare password
        const isMatch = await bcrypt.compare(password, user.password);
        console.log("Password match:", isMatch);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
        console.error("Login error:", error);
        res.status(500).json({ message: 'Error during login', error: error.message });
    }
};

const signup = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Check if username is already used
        const existingUser = await Auth.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(200).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};


const updateUser = async (req, res) => {
    try {
        const userID = await Auth.findOne({username: req.params.username})
        if (!userID) {
            return res.status(404).json({ message: "User not found" });
        }
        await Auth.findByIdAndUpdate(userID._id, req.body);
        res.status(200).json({
            message: "update succesfully"
        }); }
    catch (error) {
        res.status(400).send(error);
    }
}
const deleteUser = async (req, res) => {
    try {
        // const userID = await Auth.findOne({ username });
        await Auth.deleteOne({username: req.params.username});
        res.status(200).json({
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
    signin,
    signup,
    getAllUsers, 
    updateUser, 
    deleteUser
};