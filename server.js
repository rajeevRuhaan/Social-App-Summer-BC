const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./config/db');

const app = express();

//Connect to Database
connectDB();
//Init Middlewares
app.use(express.json({ extended: false })); //body parser
app.use(cors()); //cors

const PORT = process.env.PORT || 5000;

//Define Routes
app.use('/api/users', require('./routes/api/userRoutes'));
app.use('/api/auth', require('./routes/api/authRoutes'));
app.use('/api/profile', require('./routes/api/profileRoutes'));
app.use('/api/posts', require('./routes/api/postRoutes'));

//production mode vs development mode
if (process.env.NODE_ENV === 'production') {
  //serve up client/build
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

//Start the server

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
