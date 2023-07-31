
import { useState } from "react";
import {PostUser} from "./api.js"


export default function Signup(){

    const [signup, setSignup] = useState({
        name: "",
        email: "",
        password: "",
        confirm_password: ""
    })

    async function HandleSubmit(e) {
        e.preventDefault();
        const {name, email, password} = signup;
        const new_user = await PostUser(name, email, password);
        console.log(signup);
        setSignup({
            name: "",
            email: "",
            password: "",
            confirm_password: "" 
        }); 
    }

    return(
        <div>
        <div className="form-frame">
        <h2>Create your account</h2>
        <form className="form" onSubmit={HandleSubmit}>
            <label>Name</label>
            <input name="name" type="text" placeholder="Enter your name" value={signup.name} onChange={(e) => setSignup({...signup, [e.target.name]: e.target.value})}/>
            <label>Email</label>
            <input name="email" type="email" placeholder="Enter your email" value={signup.email} onChange={(e) => setSignup({...signup, [e.target.name]: e.target.value})}/>
            <label>Password</label>
            <input name="password" type="password" placeholder="Enter your password" value={signup.password} onChange={(e) => setSignup({...signup, [e.target.name]: e.target.value})}/>
            <label>Confirm password</label>
            <input name="confirm_password" type="password" placeholder="Re-enter your password" pattern={signup.password} value={signup.confirm_password} onChange={(e) => setSignup({...signup, [e.target.name]: e.target.value})}/>
            <button className="signup-btn" type="submit">Sign up</button>
        </form>
        </div>
        
        </div>
    );
}