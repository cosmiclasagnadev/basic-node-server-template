const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv/config'); // Where our config and environment vars are located


// Some Middleware
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Import Routes
const postRoutes = require('./routers/posts');
app.use('/posts', postRoutes);

//  ROUTES
app.get('/', (req, res) =>  {
    res.send('Home Directory')
})




// Connect to MongoDB Database
mongoose.connect(
    process.env.DB_CONNECTION_STRING,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => {
    console.log('Connected to Database!');
});

console.log('Listening on port 5000!');
app.listen(5000);