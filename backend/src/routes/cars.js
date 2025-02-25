const express = require('express');
const router = express.Router();
const Car = require('../models/cars');

// Get all cars
router.get('/', async (req, res) => {
  try {
    const cars = await Car.findAll();
    res.json(cars);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a car by ID
router.get('/:id', async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (car == null) {
      return res.status(404).json({ message: 'Car not found' });
    }
    res.json(car);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new car
router.post('/', async (req, res) => {
  const { name, manufacturer, year, image_url } = req.body;
  try {
    const newCar = await Car.create({ name, manufacturer, year, image_url });
    res.status(201).json(newCar);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a car
router.put('/:id', async (req, res) => {
  const { name, manufacturer, year, image_url } = req.body;
  try {
    const car = await Car.findByPk(req.params.id);
    if (car == null) {
      return res.status(404).json({ message: 'Car not found' });
    }
    car.name = name;
    car.manufacturer = manufacturer;
    car.year = year;
    car.image_url = image_url;
    await car.save();
    res.json(car);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a car
router.delete('/:id', async (req, res) => {
  try {
    const car = await Car.findByPk(req.params.id);
    if (car == null) {
      return res.status(404).json({ message: 'Car not found' });
    }
    await car.destroy();
    res.json({ message: 'Car deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;