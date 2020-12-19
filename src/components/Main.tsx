import React, { useState, useEffect, useRef } from 'react';
import './style.css';
import QuestionCard from '../components/Question';
import { fetchQuestions } from '../services/fetchQuestions';
import { QuestionState, AnswerObject } from '../services/types';
import { gsap, TweenMax, Power3 } from "gsap";
import QuizLogo from '../images/quiz.png';
const TOTAL = 10;

const Main: React.FC = () => {
  let ref = useRef(null);
  useEffect(() => {
    gsap.to('.start', {
      opacity: 1,
      y: 30,
      delay: 0.5,
      easy: Power3.easeOut,
    })
    TweenMax.to(
      ref.current,
      .8,
      {
        opacity: 1,
        y: -20,
        easy: Power3.easeOut,
      })
  }, [])

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
      <img ref={ref} className="logo" alt="logo" src={QuizLogo} />
      {quizOver || userAnswer.length === TOTAL + 1 ? (
        <button className="start" style={over ? { opacity: 1 } : { opacity: 0 }} onClick={startQuiz}>
          {over ? <span>Play Again</span> : <span>Start Quiz</span>}
        </button>
      ) : null}
      {over && (
        <div>
          <p className="score">Score: {score}</p>
        </div>
      )}
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
          className="next opacity"
          onClick={nextQuestion}
        >
          Continue
      </button> : null
      }

    </div>
  );
}

export default Main;
