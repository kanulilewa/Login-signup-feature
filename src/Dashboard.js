import React, {useState} from "react";

export default function Dashboard({user_data, HandleLogout}){
    return(
        <div className="dashboard">
            <nav className="dashboard-nav"><button onClick={HandleLogout} className="dashboard-btn">{!user_data ? "loading" : user_data.name}</button></nav>
            <div>This user's plans will go here</div>
        </div>
    );
}