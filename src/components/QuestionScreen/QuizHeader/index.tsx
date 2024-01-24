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
 * Last Updated on: Last Updated on: 01/24/2024
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

interface QuizHeaderProps {
  activeQuestion: number;
  totalQuestions: number;
  timer: number; // New prop for the timer
  
}

// The QuizHeader component displays the current and total question numbers.
const QuizHeader: FC<QuizHeaderProps> = ({
  activeQuestion,
  totalQuestions,
  timer,
}) => {
  // Function to format time in minutes:seconds
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };
  return (
    <Flex spaceBetween gap="6px">
      <div>
      <ActiveQuestionNo>{addLeadingZero(activeQuestion + 1)}</ActiveQuestionNo>
        <TotalQuestionNo>/{addLeadingZero(totalQuestions)}</TotalQuestionNo>
      </div>
      <div>
        {formatTime(timer)}
      </div>
    </Flex>
  )
}

export default QuizHeader
