import React from "react";
import NavBar from "../NavBar/NavBar";



const Favourites = ({user,onLogout}) =>{
    return(
        <>
        <NavBar user={user} onLogout={onLogout}/>
        <div className="">
             <h1>This is the Favourites Page</h1>
        </div>
        </>
    )
}
export default Favourites;