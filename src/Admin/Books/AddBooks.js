import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Books/AddBooks.css';
import NavBar from '../../NavBar/NavBar';

const AddBooks = ({ user, onLogout }) => {
  const [bookData, setBookData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    publicationDate: '',
    coverImage: null, // Store the file object, not just the URL
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setBookData((prevData) => ({
      ...prevData,
      [name]: name === 'coverImage' ? files[0] : value, // Corrected key to 'coverImage'
    }));
  };

  const uploadToCloudinary = async () => {
    const formData = new FormData();
    formData.append('file', bookData.coverImage);
    formData.append('upload_preset', 'hsih7boi'); // Replace with your Cloudinary upload preset
  
    const cloudinaryURL = 'https://api.cloudinary.com/v1_1/dkp69e3ql/image/upload';
  
    // Define the desired width and height for the uploaded image
    const desiredWidth = 180;
    const desiredHeight = 280;
  
    // Add the transformation parameters to the Cloudinary URL
    const urlWithTransformations = `${cloudinaryURL}?width=${desiredWidth}&height=${desiredHeight}`;
  
    const response = await fetch(urlWithTransformations, {
      method: 'POST',
      body: formData,
    });
  
    const result = await response.json();
  
    if (response.ok) {
      return result.secure_url; // Cloudinary URL of the uploaded and transformed image
    } else {
      throw new Error(result.message || 'Failed to upload image to Cloudinary');
    }
  };
  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Upload the cover image to Cloudinary
      const imageUrl = await uploadToCloudinary();

      // Once uploaded, send the book data to your server
      const response = await fetch('https://localhost:44331/api/BooksAPI/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...bookData,
          coverImage: imageUrl, // Replace the coverImage property with the Cloudinary URL
        }),
      });

      if (response.ok) {
        toast.success('Book added successfully');
        setBookData({
          title: '',
          author: '',
          genre: '',
          description: '',
          publicationDate: '',
          coverImage: null,
        });
      } else {
        toast.error('Failed to add the book');
      }
    } catch (error) {
      console.error('Error adding book:', error);
      toast.error('An error occurred while adding the book');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <NavBar user={user} onLogout={onLogout} />
      <div className="add-books-container">
        <form className="add-books-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="add-books-box">
            <div className="add-books-inputbox">
              <label htmlFor="title">Title:</label>
              <input type="text" name="title" onChange={handleChange} value={bookData.title} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="author">Author:</label>
              <input type="text" name="author" onChange={handleChange} value={bookData.author} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="genre">Genre:</label>
              <select name="genre" onChange={handleChange} value={bookData.genre} required>
                <option value="" disabled>Select a genre</option>
                <option value="action">Action</option>
                <option value="fiction">Fiction</option>
                <option value="non-Fiction">Non-Fiction</option>
                <option value="fantasy">Fantasy</option>
                <option value="mystery">Mystery</option>
                <option value="romance">Romance</option>
                <option value="science-Fiction">Science Fiction</option>
                <option value="historical Fiction">Historical Fiction</option>
                <option value="thriller">Thriller</option>
                <option value="horror">Horror</option>
                <option value="cooking">Cooking</option>

                {/* Add more options as needed */}
              </select>
            </div>

            <div className="add-books-inputbox">
              <label htmlFor="description">Description:</label>
              <textarea name="description" onChange={handleChange} value={bookData.description} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="publicationDate">Publication Date:</label>
              <input type="date" name="publicationDate" onChange={handleChange} value={bookData.publicationDate} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="coverImage">Cover Image:</label>
              <input type="file" name="coverImage" onChange={handleChange} accept="image/*" required />
            </div>
            <div>
              <button type="submit" disabled={loading}>
                {loading ? 'Adding...' : 'Add Book'}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;