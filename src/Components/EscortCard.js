import React from 'react';
import img1 from '../img/pic4.png';
import { NavLink } from 'react-router-dom';
const EscortCard = ({ name, age, description, image }) => {
  return (
    <div style={styles.card}>
      <div style={styles.cardHeader}>
        <img src={img1} alt={name} style={styles.escortImage} />
        <h2 style={styles.escortName}>Desi Boy</h2>
        <p style={styles.escortAge}>Age:22</p>
      </div>
      <div style={styles.cardBody}>
        <p style={styles.escortDescription}>{description}</p>
      </div>
      <div style={styles.cardFooter}>
      < NavLink to ="/schedule" style={{textDecoration:"none"}}> <button style={styles.contactButton}>Contact</button></NavLink>
      </div>
    </div>
  );
}

const styles = {
  card: {
    backgroundColor: '#fff',
    borderRadius: '10px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    maxWidth: '400px',
    width: '100%',
    overflow: 'hidden',
    margin: '20px auto',
    fontFamily: 'Arial, sans-serif',
    border: '1px solid #ddd',
  },
  cardHeader: {
    position: 'relative',
    textAlign: 'center',
    padding: '15px',
    backgroundColor: '#f8f9fa',
  },
  escortImage: {
    width: '100%',
    height: 'auto',
    borderBottom: '2px solid #ddd',
  },
  escortName: {
    fontSize: '1.5rem',
    color: '#333',
    margin: '10px 0 5px',
  },
  escortAge: {
    fontSize: '1rem',
    color: '#666',
  },
  cardBody: {
    padding: '15px',
  },
  escortDescription: {
    fontSize: '1rem',
    color: '#333',
  },
  cardFooter: {
    textAlign: 'center',
    padding: '10px',
    backgroundColor: '#f8f9fa',
    borderTop: '1px solid #ddd',
  },
  contactButton: {
    padding: '10px 20px',
    backgroundColor: '#007bff',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
  },
};

export default EscortCard;
