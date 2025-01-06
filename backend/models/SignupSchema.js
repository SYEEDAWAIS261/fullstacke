import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6, // Ensure the password has a minimum length
  },
  confirmPassword: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value === this.password; // Check if confirmPassword matches password
      },
      message: 'Passwords do not match.',
    },
  },
});

// Pre-save middleware to hash the password before saving
UserSchema.pre('save', async function (next) {
  if (!this.isModified('password')) return next();

  const salt = await bcrypt.genSalt(10); // Generate salt
  this.password = await bcrypt.hash(this.password, salt); // Hash the password

  // Prevent confirmPassword from being saved to the database
  this.confirmPassword = undefined;
  next();
});

const User = mongoose.model('User', UserSchema);
export default User;
