import React from 'react';
import '../App.css'; // Import the CSS file for styling

const RateCard = () => {
  return (
    <div className="rate-card">
      <header className="card-header">
        <h1>Escort Service Rate Card</h1>
      </header>
      <table className="rate-table">
        <thead>
          <tr>
            <th>Package</th>
            <th>Price</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Standard Package</td>
            <td>$200</td>
            <td>1 hour of companionship and personal attention.</td>
          </tr>
          <tr>
            <td>Deluxe Package</td>
            <td>$350</td>
            <td>2 hours of premium service with added amenities.</td>
          </tr>
          <tr>
            <td>Elite Package</td>
            <td>$500</td>
            <td>4 hours of exclusive service with personalized arrangements.</td>
          </tr>
        </tbody>
      </table>
      {/* <footer className="card-footer">
        <p>For more information or to book, please contact us at:</p>
        <p className="contact-info">Email: info@example.com | Phone: (123) 456-7890</p>
      </footer> */}
    </div>
  );
}

export default RateCard;
