/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/QuestionScreen/QuizHeader/Counter/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the Counter component, which is used within the QuizHeader to display the remaining time for the quiz.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Displays the countdown timer in a stylized format.
 *                 - Incorporates a timer icon for visual context.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial creation of the Counter component with timer display functionality.
 *     - Styled the timer to match the theme of the quiz application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - The Counter component is essential for giving users a visual cue about the time remaining, enhancing the quiz-taking experience.
 *     - Future updates may include more dynamic features such as color changes as the timer gets close to zero to alert users.
 ***************************************************************************************************************************/
import { FC } from 'react'
import styled from 'styled-components'

import { TimerIcon } from '../../../../config/icons'
import { Flex } from '../../../../styles/Global'
import { device } from '../../../../styles/BreakPoints'

const TimerStyle = styled.span`
  min-width: 60px;
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  margin-left: 8px;
  color: ${({ theme }) => theme.colors.themeColor};
  @media ${device.md} {
    margin-left: 5px;
    min-width: 55px;
  }
`

interface CounterProps {
  time: string
}

const Counter: FC<CounterProps> = ({ time }) => {
  return (
    <Flex center>
      <TimerIcon />
      <TimerStyle>{time}</TimerStyle>
    </Flex>
  )
}

export default Counter
