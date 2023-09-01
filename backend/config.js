const Sequelize = require('sequelize');

const DB_NAME =  'GameXO';
const DB_USER =  'root';
const DB_PASSWORD =  'root1234';
const DB_HOST = 'localhost'; // Change this to your database host if it's not local
const DB_PORT = 3306; // Change this to your database port (usually 3306 for MySQL)

// Create a new Sequelize instance
const sequelize = new Sequelize(DB_NAME, DB_USER, DB_PASSWORD, {
  host: DB_HOST,
  port: DB_PORT,
  dialect: 'mysql', // Specify the MySQL dialect
  logging: false, // Disable logging for production, enable for debugging
});

// Test the database connection
sequelize
  .authenticate()
  .then(() => {
    console.log('Database connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

module.exports = sequelize;
