/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/api/quizTypes.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the QuizQuestion interface, which represents the structure of each quiz question.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/03/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *   - Changed the type of the questionID property to string.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *   - This module defines the QuizQuestion interface used to structure quiz questions' data.
 *   - The questionID is updated to be of type string.
 ***************************************************************************************************************************/

// Interface for the structure of each quiz question
export interface QuizQuestion {
    questionID: string; // Change the type to string
    question: string;
    choices: string[];
    type: string;
    correctAnswers: string[];
}
