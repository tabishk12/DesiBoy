const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors()); // Enable cross-origin requests
app.use(bodyParser.json()); // Parse JSON data from incoming requests

// MongoDB connection
const uri = 'mongodb+srv://tabishk655:yKDWqcReVkbiIfwu@cluster0.sso1v.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

// Define a schema for storing reviews
const reviewSchema = new mongoose.Schema({
  name: { type: String, required: true },
  rating: { type: Number, required: true },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now }
});

// Create a Review model
const Review = mongoose.model('Review', reviewSchema);

// API endpoint to store reviews
app.post('/api/reviews', (req, res) => {
  const { name, rating, comment } = req.body;
  
  // Validate input
  if (!name || !rating || !comment) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Create a new review instance
  const newReview = new Review({ name, rating, comment });

  // Save the review to the database
  newReview.save()
    .then(review => res.status(200).json({ message: 'Review stored successfully!', review }))
    .catch(err => res.status(400).json({ error: err.message }));
});

// API endpoint to get all reviews
app.get('/api/reviews', (req, res) => {
  Review.find()
    .then(reviews => res.status(200).json(reviews))
    .catch(err => res.status(400).json({ error: err.message }));
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
