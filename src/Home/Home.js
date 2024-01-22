// Home.js

import React, { useState, useEffect } from 'react';
import NavBar from '../NavBar/NavBar';
import './Home.css';
import sample from '../Images/sample.jpg'

const Home = () => {

    return (
        <>
            <NavBar />
            <div className='home-container'>
                <div className='custom-home-container'>
                    <h1>Welcome to the Books Heaven!!</h1>
                </div>
                <div className='most-viewd-book-container'>
                    <h2>Most Viewed</h2>
                    <div className='most-read-books'>
                        
                        <img src={sample} alt='books'></img>
                             
                       
                    </div>


                </div>
            </div>
        </>
    );
};

export default Home;
