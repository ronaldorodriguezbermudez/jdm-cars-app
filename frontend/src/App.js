import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/cars')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data)) {
          setCars(data);
        } else {
          throw new Error('Data is not an array');
        }
      })
      .catch(error => {
        console.error('Error fetching cars:', error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="app">
      <h1>JDM Cars</h1>
      {error ? (
        <p>Error: {error}</p>
      ) : (
        <ul className="car-list">
          {cars.map(car => (
            <li key={car.id} className="car-item">{car.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default App;