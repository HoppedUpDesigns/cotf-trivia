/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/data/QuizQuestions/index.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file aggregates and exports quiz data from different topics for the quiz application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Defines the structure of quiz questions and topics.
 *  - Imports quiz data from various modules and combines them into a single exportable object.
 *  - Provides a central repository for all quiz-related data, making it easier to manage and update.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/17/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial creation of quiz data structure and importation of topic-specific quiz data.
 *  - Addition of new quiz topics and questions as the application has grown.
 *  - Continuous updates to ensure the data remains relevant and engaging for users.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - Regular updates are essential to keep the quiz content fresh and challenging for users.
 *  - The structured format of the quiz data aids in easy scalability and maintenance of the application.
 ***************************************************************************************************************************/

import { neverender } from './neverender'
import { amory } from './amory'
import { sideProjects } from './sideProjects'
import { coheed } from './coheed'

type Choice = string
type CorrectAnswers = string[]

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple
export type Question = {
  question: string
  choices: Choice[]
  type: 'MCQs' | 'MAQs' | 'boolean'
  correctAnswers: CorrectAnswers
  image?: string
}

export type Topic = {
  topic: string
  totalQuestions: number
  questions: Question[]
}

export const quiz: Record<string, Topic> = {
  'AMORY WARS': amory,
  'Coheed and Cambria': coheed,
  'Side Projects': sideProjects,
  'S.S. Neverender': neverender,
}
