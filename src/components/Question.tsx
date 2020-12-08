import React, { useEffect, useRef } from 'react';
import './style.css';
import { Props } from '../services/types';
import { TweenMax, Power3 } from "gsap";

const QuestionCard: React.FC<Props> = ({
    question,
    answers,
    callback,
    userAnswer,
}) => {
    const ref = useRef<HTMLButtonElement[]>([]);
    ref.current = [];
    const addRefs = (el: HTMLButtonElement) => {
        if (el && !ref.current.includes(el)) {
            ref.current.push(el);
        }
    };
    useEffect(() => {
        ref.current.forEach((el) => {
            TweenMax.to(
                el,
                .8,
                {
                    opacity: 1,
                    y: -20,
                    easy: Power3.easeOut,
                })
        })
    }, [])
    return (
        <div className="card">
            <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
            <div className="questionsContainer">
                {answers.map(answer => (
                    <button
                        key={answer}
                        ref={addRefs}
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