import React, {useState, useEffect} from "react";
import {BrowserRouter, Routes, Route, Link, useNavigate} from "react-router-dom";
import Signup from "./Signup";
import Login from "./Login";
import axios from "axios";
import Dashboard from "./Dashboard";


function App() {
  const navigate = useNavigate();
  const [logged_in, set_logged_in] = useState(false);
  const[user_data, set_user_data] = useState({});

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token){
      set_logged_in(true);
      Fetch_user_data(token);
    }
  }, []);

  async function Fetch_user_data(token) {
    try {
      const res = await axios.get("http://localhost:5000/user", {
        headers: { Authorization: `Bearer ${token}` },
      });
      const userData = res.data.user;
      set_user_data(userData); 
      console.log(userData);
      
      set_logged_in(true);
    }catch(error){
      console.log(error);
      set_logged_in(false);
      set_user_data({});
    }
  }

  function HandleLogout(){
    set_logged_in(false);
    localStorage.removeItem('token');
    set_user_data({});
    navigate("/");
  }

  return (
    <div>
    
      
      <nav>navigation here</nav>
      <Routes>
      
        
        
      
      
        {logged_in && <Route path="/dashboard" element={<Dashboard user_data={user_data} HandleLogout={HandleLogout}/>} />}
         
        <Route path="/" element={<div><Link to="/signup">Signup</Link><Link to="/login">Login</Link></div>}/>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login logged_in={logged_in} set_logged_in={set_logged_in} Fetch_user_data={Fetch_user_data}/>} />
       
      </Routes>
      
      
    </div>
  );
}

export default App;
