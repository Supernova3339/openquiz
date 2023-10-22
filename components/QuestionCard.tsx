import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

class QuestionCardStyled extends React.Component<{
    question: any;
    onAnswer: any;
}> {
    render() {
        let { question, onAnswer } = this.props;
        const decodedQuestion = unescape(question.question);
        const choices = question.choices.slice(); // Create a copy of the choices array

        // Shuffle the choices to randomize their order
        for (let i = choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [choices[i], choices[j]] = [choices[j], choices[i]];
        }

        // Create a mapping of the shuffled choices to A, B, C, D
        const choiceMappings = choices.reduce(
            (acc: { [x: string]: any; }, choice: any, index: number) => {
                acc[String.fromCharCode(65 + index)] = choice;
                return acc;
            },
            {}
        );

        return (
            <div className="flex items-center justify-center h-screen w-screen">
                <Card className="w-[700px] p-8">
                    <CardContent>
                        <div className="space-y-4">
                            <h2 className="text-xl">{decodedQuestion}</h2>
                            <div className="space-y-2">
                                <p>A: {question.choices[0]}</p>
                                <p>B: {question.choices[1]}</p>
                                <p>C: {question.choices[2]}</p>
                                <p>D: {question.choices[3]}</p>
                            </div>
                            <div className="flex justify-between space-x-4">
                                {Object.keys(choiceMappings).map((option) => (
                                    <Button
                                        key={option}
                                        onClick={() => onAnswer(choiceMappings[option] === question.correctAnswer)}
                                    >
                                        {option}
                                    </Button>
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default QuestionCardStyled;
