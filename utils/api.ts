// @ts-ignore
import he from 'he';

const API_BASE_URL = 'https://opentdb.com/api.php';

export const fetchQuestions = async ({ numQuestions }: { numQuestions: any }) => {
    const response = await fetch(
        `${API_BASE_URL}?amount=${numQuestions}&type=multiple`
    );
    const data = await response.json();

    if (data.results) {
        return data.results.map((question: { question: any; incorrect_answers: any; correct_answer: any; }) => {
            return ({
                question: he.decode(question.question), // Decode HTML entities
                choices: [...question.incorrect_answers, question.correct_answer],
                correctAnswer: question.correct_answer,
            });
        });
    } else {
        return null;
    }
};
