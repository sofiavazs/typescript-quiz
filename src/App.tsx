import React, { useState } from 'react';
import QuestionCard from './components/QuestionCard';
import {fetchQuizQuestions} from './API';
import {QuestionsState, Difficulty} from './API';
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string; 
  correct: boolean;
  correctAnswer: string;
};


const TOTAL_QUESTIONS = 10;

const App = () => {
  const [loading, setLoading] = useState(false);
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [number, setNumber] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(true);

  const startQuiz = async () => {
    setLoading(true)
    setGameOver(false)

    const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, Difficulty.EASY); 
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setNumber(0);
    setLoading(false);
  }; 

  const checkAnswer = (e: any) => {
    if (!gameOver) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[number].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[number].question,
        answer,
        correct,
        correctAnswer: questions[number].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const nextQuestion = () => {
    // move on to the next question if not the last question 
    const nextQuestion = number + 1; 
    if(nextQuestion === TOTAL_QUESTIONS) {
      setGameOver(true)
    } else {
      setNumber(nextQuestion)
    }

  }
  return (
    <>
      <GlobalStyle/>
      <Wrapper>
        <div className="App">
          <h1>General Quiz!</h1>
          {!gameOver ? <p className="score">Score: {score}</p> : null}
          {gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
          <button className="start" onClick={startQuiz}>
            Start
          </button>
          ): null} 
          {loading && <p className='lds-dual-ring'/>}
          {!loading && !gameOver && (
          <QuestionCard 
            questionNr={number+1}
            totalQuestions={TOTAL_QUESTIONS}
            question={questions[number].question}
            answers={questions[number].answers}
            userAnswer={userAnswers ? userAnswers[number] : undefined}
            callback={checkAnswer}
          />
          )}
          {!gameOver && !loading && userAnswers.length === number +1 && number !== TOTAL_QUESTIONS -1 ? (
          <button className="next" onClick={nextQuestion}> 
            Next question
          </button>
          ): null}
      </div>
      </Wrapper>
    </>
  );
};

export default App;
