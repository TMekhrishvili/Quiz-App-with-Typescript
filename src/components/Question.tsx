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
        <div>
            <p className="question" dangerouslySetInnerHTML={{ __html: question }} />
            <div>
                {answers.map(answer => (
                    <div key={answer}>
                        <button value={answer} disabled={!!userAnswer} onClick={callback}>
                            <span dangerouslySetInnerHTML={{ __html: answer }} />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default QuestionCard