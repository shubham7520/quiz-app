import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import "./Quiz.css";

const ScoreCompo = ({ score, total }) => {
    const [message, setMessage] = useState("")
    if (localStorage.getItem("score")) { localStorage.setItem("score", score); }


    const handle = () => {
        localStorage.removeItem("user");

    }
    useEffect(() => {
        if (score > 8) setMessage("Awesome !")
        else if (score > 5 && score <= 8) setMessage("Congretulations !")
        else setMessage("Done !")
    }, [score])

    return (
        <div className='score-container'>
            <h2>{message}</h2>
            <h1>Your score is {localStorage.getItem("score")} out of {total}</h1>
            <Link to="/login">
                <button className='ok-btn' onClick={handle}>OK</button>
            </Link>
        </div>
    )
}

export default ScoreCompo;