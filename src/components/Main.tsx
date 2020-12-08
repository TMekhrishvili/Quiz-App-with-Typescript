import React, { useState } from 'react';
import './style.css';
import QuestionCard from '../components/Question';
import { fetchQuestions } from '../services/fetchQuestions';
import { QuestionState, AnswerObject } from '../services/types';

const TOTAL = 10;

const Main: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswer, setUserAnswer] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [over, setOver] = useState(false);
  const [quizOver, setQuizOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true);
    setScore(0);
    setQuizOver(false);
    setOver(false);
    setQuestions(await fetchQuestions());
    setUserAnswer([]);
    setNumber(0);
    setLoading(false);
  }

  const checkAnswer = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!quizOver) {
      const answer = e.currentTarget.value;
      const correct = questions[number].correct_answer === answer;
      if (correct) setScore(prev => prev + 1);
      const answerObject: AnswerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswer(prev => [...prev, answerObject])
    }
  }

  const nextQuestion = () => {
    const nextQuestion = number + 1;
    if (nextQuestion === TOTAL) {
      setQuizOver(true);
      setOver(true);
    } else {
      setNumber(prev => prev + 1);
    }
  }

  return (
    <div className="main">
      <img className="logo" alt="logo" src="https://www.worlddata.info/pics/quiz.png" />
      {quizOver || userAnswer.length === TOTAL + 1 ? (
        <button className="start" onClick={startQuiz}>
          {over ? <span>Play Again</span> : <span>Start Quiz</span>}
        </button>
      ) : null}
      {over && (
        <div>
          <p>Quiz Over</p>
          <p className="score">Score: {score}</p>
        </div>
      )}
      {!quizOver ? <p className="score">Score: {score}</p> : null}
      {loading ? <img className="img" alt="loading" src="https://www.fogelstad.org/core/dependencies/loader.gif" /> : null}
      {!loading && !quizOver && (
        <QuestionCard
          question={questions[number].question}
          answers={questions[number].answers}
          userAnswer={userAnswer ? userAnswer[number] : undefined}
          callback={checkAnswer}
        />
      )}
      {!quizOver &&
        !loading &&
        userAnswer.length === number + 1 &&
        number !== TOTAL ?
        <button
          className="next"
          onClick={nextQuestion}
        >
          Continue
      </button> : null
      }

    </div>
  );
}

export default Main;
