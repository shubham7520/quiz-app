import React from 'react'
import "./Quiz.css";

const ScoreCompo = ({ score, total }) => {
    return (
        <div className='score-container'>
            <h2>Your score is {score} out of {total}</h2>
        </div>
    )
}

export default ScoreCompo;