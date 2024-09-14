import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../App.css'; // Import the updated CSS
import { FaStar } from 'react-icons/fa'; // Use react-icons for star rating display

function ReviewPage() {
  const [name, setName] = useState('');
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    // Fetch reviews when the component mounts
    axios.get('http://localhost:5000/api/reviews')
      .then(response => {
        setReviews(response.data);
      })
      .catch(error => {
        console.error('Error fetching reviews:', error);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const review = { name, rating, comment };

    axios.post('http://localhost:5000/api/reviews', review)
      .then(response => {
        setName('');
        setRating(0);
        setComment('');
        setReviews([...reviews, response.data]);
      })
      .catch(error => {
        console.error('Error submitting review:', error);
      });
  };

  return (
    <div className="review-page">
      <h1>Share Your Experience</h1>
      <form className="review-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label>Rating:</label>
          <select 
            value={rating} 
            onChange={(e) => setRating(Number(e.target.value))} 
            required
          >
            <option value="0">Select Rating</option>
            {[...Array(5)].map((_, i) => (
              <option key={i + 1} value={i + 1}>{`${i + 1} - ${["Poor", "Fair", "Good", "Very Good", "Excellent"][i]}`}</option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Comment:</label>
          <textarea 
            placeholder="Write your review..." 
            value={comment} 
            onChange={(e) => setComment(e.target.value)} 
            required
          />
        </div>
        <button type="submit">Submit Review</button>
      </form>

      <h2>Customer Reviews</h2>
      <div className="review-list">
        {reviews.map((review, index) => (
          <div key={index} className="review-card">
            <strong>{review.name}</strong> 
            <div className="rating">
              {[...Array(review.rating)].map((_, i) => (
                <FaStar key={i} color="#FFD700" />
              ))}
            </div>
            <p>{review.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ReviewPage;
