/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/data/quizTopics.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: The quizTopics.tsx file defines the different topics available for the quiz application, each with a corresponding title and icon. This data is used to generate topic selections for users to choose from within the application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Provides an array of quiz topics, each represented as an object with a title and icon.
 *                 - Enables dynamic rendering of quiz topic options based on the data provided in this file.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 1/1/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial creation and setup of quiz topics with default icons.
 *     - Defined structure for each quiz topic object with title and icon properties.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - The icons are currently using a placeholder; consider updating them with distinct and relevant icons for each topic.
 *     - As the application evolves, more topics with respective icons can be added to this array to expand the quiz offerings.
 ***************************************************************************************************************************/
import { ReactNode } from 'react'
import { ReactComponent as Coheed } from '../assets/icons/app-logo.svg'

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
