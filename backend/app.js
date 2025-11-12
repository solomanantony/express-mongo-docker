const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

mongoose.connect('mongodb://mongo:27017/demo', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

app.get('/', (req, res) => {
  res.send('Express + MongoDB via Docker Compose!');
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
