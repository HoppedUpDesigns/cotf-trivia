/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/hooks/index.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file acts as a central export point for custom React hooks used throughout the Coheed and Cambria Trivia (COTF) application. It makes hook imports more concise and organized within the component files.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Exports the useShuffleQuestions hook, which provides functionality to shuffle quiz questions for randomness.
 *                 - Exports the useTimer hook, which manages the countdown timer during the quiz.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial creation with the export of useShuffleQuestions and useTimer hooks.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - Future custom hooks can be added and exported from this file, enhancing the reusability and organization of the application's logic.
 ***************************************************************************************************************************/
import useShuffleQuestions from './useShuffleQuestions'
import useTimer from './useTimer'

export { useShuffleQuestions, useTimer }
