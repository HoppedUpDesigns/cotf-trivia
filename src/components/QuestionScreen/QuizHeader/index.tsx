
/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/QuestionScreen/QuizHeader/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the QuizHeader component, which displays the current question number, total questions, and the timer.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Shows the active question number and total number of questions in the quiz.
 *                 - Displays a countdown timer for the current quiz session.
 *                 - Highlights if the current question is skipped.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial creation of the QuizHeader component with active question, total questions, and timer display.
 *     - Added styling for skipped questions and responsive design considerations.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - This component is a critical part of the quiz interface, providing users with essential information about their progress and time.
 *     - Ensure accuracy in the display of the active question number and timer countdown to maintain user trust and engagement.
 *     - Consider enhancing the visual feedback for skipped questions and other special cases to improve user experience.
 ***************************************************************************************************************************/
import { FC } from 'react'
import styled from 'styled-components'

import { device } from '../../../styles/BreakPoints'
import { Flex } from '../../../styles/Global'
import { addLeadingZero, formatTime } from '../../../utils/helpers'

import Counter from './Counter'

const ActiveQuestionNo = styled.span`
  font-size: clamp(40px, 5vw, 60px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.themeColor};
`

const SkippedQuestionStyle = styled.span`
  font-size: clamp(12px, 4vw, 16px);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.infoText};
  background: ${({ theme }) => theme.colors.infoBackground};
  border-radius: 15px;
  margin-right: 13px;
  display: inline-block;
  padding: 15px 20px;
  text-align: center;
  @media ${device.md} {
    padding: 12px 15px;
  }
`

const TotalQuestionNo = styled.span`
  font-size: clamp(20px, 5vw, 30px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkerGray};
`

interface QuizHeaderProps {
  activeQuestion: number
  totalQuestions: number
  timer: number
  skipped?: boolean
}

const QuizHeader: FC<QuizHeaderProps> = ({
  activeQuestion,
  totalQuestions,
  timer,
  skipped,
}) => {
  return (
    <Flex spaceBetween gap="6px">
      <div>
        <ActiveQuestionNo>{addLeadingZero(activeQuestion + 1)}</ActiveQuestionNo>
        <TotalQuestionNo>/{addLeadingZero(totalQuestions)}</TotalQuestionNo>
      </div>
      <Flex>
        {skipped && <SkippedQuestionStyle>Skipped Question</SkippedQuestionStyle>}
        <Counter time={`${formatTime(timer)}`} />
      </Flex>
    </Flex>
  )
}

export default QuizHeader
