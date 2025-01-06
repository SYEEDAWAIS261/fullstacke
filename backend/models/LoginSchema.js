import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

// Define the Login Schema
const loginSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'Password is required'],
    minlength: [6, 'Password must be at least 6 characters'], // Minimum length validation
  },
});

const Login = mongoose.model('Login', loginSchema);
export default Login;  // Export the Login model

// Use this code in your login logic, not in the schema definition
const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    // Check if login credentials exist in Login schema
    const userLogin = await Login.findOne({ email });
    if (!userLogin) {
      return res.json({
        success: false,
        message: "User not found",
      });
    }

    // Compare the provided password with the hashed password in the Login schema using await
    const isMatch = await bcrypt.compare(password, userLogin.password);
    if (!isMatch) {
      return res.json({
        success: false,
        message: "Incorrect password",
      });
    }

    // If password matches, proceed with further steps like generating JWT token or returning user data
    return res.json({
      success: true,
      message: "Login successful",
      data: { email: userLogin.email },
    });
  } catch (error) {
    return res.json({
      success: false,
      message: "Failed to login",
      error: error.message,
    });
  }
};
