require("../models/database");
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const jwtSecret = process.env.JWT_SECRET;
const User = require('../models/User');

const signup = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Check if username already exists
    const existingUser = await User.findOne({ username });
    if (existingUser) {
      return res.status(409).json({ message: 'Username already exists.' });
    }

    // Hash the password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Create new user
    const newUser = new User({
      username,
      password: hashedPassword,
    });
    await newUser.save();

    // Generate token
    const token = jwt.sign({ id: newUser._id, username: newUser.username }, jwtSecret, { expiresIn: '2h' });

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to create user.' });
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Find user by username
    const user = await User.findOne({ username });

    // Check if user exists and compare passwords
    if (!user || !bcrypt.compareSync(password, user.password)) {
      return res.status(401).json({ message: 'Invalid username or password.' });
    }

    // Generate token
    const token = jwt.sign({ id: user._id, username: user.username }, jwtSecret, { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Failed to authenticate user.' });
  }
};

module.exports = {
  signup,
  login,
};
