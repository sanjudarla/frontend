// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './NavBar/NavBar';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ForgotPassword from './ForgotPassword/ForgotPassword';
import Login from './Login/Login';
import Contact from './NavItems/Contact';
import Home from './NavItems/Home';
import Registration from './Registration/Registration';
import Gallery from './NavItems/Gallery';
import FeedBack from './NavItems/FeedBack';
import MainPage from './MainPage/MainPage';

function App() {
  const [user, setUser] = useState(null);

  const handleLogin = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div className="App">
      <ToastContainer />
      <Router>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route
            path="/home"
            element={<NavBar user={user} onLogout={handleLogout} />}
          />
          <Route
            path="/login"
            element={<Login onLogin={handleLogin} />}
          />
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
