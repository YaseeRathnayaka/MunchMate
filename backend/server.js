const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3001;

app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/KFC-original', { useNewUrlParser: true, useUnifiedTopology: true });

const OrderSchema = new mongoose.Schema({
    customerName: String,
    address: String,
    paymentInfo: String,
    cart: Array,
    total: Number,
    status: { type: String, default: 'Pending' }
});

const Order = mongoose.model('Order', OrderSchema);

app.get('/orders', async (req, res) => {
    try {
        const orders = await Order.find();
        res.json(orders);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.post('/orders', async (req, res) => {
    const order = new Order({
        customerName: req.body.name,
        address: req.body.address,
        paymentInfo: req.body.paymentInfo,
        cart: req.body.cart,
        total: req.body.cart.reduce((acc, item) => acc + item.price * item.quantity, 0)
    });

    try {
        const newOrder = await order.save();
        res.status(201).json(newOrder);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

app.put('/orders/:id', async (req, res) => {
    try {
        const order = await Order.findById(req.params.id);
        if (order) {
            order.status = req.body.status;
            await order.save();
            res.json(order);
        } else {
            res.status(404).json({ message: 'Order not found' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
