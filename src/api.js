import axios from 'axios';

export const PostUser = async (name, email, password) => {
    try {
        const res = await axios.post("http://localhost:5000/signup", {name, email, password});
        return res.data;
    } catch(err){
        console.log(err);
    }
}

export const LoginUser = async (email, password) => {
    try {
        const res = await axios.post("http://localhost:5000/login", {email, password});
        const {token} = res.data;
        localStorage.setItem("token", token);
        console.log(token);
        return res.data;
    } catch(err) {
        console.log(err);
        throw new Error("Failed to log in");
    }
}