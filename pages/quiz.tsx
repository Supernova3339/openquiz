import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import { fetchQuestions } from '@/utils/api';

const QuizPage = () => {
    const router = useRouter();
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [numQuestions] = useState(10);

    useEffect(() => {
        async function loadQuestions() {
            const fetchedQuestions = await fetchQuestions({numQuestions: numQuestions});

            if (fetchedQuestions) {
                setQuestions(fetchedQuestions);
                setLoading(false);
            }
        }
        loadQuestions();
    }, [numQuestions]);

    const handleAnswer = (isCorrect: any) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        if (currentQuestion < numQuestions - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            router.push(`/results?score=${score}&total=${numQuestions}`);
        }
    };

    return (
        <Layout>
            <ProgressBar current={currentQuestion} total={numQuestions} />
            {loading ? (
                <p></p>
            ) : (
                <QuestionCard
                    question={questions[currentQuestion]}
                    onAnswer={handleAnswer}
                />
            )}
        </Layout>
    );
};

export default QuizPage;
