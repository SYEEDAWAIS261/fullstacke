import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Grid, CircularProgress } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate
import signupimg from "../../assets/signupimg.jpg";

const INITIAL_STATE = {
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  confirmPassword: ''
};

const SignUp = () => {
  const [formData, setFormData] = useState(INITIAL_STATE);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Initialize navigate

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (formData.password !== formData.confirmPassword) {
      setMessage('Passwords do not match');
      return;
    }
  
    setLoading(true); // Start loading
  
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Sending the entire formData object
      });
  
      const data = await response.json();
  
      if (data.success) {
        setMessage("Sign Up Successful!");
        
        // Redirect to home page after successful signup
        navigate('/'); // Redirect to home page
  
        // Manually resetting each field
        setFormData({
          firstName: '',
          lastName: '',
          email: '',
          password: '',
          confirmPassword: ''
        });
  
      } else {
        setMessage(data.message || "Sign Up Failed");
      }
    } catch (error) {
      setMessage("An error occurred while signing up.");
    }
  
    setLoading(false); // End loading
    console.log('Form submitted:', formData);
    setFormData({ ...formData, firstName: '', lastName: '', email: '', password: '', confirmPassword: '' });
  };
  
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ mt: 8 }}>
        {/* Left Column (Image) */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={signupimg} // Replace with your image URL
            alt="Sign Up"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>

        {/* Right Column (Form) */}
        <Grid
          className="form"
          item
          xs={12}
          md={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            p: '2rem',
          }}
        >
          <Typography component="h1" variant="h5" sx={{ mb: 3 }}>
            Sign Up
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '100%' }}
            autoComplete="off"
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="firstName"
                  label="First Name"
                  value={formData.firstName}
                  onChange={handleChange}
                  autoComplete="off"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  name="lastName"
                  label="Last Name"
                  value={formData.lastName}
                  onChange={handleChange}
                  autoComplete="off"
                  autoFocus
                />
              </Grid>
            </Grid>

            <TextField
              margin="normal"
              required
              fullWidth
              name="email"
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={handleChange}
              autoComplete="off"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              autoComplete="new-password"
              autoFocus
            />

            <TextField
              margin="normal"
              required
              fullWidth
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              autoComplete="new-password"
              autoFocus
            />

            {message && <Typography color="error">{message}</Typography>} {/* Show error message if any */}

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {loading ? <CircularProgress size={24} /> : 'Sign Up'}
            </Button>

            <NavLink to="/signin">
              <p>Already have an account? Sign in!</p>
            </NavLink>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignUp;
