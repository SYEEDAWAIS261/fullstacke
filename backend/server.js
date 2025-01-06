import mongoose from 'mongoose';
import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/UserRoutes.js';
import productRoutes from './routes/ProductRoutes.js';

dotenv.config();

const app = express();

// Middleware
const corsOptions = {
  origin: "http://localhost:5173", // Update to match your frontend URL
  methods: ["GET", "POST", "PUT", "DELETE"], // Include all necessary HTTP methods
  allowedHeaders: ["Content-Type", "Authorization"], // Allow necessary headers
};
app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use('/users', userRoutes); // Prefixed with `/api/users` for better route organization
app.use('/products', productRoutes); // Add Product Routes with prefix `/api/products`

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
if (!MONGO_URI) {
  console.error('Error: MongoDB URI is not defined in the .env file');
  process.exit(1);
}

mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => {
    console.log('MongoDB connected successfully');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB:', err.message);
    process.exit(1);
  });

// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
