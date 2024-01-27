/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/types/index.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - Centralizes the type definitions used in the quiz application.
 *  - Defines enums, interfaces, and types for consistent data handling across components.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Provides type definitions for screens, quiz details, results, and the quiz context.
 *  - Ensures type safety and predictability in the application's data flow.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/26/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Added and refined types for various aspects of the quiz application, including screens, quiz details, and results.
 *  - Ensured alignment of types with the evolving structure and features of the application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - These types are crucial for maintaining the structure and integrity of the application's data.
 *  - Updates to this file should be made carefully to avoid type conflicts or errors in other parts of the application.
 ***************************************************************************************************************************/

import { Dispatch, SetStateAction } from 'react'
import { Question } from '../data/QuizQuestions'

export enum ScreenTypes {
  SplashScreen,
  QuizTopicsScreen,
  QuizDetailsScreen,
  QuestionScreen,
  ResultScreen,
}

export interface Result extends Question {
  selectedAnswer: string[]
  isMatch: boolean
}

export type QuizDetails = {
  totalQuestions: number;
  selectedQuizTopic: string;
  userSelectedNumberOfQuestions: number;
};

export type QuizContextTypes = {
  currentScreen: ScreenTypes;
  setCurrentScreen: Dispatch<SetStateAction<ScreenTypes>>;
  quizTopic: string;
  selectQuizTopic: (topic: string) => void;
  questions: Question[];
  setQuestions: Dispatch<SetStateAction<Question[]>>;
  result: Result[];
  setResult: Dispatch<SetStateAction<Result[]>>;
  quizDetails: QuizDetails;
  updateQuizDetails: (newDetails: Partial<QuizDetails>) => void;
}
