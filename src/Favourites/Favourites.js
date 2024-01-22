import React from "react";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";



const Favourites = ({user,onLogout}) =>{
    return(
        <>
        <NavBar user={user} onLogout={onLogout}/>
        <div className="">
             <h1>This is the Favourites Page</h1>
        </div>
        <Footer/>
        </>
    )
}
export default Favourites;