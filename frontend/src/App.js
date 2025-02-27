import React, { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [cars, setCars] = useState([]);
  const [error, setError] = useState(null);
  const [form, setForm] = useState({ name: '', manufacturer: '', year: '', image_url: '' });
  const [editingCar, setEditingCar] = useState(null);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    fetchCars();
  }, []);

  const fetchCars = async () => {
    try {
      const response = await fetch('http://backend:5000/cars');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setCars(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(`http://backend:5000/cars${editingCar ? `/${editingCar}` : ''}`, {
        method: editingCar ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      setForm({ name: '', manufacturer: '', year: '', image_url: '' });
      setEditingCar(null);
      setIsFormVisible(false); // Hide the form after submission
      fetchCars();
    } catch (error) {
      setError(error.message);
    }
  };

  const handleEdit = (car) => {
    setForm(car);
    setEditingCar(car.id);
    setIsFormVisible(true); // Show the form when editing
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(`http://backend:5000/cars/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      fetchCars();
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleFormVisibility = () => {
    setIsFormVisible(!isFormVisible);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>JDM Cars</h1>
      </header>
      {error && <p>Error: {error}</p>}
      <button onClick={toggleFormVisibility} className="toggle-form-button">
        {isFormVisible ? 'Hide Form' : 'Show Form'}
      </button>
      {isFormVisible && (
        <form onSubmit={handleSubmit} className="car-form">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="manufacturer"
            placeholder="Manufacturer"
            value={form.manufacturer}
            onChange={handleInputChange}
            required
          />
          <input
            type="number"
            name="year"
            placeholder="Year"
            value={form.year}
            onChange={handleInputChange}
            required
          />
          <input
            type="text"
            name="image_url"
            placeholder="Image URL"
            value={form.image_url}
            onChange={handleInputChange}
            required
          />
          <button type="submit">{editingCar ? 'Update' : 'Add'} Car</button>
        </form>
      )}
      <ul className="car-list">
        {cars.map((car) => (
          <li key={car.id} className="car-item">
            <h2>{car.name}</h2>
            <p>Manufacturer: {car.manufacturer}</p>
            <p>Year: {car.year}</p>
            <img src={car.image_url} alt={car.name} className="car-image" />
            <button onClick={() => handleEdit(car)}>Edit</button>
            <button onClick={() => handleDelete(car.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;