import React, { useState } from 'react';
import { toast } from 'react-toastify';
import '../Books/AddBooks.css';
import AdminNavBar from '../AdminNavBar/AdminNavBar';

const AddBooks = ({ user, onLogout }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [genre, setGenre] = useState('');
  const [description, setDescription] = useState('');
  const [publicationDate, setPublicationDate] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    const { name, value, files } = e.target;

    if (name === 'title') {
      setTitle(value);
    } else if (name === 'author') {
      setAuthor(value);
    } else if (name === 'genre') {
      setGenre(value);
    } else if (name === 'description') {
      setDescription(value);
    } else if (name === 'publicationDate') {
      setPublicationDate(value);
    } else if (name === 'coverImage') {
      setSelectedFile(files[0]);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append('Title', title);
      formData.append('Author', author);
      formData.append('Genre', genre);
      formData.append('Description', description);
      formData.append('PublicationDate', publicationDate);
      formData.append('CoverImage', selectedFile);

      const response = await fetch('https://localhost:44331/api/BooksAPI/', {
        method: 'POST',
        body: formData
      });

      if (response.status === 201) {
        toast.success('Book added successfully');
      } else {
        toast.error('Failed to add the book');
      }
    } catch (error) {
      console.error('Error adding book:', error);
      toast.error('An error occurred while adding the book');
    }
  };

  return (
    <div>
      <AdminNavBar user={user} onLogout={onLogout} />
      <div className="add-books-container">
        <form className="add-books-form" onSubmit={handleSubmit}>
          <div className="add-books-box">
            <div className="add-books-inputbox">
              <label htmlFor="title">Title:</label>
              <input type="text" name="title" onChange={handleChange} value={title} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="author">Author:</label>
              <input type="text" name="author" onChange={handleChange} value={author} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="genre">Genre:</label>
              <input type="text" name="genre" onChange={handleChange} value={genre} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="description">Description:</label>
              <textarea name="description" onChange={handleChange} value={description} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="publicationDate">Publication Date:</label>
              <input type="date" name="publicationDate" onChange={handleChange} value={publicationDate} required />
            </div>
            <div className="add-books-inputbox">
              <label htmlFor="coverImage">Cover Image:</label>
              <input type="file" name="coverImage" onChange={handleChange} accept="image/*" required />
            </div>
            <div>
              <button type="submit">Add Book</button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddBooks;
