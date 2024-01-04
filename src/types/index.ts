/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/types/index.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file serves as the central point for type definitions used across the Coheed and The Fence (COTF) trivia application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Defines enumerations and interfaces for screen types, question types, result tracking, and the quiz context.
 *                 - Provides a structured way to manage and use data types throughout the application, ensuring type safety and consistency.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Introduced ScreenTypes enum to manage different views in the application.
 *     - Defined QuestionTypes and Result interfaces for handling question and result data.
 *     - Established the QuizContextTypes interface to standardize the context structure used in the app's state management.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - The types and interfaces defined in this file are crucial for the maintainability and scalability of the COTF trivia application.
 *     - Consistent use of these types across components helps prevent bugs and makes the codebase easier to understand and work with.
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

export interface QuestionTypes extends Question {
  skipped?: boolean
}

export interface Result extends Question {
  selectedAnswer: string[]
  isMatch: boolean
  skipped?: boolean
}

export type QuizContextTypes = {
  currentScreen: ScreenTypes
  setCurrentScreen: Dispatch<SetStateAction<ScreenTypes>>
  quizTopic: string
  selectQuizTopic: (type: string) => void
  questions: QuestionTypes[]
  setQuestions: Dispatch<SetStateAction<any[]>>
  result: Result[]
  setResult: Dispatch<SetStateAction<any[]>>
  timer: number
  setTimer: Dispatch<SetStateAction<number>>
  endTime: number
  setEndTime: (type: number) => void
  quizDetails: {
    totalQuestions: number
    totalTime: number
    selectedQuizTopic: string
  }
}
