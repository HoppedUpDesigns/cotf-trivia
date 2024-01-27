/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/ResultScreen/RightAnswer/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file defines the RightAnswer component, used in the ResultScreen to display the correct answers for questions where the user's response was incorrect.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - The component takes in the correct answers and the choices for a particular question.
 *  - It formats and displays the correct answers with their corresponding choice labels (A, B, C, etc.).
 *  - Utilizes styled-components for styling.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/26/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Developed the initial component structure and logic.
 *  - Integrated with the quiz system to dynamically fetch and display correct answers.
 *  - Styled the component for clear visibility and consistency with the quiz theme.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - This component enhances the learning experience by clearly indicating the correct answers, aiding in user understanding and knowledge retention.
 *  - Designed to be reusable across different types of questions within the quiz.
 ***************************************************************************************************************************/

import { FC } from 'react'
import styled from 'styled-components'
import { HighlightedText } from '../../../styles/Global'

interface RightAnswerProps {
  correctAnswers: string[]
  choices: string[]
}

const RightAnswerContainer = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerGray};
  margin-top: 15px;
  line-height: 1.2;
`

const RightAnswer: FC<RightAnswerProps> = ({ correctAnswers, choices }) => {
  return (
    <RightAnswerContainer>
      {`Right ${correctAnswers.length < 2 ? 'Answer' : 'Answers'}: `}
      {correctAnswers.map((item: string, index: number) => {
        const label = String.fromCharCode(65 + choices.indexOf(item))

        return (
          <HighlightedText key={index} themeText>
            {`${label} (${item})${index !== correctAnswers.length - 1 ? ', ' : ''}`}
          </HighlightedText>
        )
      })}
    </RightAnswerContainer>
  )
}

export default RightAnswer
