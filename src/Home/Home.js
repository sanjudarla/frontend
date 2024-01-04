// Home.js

import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css'; // Import Home.css

const Home = ({ user, onLogout }) => {
  const [data, setData] = useState({
    title: 'Home Page',
    content: 'Loading...',
    imageUrl: 'https://example.com/placeholder-image.jpg', // Replace with actual image URL
    blogs: [], // Assuming blogs is an array of objects with title and content properties
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Replace with actual data-fetching logic
        const response = await fetch('https://api.example.com/home-content');
        const { title, content, imageUrl } = await response.json();
        setData((prevData) => ({
          ...prevData,
          title,
          content,
          imageUrl,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const fetchBlogs = async () => {
      try {
        // Replace with actual data-fetching logic for blogs
        const response = await fetch('https://api.example.com/blogs');
        const blogs = await response.json();
        setData((prevData) => ({
          ...prevData,
          blogs,
        }));
      } catch (error) {
        console.error('Error fetching blogs:', error);
      }
    };

    fetchData();
    fetchBlogs();
  }, []);

  const handleContentUpdate = async () => {
    try {
      // Replace with actual data-updating logic
      const response = await fetch('https://api.example.com/update-content', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ updatedContent: 'New content for the Home page.' }),
      });
      const updatedData = await response.json();
      setData((prevData) => ({ ...prevData, content: updatedData.content }));
    } catch (error) {
      console.error('Error updating data:', error);
    }
  };

  return (
    <div className="custom-home-container">
      <NavBar user={user} onLogout={onLogout} />
      <div className="custom-content-container">
        <section className="custom-section">
          <h2>{data.title}</h2>
          <div className="custom-image-container">
            <img src={data.imageUrl} alt="Home Page" />
          </div>
          <p>{data.content}</p>
          <button onClick={handleContentUpdate}>Update Content</button>
        </section>
        <section className="custom-blog-section">
          <h3>Latest Blogs</h3>
          <div className="custom-blog-container">
            {data.blogs.map((blog, index) => (
              <div key={index} className="custom-blog-item">
                <h4>{blog.title}</h4>
                <p>{blog.content}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
