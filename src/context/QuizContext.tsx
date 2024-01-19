/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/context/QuizContext.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file defines the React context for managing the state of the quiz application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Provides global state management for quiz-related data like current screen, quiz topic, questions, and results.
 *  - Allows for consistent access and mutation of state across different components.
 *  - Uses React's Context API to create a QuizContext and a provider component (QuizProvider).
 *  - Manages the lifecycle of quiz data, including setting the current quiz topic and updating quiz details.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial setup and configuration of the quiz context.
 *  - Addition of state management logic for new features.
 *  - Refactoring and optimization for improved performance and maintainability.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - It's important to ensure that the context is properly maintained to prevent state inconsistencies across the application.
 *  - The use of Context API provides a more scalable and efficient way to manage state than prop drilling.
 ***************************************************************************************************************************/

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
