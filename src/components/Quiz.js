import React from 'react'
import "./Quiz.css";
import Questions from './Questions';
import { useNavigate } from 'react-router-dom';

const Quiz = ({ setScore, score, currentQuestion, setCurrentQuestion }) => {
    const navigate = useNavigate();


    const handelClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < Questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            if (!localStorage.getItem("score")) { localStorage.setItem("score", score); }
            navigate("/home")
        }
    }
    const skipQuestion = () => {
        if (currentQuestion + 1 < Questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            if (!localStorage.getItem("score")) { localStorage.setItem("score", score); }
            navigate("/home")

        }
    }

    return (
        <div className='quiz-page' >

            <div className='quiz-container'>
                <div className='ques-num'>
                    <h2>Quiz</h2>
                    <p>Question: {currentQuestion + 1}/{Questions.length}</p>

                </div>
            </div>
            <div className='question-container'>
                <div className='question'>
                    {Questions[currentQuestion].Question}
                </div>
                <div className='ques-ans'>
                    {Questions[currentQuestion].AnswerText.map((Ans, index) => {
                        return <button key={index} onClick={() => handelClick(Ans.isCorrect)}>{Ans.Answer}</button>
                    })}
                </div>
                <div className='skip-btn'>
                    <button onClick={skipQuestion}>skip</button>
                </div>
            </div>
        </div>


    )
}

export default Quiz