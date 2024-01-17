/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/hooks/useShuffleQuestions.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file defines the 'useShuffleQuestions' hook for the quiz application.
 *  - It is responsible for randomly shuffling the order of quiz questions each time a quiz topic is selected.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Provides randomization of quiz questions to enhance the user experience and replayability.
 *  - Ensures each quiz attempt is unique by shuffling questions for a selected topic.
 *  - Integrates with the QuizContext to access and manipulate the quiz questions.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/16/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial implementation of the shuffling logic using the 'shuffleArray' utility.
 *  - Enhanced the hook to trigger shuffling based on changes in the current screen and quiz topic.
 *  - Improved the efficiency and reliability of the shuffling mechanism.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
***************************************************************************************************************************/

import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import { shuffleArray } from '../utils/helpers';
import { ScreenTypes } from '../types'

export const useShuffleQuestions = () => {
  const { setQuestions, currentScreen, quizTopic, questions } = useQuiz();

  useEffect(() => {
    if (currentScreen === ScreenTypes.QuizDetailsScreen && quizTopic) {
      // Assuming the 'questions' state in your context holds all questions of the selected topic
      const shuffledQuestions = shuffleArray([...questions]);
      setQuestions(shuffledQuestions);
    }
  }, [currentScreen, quizTopic, questions, setQuestions]);
}

export default useShuffleQuestions;
