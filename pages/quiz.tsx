import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';
import ProgressBar from '@/components/ProgressBar';
import QuestionCardStyled from '@/components/QuestionCard';
import { fetchQuestions } from '@/utils/api';
import { Button } from '@/components/ui/button';
import {useSettings} from "@/hooks/use-settings";
import { Loader2, Settings} from "lucide-react";

const QuizPage = () => {
    const router = useRouter();
    const [questions, setQuestions] = useState([]);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [loading, setLoading] = useState(true);
    const [numQuestions] = useState(10);
    const settings = useSettings();

    useEffect(() => {
        async function loadQuestions() {
            const fetchedQuestions = await fetchQuestions({ numQuestions: numQuestions });

            if (fetchedQuestions) {
                setQuestions(fetchedQuestions);
                setLoading(false);
            }
        }
        loadQuestions();
    }, [numQuestions]);

    const handleAnswer = ({isCorrect}: { isCorrect: any }) => {
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
            <div className="fixed top-4 right-4">
                <Button onClick={settings.onOpen} size="icon">
                    <Settings className="h-4 w-4" />
                </Button>
            </div>
            {loading ? (
                <div className="flex min-h-screen w-full items-center justify-center text-center p-32">
                    <Loader2 className="animate-spin" />
                </div>
            ) : (
                <QuestionCardStyled question={questions[currentQuestion]} onAnswer={handleAnswer} />
            )}
        </Layout>
    );
};

export default QuizPage;