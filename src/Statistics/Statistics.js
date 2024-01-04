import React from "react";
import NavBar from "../NavBar/NavBar";

const Statistics = ({user,onLogout}) =>{
    return(
        <>
        <NavBar user={user} onLogout={onLogout}/>
        <div>
            <h1>Statistics</h1>
        </div>
        </>
    )
}
export default Statistics;