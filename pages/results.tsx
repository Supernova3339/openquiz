import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResultsPage = () => {
    const router = useRouter();
    const { score, total } = router.query;

    // Convert the query parameters to numbers
    const initialUserScore = parseInt(score as string, 10) || 0;
    const initialTotalQuestions = parseInt(total as string, 10) || 0;

    const restartQuiz = () => {
        // Navigate to the /quiz page to restart the quiz
        router.push('/quiz');
    };

    // Use state to store and update the data without modifying the URL
    const [userScore, setUserScore] = useState(initialUserScore);
    const [totalQuestions, setTotalQuestions] = useState(initialTotalQuestions);

    // Use useEffect to update the state when query parameters change
    useEffect(() => {
        setUserScore(initialUserScore);
        setTotalQuestions(initialTotalQuestions);
    }, [initialUserScore, initialTotalQuestions]);

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <Card className="w-[400px] p-4">
                <CardContent>
                    <CardTitle className="text-2xl font-semibold mb-4">Quiz Results</CardTitle>
                    <p className="text-lg">
                        Your Score: {userScore} / {totalQuestions}
                    </p>
                    <div className="flex justify-center mt-6">
                        <Button onClick={restartQuiz}>
                            Restart Quiz
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default ResultsPage;
