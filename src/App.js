// App.js
import React, { useState } from 'react';
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
          
          <Route path="/adminnavbar" element={<AdminNavBar />} />
          <Route path="/add-books" element={<AddBooks />} />


          
          {/* <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/feedback" element={<FeedBack />} />
          <Route path="/contact" element={<Contact />} /> */}
          <Route path="/home" element={<Home />} index />
          
          <Route path="/home"element={<NavBar user={user} onLogout={handleLogout} />}/>
          <Route path="/books-list" element={<BooksList />} />
          <Route path="/authors" element={<Authors/>}/>
          <Route path="/genres" element={<Genres/>}/>
          <Route path="/favourites" element={<Favourites/>}/>
          <Route path="/reviews" element={<Reviews/>}/>
          <Route path="/statistics" element={<Statistics/>}/>

            
            
          
          
            
            
          <Route path="/login"element={<Login onLogin={handleLogin} />}/>
          <Route path="/registration" element={<Registration />} />
          <Route path="/" element={<MainPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
