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
