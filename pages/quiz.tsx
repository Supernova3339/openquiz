import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';
import ProgressBar from '../components/ProgressBar';
import QuestionCard from '../components/QuestionCard';
import { fetchQuestions } from '@/utils/api';
import {Button} from "@/components/ui/button";
import {Settings} from "lucide-react";
import {useSettings} from "@/hooks/use-settings";

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

    const settings = useSettings();

    return (
        <Layout>
            <div className="fixed top-4 right-4">
                <Button onClick={settings.onOpen} variant="outline" size="icon">
                    <Settings className="h-4 w-4" />
                </Button>
            </div>
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