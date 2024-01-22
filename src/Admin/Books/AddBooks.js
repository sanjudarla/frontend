import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import '../Books/AddBooks.css';
import NavBar from '../../NavBar/NavBar';

const AddBooks = ({ user, onLogout }) => {
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    description: '',
    publicationDate: '',
    coverImage: null,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: name === 'coverImage' ? files[0] : value,
    }));
  };
  console.log(formData)

  const handleAddBook = async () => {
    try {
      const response = await fetch('https://localhost:44331/api/BooksAPI/', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        toast.success('Book added successfully');
        setFormData({
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Additional validation or checks can be added here

    handleAddBook();
  };

  return (
    <div>
      <NavBar user={user} onLogout={onLogout} />
      <div className="add-books-container">
        <form className="add-books-form" onSubmit={handleSubmit} encType="multipart/form-data">
          <div className="add-books-box">
            <div className="add-books-inputbox">
              <label htmlFor="title">Title:</label>
              <input type="text" name="title" onChange={handleChange} value={formData.title} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="author">Author:</label>
              <input type="text" name="author" onChange={handleChange} value={formData.author} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="genre">Genre:</label>
              <input type="text" name="genre" onChange={handleChange} value={formData.genre} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="description">Description:</label>
              <textarea name="description" onChange={handleChange} value={formData.description} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="publicationDate">Publication Date:</label>
              <input type="date" name="publicationDate" onChange={handleChange} value={formData.publicationDate} required />
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
