import express from 'express';
import {registerUser, updateUser, deleteUser,loginUser } from '../controllers/Usercontroller.js';  

const router = express.Router();

// Register route (POST is fine for registration)
router.post('/register', registerUser);

// Login route (POST is fine for login)
router.post('/login', loginUser);

// Update route (Use PUT or PATCH for updating user details)
router.post('/update/:id', updateUser);  

// Delete route (Use DELETE for deleting a user)
router.post('/delete/:id', deleteUser); 



export default router;
