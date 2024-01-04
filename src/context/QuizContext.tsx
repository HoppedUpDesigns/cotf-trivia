/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/context/QuizContext.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: The QuizContext file centralizes the state and logic of the quiz application, enabling easy management and sharing of state across various components. This context provides essential data and functions related to the quiz, such as current screen, quiz topics, questions, results, and timer.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Manages the global state of the quiz application, including current screen, selected topic, questions, results, and timing.
 *                 - Provides a QuizContext for components to consume and interact with the quiz state.
 *                 - Implements functions to update the state, such as selecting a quiz topic, setting questions, and recording results.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial creation of the QuizContext with foundational state and functions.
 *     - Added dynamic handling of quiz questions and topics.
 *     - Implemented timing and result recording functionalities.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - Ensure that the context is wrapped around the application root to provide global access.
 *     - Consider implementing more robust error handling and state validation as the application scales.
 ***************************************************************************************************************************/
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { quiz } from '../data/QuizQuestions'
import { QuizContextTypes, Result, ScreenTypes } from '../types'

const initialState: QuizContextTypes = {
  currentScreen: ScreenTypes.SplashScreen,
  setCurrentScreen: () => {},
  quizTopic: 'Coheed and Cambria',
  selectQuizTopic: () => {},
  questions: [],
  setQuestions: () => {},
  result: [],
  setResult: () => {},
  timer: 15,
  setTimer: () => {},
  endTime: 0,
  setEndTime: () => {},
  quizDetails: {
    totalQuestions: 0,
    totalTime: 0,
    selectedQuizTopic: 'Coheed and Cambria',
  },
}

export const QuizContext = createContext<QuizContextTypes>(initialState)

export function useQuiz() {
  return useContext(QuizContext)
}

type QuizProviderProps = {
  children: ReactNode
}

const QuizProvider = ({ children }: QuizProviderProps) => {
  const [timer, setTimer] = useState<number>(initialState.timer)
  const [endTime, setEndTime] = useState<number>(initialState.endTime)
  const [quizTopic, setQuizTopic] = useState<string>(initialState.quizTopic)
  const [result, setResult] = useState<Result[]>(initialState.result)
  const [currentScreen, setCurrentScreen] = useState<ScreenTypes>(
    initialState.currentScreen
  )

  const [questions, setQuestions] = useState(quiz[initialState.quizTopic].questions)

  const {
    questions: quizQuestions,
    totalQuestions,
    totalTime,
  } = quiz[quizTopic]

  const selectQuizTopic = (topic: string) => {
    setQuizTopic(topic)
  }

  useEffect(() => {
    setTimer(totalTime)
    setQuestions(quizQuestions)
  }, [quizTopic])

  const quizDetails = {
    totalQuestions,
    totalTime,
    selectedQuizTopic: quizTopic,
  }

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
    timer,
    setTimer,
    endTime,
    setEndTime,
  }

  return <QuizContext.Provider value={quizContextValue}>{children}</QuizContext.Provider>
}

export default QuizProvider
