/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/data/quizTopics.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file defines the quiz topics available for the trivia application.
 *  - Each quiz topic is represented with a title and an associated icon.
 *  - Provides a central location for managing the topics available for users to select in the quiz.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Supplies a structured list of quiz topics, allowing for easy integration and updates.
 *  - Facilitates dynamic rendering of quiz topics in the application's user interface.
 *  - Enhances user experience by providing a variety of topics for selection.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: Last Updated on: 01/24/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial creation with a basic set of quiz topics.
 *  - Addition and modification of quiz topics based on user interest and content updates.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - Regular updates to this file can reflect new content or shifts in user interest.
 *  - The structure allows for easy expansion with more topics or modifications to existing ones.
 ***************************************************************************************************************************/

import { ReactNode } from 'react'
import { ReactComponent as Coheed } from '../assets/icons/coheed.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'Coheed and Cambria',
    icon: <Coheed />,
  },
  {
    title: 'AMORY WARS',
    icon: <Coheed />,
  },
  {
    title: 'Side Projects',
    icon: <Coheed />,
  },
  {
    title: 'S.S. Neverender',
    icon: <Coheed />,
  },
]
