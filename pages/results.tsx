import { useRouter } from 'next/router';
import React from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const ResultsPage = () => {
    const router = useRouter();
    const { score, total } = router.query;

    // Convert the query parameters to numbers
    const userScore = parseInt(score as string, 10) || 0;
    const totalQuestions = parseInt(total as string, 10) || 0;

    const restartQuiz = () => {
        // Navigate to the /quiz page to restart the quiz
        router.push('/quiz');
    };

    return (
        <div className="flex items-center justify-center h-screen w-screen">
            <Card className="w-[400px] p-4"> {/* Adjust card width and padding */}
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
