import React from "react";
import NavBar from "../NavBar/NavBar";


const Reviews = ({user ,onLogout}) => {
    return(
        <>
        <NavBar user={user} onLogout={onLogout} />
        <div>
            <h1>Reviews</h1>
        </div>
        </>
    )
}
export default Reviews