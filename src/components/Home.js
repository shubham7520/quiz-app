import React, { useEffect, useState } from 'react'
import Quiz from './Quiz';
import Image from "../assets/image3.jpg";
import { useNavigate } from 'react-router-dom';
import ScoreCompo from './ScoreCompo';
import Questions from './Questions';


const Home = () => {
    const [score, setScore] = useState(localStorage.getItem("score") ? localStorage.getItem("score") : 0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const navigate = useNavigate();
    let scoreData = localStorage.getItem('score');


    useEffect(() => {
        if (!localStorage.getItem("user")) {
            navigate("/login")
        }

    }, [navigate])

    return (
        <div style={{ display: "flex", justifyContent: "center", height: "100vh", backgroundImage: `url(${Image})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}>
            {
                scoreData ? < ScoreCompo score={score} total={Questions.length} /> : <Quiz setScore={setScore} currentQuestion={currentQuestion} setCurrentQuestion={setCurrentQuestion} score={score} />
            }

        </div>
    )
}

export default Home;