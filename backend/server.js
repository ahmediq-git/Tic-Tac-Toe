require('dotenv').config(); //for the dotenv
const express = require('express');
const gameRoutes = require('./routes/gameRoutes'); 
const userRoutes = require('./routes/userRoutes'); 
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware

const sequelize = require('./config');

const PORT = process.env.PORT || 5000;

const app = express();
app.use(bodyParser.urlencoded({ extended: false })); //in order to send request on postman under x-www-form-urlencoded

// middleware
app.use(express.json()); 

// order of cors is very important
app.use(cors({
  // change * once fixed
    origin: '*', // Replace with your frontend server's URL
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Enable sending cookies with requests if needed
}));

app.use((req,res, next)=>{
    console.log(req.path, req.method);
    next(); //next is a function that will run the next middleware
})

app.use('/api/games',gameRoutes);
app.use('/api/users', userRoutes);
app.use('/api/leaderboard', leaderboardRoutes);




sequelize.sync() // Sync the database
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Database connection error:', err);
  });
