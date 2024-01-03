// Home.js

import React, { useState } from 'react';
import NavBar from '../NavBar/NavBar';

const Home = ({ user, onLogout }) => {
  const [data, setData] = useState({
    title: 'Home Page',
    content: 'This is the Home page content.',
  });

  const handleContentUpdate = () => {
    setData({
      ...data,
      content: 'Updated content for the Home page.',
    });
  };

  return (
    <div>
      <NavBar user={user} onLogout={onLogout} />
      <h2>{data.title}</h2>
      <p>{data.content}</p>
      <button onClick={handleContentUpdate}>Update Content</button>
    </div>
  );
}

export default Home;
