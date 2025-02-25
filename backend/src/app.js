const express = require('express');
const cors = require('cors');
const { Sequelize } = require('sequelize');
const carsRouter = require('./routes/cars');

const app = express();
const port = 5000;

const sequelize = new Sequelize('jdm_cars', 'root', 'example', {
  host: 'db',
  dialect: 'mysql'
});

app.use(cors()); // Enable CORS
app.use(express.json());
app.use('/cars', carsRouter);

app.listen(port, () => {
  console.log(`Backend service running on port ${port}`);
});

sequelize.authenticate()
  .then(() => {
    console.log('Database connected...');
    return sequelize.sync(); 
  })
  .catch(err => console.log('Error: ' + err));