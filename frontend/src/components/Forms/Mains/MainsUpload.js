// MainUploadForm.js
import React, { useState } from 'react';
import axios from 'axios';
import '../Mains/MainsUpload.css'

const MainUploadForm = () => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [image, setImage] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('name', name);
      formData.append('description', description);
      formData.append('price', price);
      formData.append('image', image);

      await axios.post('http://localhost:3001/uploadMains', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      alert('Main data uploaded successfully!');
      // Clear the form fields
      setName('');
      setDescription('');
      setPrice('');
      setImage(null);
    } catch (error) {
      console.error('Error uploading main data:', error);
      alert('Error uploading main data. Please try again.');
    }
  };

  return (
    <div className="main-upload-form">
      <h2>Add New Main</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Price:</label>
          <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Image:</label>
          <input type="file" onChange={(e) => setImage(e.target.files[0])} accept="image/*" required />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
};

export default MainUploadForm;
