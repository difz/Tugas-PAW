const Auth = require("../models/auth_model"); 

app.post('/login', async (req, res) => 
{
    const { username, password } = req.body;
  try {
    // Find user by username
    const user = await User.findOne({ username });
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
  
    // Compare the entered password with the stored hashed password
    const isMatch = await bcrypt.compare(password, user.password);
  
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid password' });
    }
  
    // If the username and password match
    res.status(200).json({ message: 'Login successful', user });
   } catch (error) {
    res.status(400).send(error);
}
  });