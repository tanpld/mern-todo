const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const todoRoutes = require('./routes');

mongoose.connect('mongodb://localhost/mern-todo', { useNewUrlParser: true });

const app = express();

// Config middleware
app.use(bodyParser.json());

// Routes
app.use('/', todoRoutes);

app.listen(5555, () => console.log('Server is running on port 5555'));
