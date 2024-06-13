import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './AdminPanel.css';

const AdminPanel = () => {
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const fetchOrders = async () => {
            try {
                const response = await axios.get('http://localhost:3001/orders');
                setOrders(response.data);
            } catch (err) {
                console.log(err);
            }
        };

        fetchOrders();
    }, []);

    const updateOrderStatus = async (orderId, status) => {
        try {
            await axios.put(`http://localhost:3001/orders/${orderId}`, { status });
            setOrders(orders.map(order => order.id === orderId ? { ...order, status } : order));
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className='admin-panel-container'>
            <h2>Admin Panel</h2>
            <table className='orders-table'>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {orders.map(order => (
                        <tr key={order.id}>
                            <td>{order.id}</td>
                            <td>{order.customerName}</td>
                            <td>{order.address}</td>
                            <td>{order.total}</td>
                            <td>{order.status}</td>
                            <td>
                                <button onClick={() => updateOrderStatus(order.id, 'In Progress')}>In Progress</button>
                                <button onClick={() => updateOrderStatus(order.id, 'Completed')}>Completed</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AdminPanel;
