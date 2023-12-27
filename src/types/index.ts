/* Here is the code for the file cotf/src/types/index.ts */

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
