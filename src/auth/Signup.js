import React, { useState, useEffect } from 'react'
import "./auth.css";
import { Link, useNavigate } from 'react-router-dom';


const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate('');

    const handleClick = () => {
        const user = {
            "name": name,
            "email": email,
            "password": password
        }
        localStorage.setItem("userKey", JSON.stringify(user));
        localStorage.setItem("user", email);
        navigate('/home');
    }
    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate("/home")
        }
    }, [navigate])
    return (
        <div className='signup-page'>
            <div className='signup-container'>
                <h1 className='signup-heading'>Registration</h1>
                <div className='signup-field'>
                    <input type="text" placeholder='Enter Name' onChange={(e) => { setName(e.target.value) }} value={name} required />
                    <input type="email" placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} value={email} required />
                    <input type="password" placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} value={password} required />
                    <button onClick={handleClick}>Register</button>
                </div>
                <div className='already'><p>Already registered? <Link to="/login" className='already-link'><b>Login.</b></Link></p></div>

            </div>
        </div>
    )
}

export default Signup;