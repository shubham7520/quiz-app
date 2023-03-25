import React, { useEffect, useState } from 'react'
import "./auth.css";
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate('');

    const handleClick = () => {

        let userKey = localStorage.getItem("userKey");
        console.log(userKey.length);
        userKey = JSON.parse(userKey);
        console.log(userKey.length);


        userKey.forEach(element => {
            if (email === element.email && password === element.password) {
                localStorage.setItem("user", email)
                navigate('/home')
            }
        });
    }

    useEffect(() => {
        if (localStorage.getItem("user")) {
            navigate("/home")
        }
    }, [navigate])

    return (
        <div className='login-page'>
            <div className='login-container'>
                <h1 className='login-heading'>Welcome!</h1>
                <div className='login-field'>
                    <input type="email" placeholder='Enter Email' onChange={(e) => { setEmail(e.target.value) }} value={email} required />
                    <input type="password" placeholder='Enter Password' onChange={(e) => { setPassword(e.target.value) }} value={password} required />
                    <button onClick={handleClick}>Login</button>
                </div>
                <div className='already'>
                    <p>Don't have an account? <Link to="/signup" className='already-link'><b>Register.</b></Link></p>
                </div>

            </div>
        </div>
    )
}

export default Login;