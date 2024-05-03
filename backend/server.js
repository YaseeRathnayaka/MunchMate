// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MainsData = require('./models/mains');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/KFC-original')

app.get('/getMains', (req, res) => {
  MainsData.find()
  .then(mains => res.json(mains))
  .catch(err => res.json(err))

 })

app.listen(3001, () => {
  console.log('server is running');
})


