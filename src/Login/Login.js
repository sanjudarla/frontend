import React, { useState } from 'react';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios';
import NavBar from '../NavBar/NavBar';

import '../Login/Login.css';

const Login = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null); // Add this line to declare the user state
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setEmail(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Use Axios to make the HTTP request
      const response = await axios.get('https://localhost:44331/api/UsersAPI/', {
        params: {
          Email: email,
          Password: password,
        },
      });

      // Check if there is at least one user in the response
      if (response.data.length > 0) {
        // Iterate through all users in the array
        const userFound = response.data.find(user => {
          return user.Email === email && user.Password === password;
        });

        if (userFound) {
          // Authentication successful
          toast.success('Login successful');
          setUser(userFound); // Update the user state
          onLogin(userFound); // Update the user state in App component
          navigate('/home');
        } else {
          toast.error('Incorrect Email or password');
        }
      } else {
        toast.error('User not found');
      }
    } catch (error) {
      console.error('Error during login:', error);
      toast.error('An error occurred during login');
    }
  };

  
  

  return (
    <div className="reg-container">
      <form className="reg-form" onSubmit={handleSubmit}>
        <h1>Login</h1>
        <div className="items-container">
          <div className="input-col-one">
            <div className="inputbox">
              <label htmlFor="email">Email: <FaEnvelope /></label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleChange}
                value={email}
                required
              />
            </div>
            <div className="inputbox">
              <label htmlFor="password">Password: <FaLock /></label>
              <input
                type="password"
                name="password"
                id="password"
                onChange={handleChange}
                value={password}
                required
              />
            </div>
            <div className="inputbox">
              <a href="/forgot-password">Forgot Password?</a>
            </div>
            <div className="inputbox">
              <a href="/registration">Create Account</a>
            </div>
          </div>
          <div className="input-col-two">
            <div>
             
              <button type="submit">
                Login
              </button>
            </div>
          </div>
        </div>
      </form>
      <div>
      {user && <NavBar user={user} onLogout={() => setUser(null)} />}
      </div>
    </div>
  );
};

export default Login;
