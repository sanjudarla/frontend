import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";


const Reviews = ({user ,onLogout}) => {
    return(
        <>
        <NavBar user={user} onLogout={onLogout} />
        <div>
            <h1>Reviews</h1>
        </div>
        <Footer/>
        </>
    )
}
export default Reviews