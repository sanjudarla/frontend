// App.js
import React, { useState,useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Login from './Login/Login';
import Contact from './NavItems/Contact';
import Home from './Home/Home';
import Registration from './Registration/Registration';
import Gallery from './NavItems/Gallery';
import FeedBack from './NavItems/FeedBack';
import MainPage from './MainPage/MainPage';
import AdminNavBar from './Admin/AdminNavBar/AdminNavBar';
import AddBooks from './Admin/Books/AddBooks';
import BooksList from './Books/BooksList';
import Authors from './Authors/Author';
import Genres from './Genres/Genres';
import Favourites from './Favourites/Favourites';
import Reviews from './Review/Review';
import Statistics from './Statistics/Statistics';
//import Profile from './Profile'; // Import your Profile component

function App() {
  const [user, setUser] = useState(null);

  // Load user data from local storage on component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleLogin = (userData) => {
    setUser(userData);
    // Save user data to local storage
    localStorage.setItem('user', JSON.stringify(userData));
  };

  const handleLogout = () => {
    // Clear user data from state and local storage
    setUser(null);
    localStorage.removeItem('user');
    window.location.href = '/';
  };

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/adminnavbar" element={<AdminNavBar />} />
          <Route path="/add-books" element={<AddBooks />} />
          <Route path="/home/*" element={<NavBar user={user} onLogout={handleLogout} />} />
          {/* Use a wildcard route to handle all nested routes under "/home" */}
          <Route path="/home" element={<Home user={user} onLogout={handleLogout} />} />
          <Route path="/books-list" element={<BooksList user={user} onLogout={handleLogout} />} />
          <Route path="/authors" element={<Authors user={user} onLogout={handleLogout} />} />
          <Route path="/genres" element={<Genres user={user} onLogout={handleLogout} />} />
          <Route path="/favourites" element={<Favourites user={user} onLogout={handleLogout} />} />
          <Route path="/reviews" element={<Reviews user={user} onLogout={handleLogout} />} />
       
          <Route path="/login" element={<Login onLogin={handleLogin} />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/feedback" element={<FeedBack />} />
          {/* Profile route nested inside the BooksList route */}
          <Route path="/books-list/profile" element={<NavBar user={user} />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
