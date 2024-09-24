const User = require("../models/auth_model"); 
const bcrypt = require('bcrypt');

const signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        console.log("Received login request for:", username);

        // Find user by username
        const user = await User.findOne({ username });
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
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create a new user
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        console.error("Signup error:", error);
        res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

module.exports = {
    signin,
    signup
};