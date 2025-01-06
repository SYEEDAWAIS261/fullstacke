import bcrypt from 'bcryptjs';  // Import bcrypt for password hashing
import User from '../models/SignupSchema.js';  // Import User Schema
import Login from '../models/LoginSchema.js';  // Import Login Schema
import jwt from "jsonwebtoken";

// Register route (register new users)
export const registerUser = async (req, res) => {
  const { firstName, lastName, email, password, confirmPassword } = req.body;

  // Check if all required fields are provided
  if (!firstName || !lastName || !email || !password || !confirmPassword) {
    return res.status(400).json({ message: 'Please provide firstName, lastName, email, password, and confirmPassword.' });
  }

  // Check if the passwords match
  if (password !== confirmPassword) {
    return res.status(400).json({ message: 'Passwords do not match' });
  }

  try {
    // Check if the user already exists in the User schema
    const userExists = await User.findOne({ email });
    if (userExists) return res.status(400).json({ message: 'User already exists' });

    // Hash the password before saving to Login schema
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance in the User schema
    const newUser = new User({
      firstName,
      lastName,
      email,
      password,
      confirmPassword
    });

    // Save the new user to the User schema
    await newUser.save();

    // Create a new login instance in the Login schema (store email and hashed password)
    const newLogin = new Login({
      email,
      password: hashedPassword,  // Store hashed password in the Login schema
    });

    // Save the new login credentials
    await newLogin.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Login route (login existing users)
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    // Check if login credentials exist in Login schema
    const userLogin = await Login.findOne({ email });
    if (!userLogin) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // Compare the provided password with the hashed password in the Login schema
    const isMatch = await bcrypt.compare(password, userLogin.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Incorrect password",
      });
    }

    // If password is correct, retrieve the user data from User schema
    const user = await User.findOne({ email });

    // Generate a JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);
    console.log(token);

    return res.json({
      success: true,
      message: "Login successful",
      data: {
        user: {
          id: user._id,
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
        },
        token,
      },
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to login",
      error: error.message,
    });
  }
};

// Update user route (update user details)
export const updateUser = async (req, res) => {
  const { firstName, lastName, email, password } = req.body;

  // Check if at least one field is provided
  if (!firstName && !lastName && !email && !password) {
    return res.status(400).json({ message: 'Please provide at least one field to update (firstName, lastName, email, or password).' });
  }

  try {
    const user = await User.findById(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    // Update user fields if provided
    if (firstName) user.firstName = firstName;
    if (lastName) user.lastName = lastName;
    if (email) user.email = email;
    if (password) {
      const salt = await bcrypt.genSalt(10);
      user.password = await bcrypt.hash(password, salt);
    }

    await user.save();
    res.status(200).json({ message: 'User updated successfully' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};

// Delete user route
export const deleteUser = async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    res.status(200).json({ message: 'User deleted successfully' });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Server error' });
  }
};
