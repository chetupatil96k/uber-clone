const dotenv = require('dotenv');
dotenv.config();

const cors = require('cors');
const express = require('express');
const cookieParser = require('cookie-parser');

const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.route');
const captainRoutes = require('./routes/captain.route');

const app = express();

// Connect DB
connectToDb();

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser()); // ✅ fixed

app.use(cors());

// Routes
app.get('/', (req, res) => {
  res.send("hello");
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);

// Start server
// app.listen(3000, () => {
//   console.log("Server running on port 3000");
// });

module.exports = app;