import React from "react";
import NavBar from "../NavBar/NavBar";

const Genres = ({user ,onLogout}) =>{
    return(
        <>
        <NavBar user={user} onLogout={onLogout} />
        <div className="genre-container">
            <h1>Genres</h1>
            
        </div>

        
        </>
    )

}
export default Genres;