import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { unescape } from 'lodash';

class QuestionCard extends React.Component<{
    question: any;
    onAnswer: any;
}> {
    state = {
        correctAnswerIndex: Math.floor(Math.random() * 4),
    };

    shuffleChoices = () => {
        const choices = this.props.question.choices.slice(); // Create a copy of the choices array

        // Shuffle the choices array to randomize their order
        for (let i = choices.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [choices[i], choices[j]] = [choices[j], choices[i]];
        }

        return choices;
    };

    setCorrectAnswerChoice = () => {
        const shuffledChoices = this.shuffleChoices();
        const correctAnswerChoice = shuffledChoices[this.state.correctAnswerIndex];

        this.setState({ correctAnswerChoice });
    };

    handleAnswer = (userAnswer: string) => {
        const isCorrect = userAnswer === this.props.question.correctAnswer;

        this.props.onAnswer(isCorrect);
    };

    componentDidMount() {
        this.setCorrectAnswerChoice();
    }

    render() {
        const { question } = this.props;

        const decodedQuestion = unescape(question.question);
        const choices = question.choices.slice(); // Create a copy of the choices array

        // Shuffle the choices array to randomize their order
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
                                <p>A: {unescape(choiceMappings.A)}</p>
                                <p>B: {unescape(choiceMappings.B)}</p>
                                <p>C: {unescape(choiceMappings.C)}</p>
                                <p>D: {unescape(choiceMappings.D)}</p>
                            </div>
                            <div className="flex justify-between space-x-4">
                                {Object.keys(choiceMappings).map((option) => (
                                    <Button
                                        key={option}
                                        onClick={() => this.handleAnswer(choiceMappings[option])}
                                    >
                                        {option}
                                    </Button>
                                ))}
                            </div>
                            {question.correctAnswer}
                        </div>
                    </CardContent>
                </Card>
            </div>
        );
    }
}

export default QuestionCard;
