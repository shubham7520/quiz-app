import React, { useState } from 'react'
import "./Quiz.css";
import ScoreCompo from './ScoreCompo';

const Quiz = () => {
    const [score, setScore] = useState(0);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);

    const Questions = [
        {
            Question: "What is the 2+3=",
            AnswerText: [
                { Answer: "5", isCorrect: true },
                { Answer: "8", isCorrect: false },
                { Answer: "50", isCorrect: false },
                { Answer: "7", isCorrect: false },
            ]
        },
        {
            Question: "What is the 2+3=",
            AnswerText: [
                { Answer: "5", isCorrect: true },
                { Answer: "8", isCorrect: false },
                { Answer: "50", isCorrect: false },
                { Answer: "7", isCorrect: false },
            ]
        },
        {
            Question: "What is the 2+3=",
            AnswerText: [
                { Answer: "5", isCorrect: true },
                { Answer: "8", isCorrect: false },
                { Answer: "50", isCorrect: false },
                { Answer: "7", isCorrect: false },
            ]
        },
        {
            Question: "What is the 2+3=",
            AnswerText: [
                { Answer: "5", isCorrect: true },
                { Answer: "8", isCorrect: false },
                { Answer: "50", isCorrect: false },
                { Answer: "7", isCorrect: false },
            ]
        },
        {
            Question: "What is the 2+3=",
            AnswerText: [
                { Answer: "5", isCorrect: true },
                { Answer: "8", isCorrect: false },
                { Answer: "50", isCorrect: false },
                { Answer: "7", isCorrect: false },
            ]
        },
    ]

    const handelClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }
        if (currentQuestion + 1 < Questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            setShowScore(true);
        }

    }

    const skipQuestion = () => {
        if (currentQuestion + 1 < Questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        }
        else {
            setShowScore(true);
        }
    }

    console.log(Questions);
    return (
        <div className='quiz-page' >
            {
                showScore ? (
                    <div><ScoreCompo score={score} total={Questions.length} /></div>

                ) :
                    (
                        <div className='quiz-container'>
                            <div className='ques-num'>
                                <h2>Quiz</h2>
                                <p>Question: {currentQuestion + 1}/{Questions.length}</p>
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

        </div>
    )
}

export default Quiz