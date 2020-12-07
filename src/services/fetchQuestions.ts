import { Question } from './types';

const shuffleArray = (array: any[]) =>
    [...array].sort(() => Math.random() - 0.5);

export const fetchQuestions = async () => {
    const url = 'https://opentdb.com/api.php?amount=10&type=multiple';
    const data = await (await fetch(url)).json();
    return data.results.map((question: Question) => ({
        ...question,
        answers: shuffleArray([...question.incorrect_answers, question.correct_answer])
    }))
}