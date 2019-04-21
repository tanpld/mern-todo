const express = require('express');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/mern-todo', { useNewUrlParser: true });
const app = express();

app.listen(5555, () => console.log('Server is running on port 5555'));
