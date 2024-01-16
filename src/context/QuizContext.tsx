import React, { createContext, useContext, useState, useEffect } from 'react';
import { QuizContextTypes, QuizDetails, Result, ScreenTypes } from '../types'
import { quiz } from '../data/QuizQuestions'
import { Question } from '../data/QuizQuestions';

const initialState: QuizContextTypes = {
  currentScreen: ScreenTypes.SplashScreen,
  setCurrentScreen: () => {},
  quizTopic: '',
  selectQuizTopic: () => {},
  questions: [], // Initialize with an empty array
  setQuestions: () => {}, // Initialize with an empty function
  result: [],
  setResult: () => {},
  quizDetails: {
    totalQuestions: 0,
    selectedQuizTopic: '',
    userSelectedNumberOfQuestions: 0,
  },
  updateQuizDetails: () => {}, // Initialize with an empty function
};

export const QuizContext = createContext<QuizContextTypes>(initialState);

export function useQuiz() {
  return useContext(QuizContext);
}

type QuizProviderProps = {
  children: React.ReactNode;
};

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [currentScreen, setCurrentScreen] = useState<ScreenTypes>(initialState.currentScreen);
  const [quizTopic, setQuizTopic] = useState<string>(initialState.quizTopic);
  const [result, setResult] = useState<Result[]>(initialState.result);
  const [quizDetails, setQuizDetails] = useState<QuizDetails>(initialState.quizDetails);
  const [questions, setQuestions] = useState<Question[]>([]); // Initialize as empty array

  useEffect(() => {
    // Ensure that the quiz topic is valid and exists in the quiz data
    if (quizTopic && quiz[quizTopic]) {
      setQuestions(quiz[quizTopic].questions);
      setQuizDetails(prevDetails => ({
        ...prevDetails,
        totalQuestions: quiz[quizTopic].totalQuestions,
        selectedQuizTopic: quizTopic,
      }));
    }
  }, [quizTopic]);

  const selectQuizTopic = (topic: string) => {
    setQuizTopic(topic);
  };

  const updateQuizDetails = (newDetails: Partial<QuizDetails>) => {
    setQuizDetails((prevDetails) => ({ ...prevDetails, ...newDetails }));
  };

  const quizContextValue: QuizContextTypes = {
    currentScreen,
    setCurrentScreen,
    quizTopic,
    selectQuizTopic,
    questions,
    setQuestions,
    result,
    setResult,
    quizDetails,
    updateQuizDetails,
  };

  return (
    <QuizContext.Provider value={quizContextValue}>
      {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;
