const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('jdm_cars', 'root', 'example', {
  host: 'db',
  dialect: 'mysql'
});

const Car = sequelize.define('Car', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  manufacturer: {
    type: DataTypes.STRING,
    allowNull: false
  },
  year: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  image_url: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'cars',
  timestamps: false
});

module.exports = Car;