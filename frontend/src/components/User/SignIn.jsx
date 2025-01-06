import React, { useState } from 'react';
import { Container, Box, TextField, Button, Typography, Grid, CircularProgress } from '@mui/material';
import { useNavigate, NavLink } from 'react-router-dom'; // Import useNavigate
import signinimg from "../../assets/signupimg.jpg";

const INITIAL_STATE = {
  email: '',
  password: ''
};

const SignIn = () => {
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

    setLoading(true); // Start loading

    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData), // Sending the formData object
      });

      const data = await response.json();

      if (data.success) {
        setMessage("Login Successful!");

        // Redirect to home page after successful login
        navigate('/'); // Redirect to home page (or dashboard)

        // Reset form fields after success
        setFormData({
          email: '',
          password: ''
        });
      } else {
        setMessage(data.message || "Login Failed");
      }
    } catch (error) {
      setMessage("An error occurred while logging in.");
    }

    setLoading(false); // End loading
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} sx={{ mt: 8 }}>
        {/* Left Column (Image) */}
        <Grid item xs={12} md={6} sx={{ display: 'flex', justifyContent: 'center' }}>
          <Box
            component="img"
            src={signinimg} // Replace with your image URL
            alt="Sign In"
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
            Sign In
          </Typography>

          <Box
            component="form"
            onSubmit={handleSubmit}
            sx={{ width: '100%' }}
            autoComplete="off"
          >
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
              autoComplete="current-password"
              autoFocus
            />

            {message && <Typography color="error">{message}</Typography>} {/* Show error message if any */}

            <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              {loading ? <CircularProgress size={24} /> : 'Sign In'}
            </Button>

            <Typography variant="body2" align="center">
              Don't have an account? <NavLink to="/signup">Sign Up</NavLink>
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SignIn;
