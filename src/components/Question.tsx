import React from 'react';
import './style.css';
import { Props } from '../services/types';

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
}) => {
    return (
        <div className="card">
            <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
            <div className="questionsContainer">
                {answers.map(answer => (
                    <button
                        key={answer}
                        className={
                            !!userAnswer
                                ? userAnswer?.correctAnswer === answer
                                    ? "correct questionButton"
                                    : userAnswer?.answer === answer
                                        ? "incorrect questionButton"
                                        : "questionButton"
                                : "questionButton"
                        }
                        value={answer}
                        disabled={!!userAnswer}
                        onClick={callback}
                    >
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                ))}
            </div>
        </div >
    )
}

export default QuestionCard