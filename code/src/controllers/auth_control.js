const Auth = require("../models/auth_model"); 
const bcrypt = require('bcrypt');


const signin = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Cari user berdasarkan username
        const user = await User.findOne({ username });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Bandingkan password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        res.status(200).json({ message: 'Login successful' });
    } catch (error) {
        res.status(500).json({ message: 'Error during login', error });
    }
};

const signup = async (req, res) => {
    const { username, password } = req.body;
    try {
        // Cek apakah username sudah digunakan
        const existingUser = await User.findOne({ username });
        if (existingUser) {
            return res.status(400).json({ message: 'Username already exists' });
        }

        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Buat user baru
        const newUser = new User({ username, password: hashedPassword });
        await newUser.save();

        res.status(201).json({ message: 'User created successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error creating user', error });
    }
};

module.exports = {
    signin,
    signup,
};

// app.post('/login', async (req, res) => 
// {
//     const { username, password } = req.body;
//   try {
//     // Find user by username
//     const user = await User.findOne({ username });
    
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
  
//     // Compare the entered password with the stored hashed password
//     const isMatch = await bcrypt.compare(password, user.password);
  
//     if (!isMatch) {
//       return res.status(400).json({ message: 'Invalid password' });
//     }
  
//     // If the username and password match
//     res.status(200).json({ message: 'Login successful', user });
//    } catch (error) {
//     res.status(400).send(error);
// }
//   });