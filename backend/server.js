// server.js
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => console.log('Connected to MongoDB'));

// Define schema and model for your data
const itemSchema = new mongoose.Schema({
    name: String,
    category: String,
    price: Number
});

const Item = mongoose.model('Item', itemSchema);

// Routes
app.get('/api/items', async (req, res) => {
    try {
        const items = await Item.find();
        res.json(items);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// Start server
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// Create a new item
app.post('/api/items', async (req, res) => {
  const item = new Item({
      name: req.body.name,
      category: req.body.category,
      price: req.body.price
  });

  try {
      const newItem = await item.save();
      res.status(201).json(newItem);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// Update an existing item
app.put('/api/items/:id', async (req, res) => {
  try {
      const updatedItem = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true });
      res.json(updatedItem);
  } catch (err) {
      res.status(400).json({ message: err.message });
  }
});

// Delete an item
app.delete('/api/items/:id', async (req, res) => {
  try {
      await Item.findByIdAndDelete(req.params.id);
      res.json({ message: 'Item deleted' });
  } catch (err) {
      res.status(500).json({ message: err.message });
  }
});
