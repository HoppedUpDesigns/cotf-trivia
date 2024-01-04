/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/hooks/useShuffleQuestions.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the useShuffleQuestions custom hook, utilized to shuffle the order of quiz questions to provide a unique experience each time a quiz is taken.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Listens for when the current screen changes to the QuizDetailsScreen.
 *                 - Shuffles the order of questions when the QuizDetailsScreen is active, ensuring a randomized set of questions for each quiz attempt.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Implemented shuffling logic to randomize quiz questions upon entering the QuizDetailsScreen.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - The hook leverages the useEffect React hook and a custom shuffleArray utility function to achieve randomization.
 *     - It's designed to work in conjunction with the QuizContext to access and modify the state of questions.
 ***************************************************************************************************************************/
import { useEffect } from 'react'
import { useQuiz } from '../context/QuizContext'
import { ScreenTypes } from '../types'
import { shuffleArray } from '../utils/helpers'

export const useShuffleQuestions = () => {
  const { setQuestions, currentScreen, questions } = useQuiz()

  useEffect(() => {
    if (currentScreen === ScreenTypes.QuizDetailsScreen) {
      setQuestions(shuffleArray(questions))
    }
  }, [currentScreen])
}

export default useShuffleQuestions
