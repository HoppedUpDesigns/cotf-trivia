/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/QuestionScreen/QuizHeader/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the QuizHeader component, which is used to display the question counter on the quiz screen.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: The QuizHeader component shows the current question number and the total number of questions the user has opted to attempt. It helps in tracking the progress through the quiz.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/17/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 * - Initial creation of the QuizHeader component for displaying question counters.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 * - This component is essential for enhancing the user experience by keeping them informed about their progress in the quiz.
 ***************************************************************************************************************************/

import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '../../../styles/Global'
import { addLeadingZero } from '../../../utils/helpers'

// Styled component for the current question number.
const ActiveQuestionNo = styled.span`
  font-size: clamp(40px, 5vw, 60px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.themeColor};
`

// Styled component for the total number of questions.
const TotalQuestionNo = styled.span`
  font-size: clamp(20px, 5vw, 30px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkerGray};
`

// Props interface for QuizHeader.
interface QuizHeaderProps {
  activeQuestion: number // Current active question number.
  userSelectedNumberOfQuestions: number // Total questions selected by the user.
}

// The QuizHeader component displays the current and total question numbers.
const QuizHeader: FC<QuizHeaderProps> = ({
  activeQuestion,
  userSelectedNumberOfQuestions,
}) => {
  return (
    <Flex spaceBetween gap="6px">
      <div>
        <ActiveQuestionNo>{addLeadingZero(activeQuestion + 1)}</ActiveQuestionNo> // Display the current question number.
        <TotalQuestionNo>/{addLeadingZero(userSelectedNumberOfQuestions)}</TotalQuestionNo> // Display the total number of questions.
      </div>
    </Flex>
  )
}

export default QuizHeader
