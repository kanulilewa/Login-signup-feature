import { useState, useEffect } from "react";
import { LoginUser } from "./api";
import { useNavigate } from "react-router-dom";


export default function Login({logged_in, set_logged_in}){
    const navigate = useNavigate();
    const [login, setLogin] = useState({
        
        email: "",
        password: "",
        
    })

    async function HandleSubmit(e) {
        e.preventDefault();
        const {email, password} = login;
        const logged_user = await LoginUser(email, password);
        set_logged_in(true);
        
        setLogin({
            
            email: "",
            password: "",
             
        }); 
        navigate("/dashboard");
    }

    return(
        <div>
        <div className="form-frame">
        <h2>Log in to your account</h2>
        <form className="form" onSubmit={HandleSubmit}>
            
            <label>Email</label>
            <input name="email" type="email" placeholder="Enter your email" value={login.email} onChange={(e) => setLogin({...login, [e.target.name]: e.target.value})}/>
            <label>Password</label>
            <input name="password" type="password" placeholder="Enter your password" value={login.password} onChange={(e) => setLogin({...login, [e.target.name]: e.target.value})}/>
            
            <button className="signup-btn" type="submit">Log in</button>
        </form>
        </div>
        
        </div>
    );
}