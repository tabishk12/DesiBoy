import React, { useState } from 'react';
import '../App.css'; // Import the CSS file
import { FaCalendarAlt, FaUser, FaClock } from 'react-icons/fa'; // Import icons

function BookingPage() {
  const [name, setName] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [message, setMessage] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Example handling booking submission
    setMessage('Your booking has been submitted successfully!');
    
    // Clear form
    setName('');
    setDate('');
    setTime('');
  };
  
  return (
    <div className="booking-page">
      <h1>Book Your Appointment</h1>
      <form className="booking-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label><FaUser /> Name</label>
          <input 
            type="text" 
            placeholder="Enter your name" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label><FaCalendarAlt /> Date</label>
          <input 
            type="date" 
            value={date} 
            onChange={(e) => setDate(e.target.value)} 
            required 
          />
        </div>
        <div className="form-group">
          <label><FaClock /> Time</label>
          <input 
            type="time" 
            value={time} 
            onChange={(e) => setTime(e.target.value)} 
            required 
          />
        </div>
        <button type="submit">Book Now</button>
      </form>
      
      {message && <p className="success-message">{message}</p>}
    </div>
  );
}

export default BookingPage;
