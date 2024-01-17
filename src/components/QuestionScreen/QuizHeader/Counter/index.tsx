/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/QuestionScreen/QuizHeader/Counter/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the Counter component used in the QuizHeader to display a timer or counter.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: The Counter component displays the remaining time or a counter value next to a timer icon. It's primarily used to show a countdown timer during a quiz.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/17/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 * - Initial creation of the Counter component for displaying the quiz timer.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 * - Ensure that the time prop is managed and updated accurately to reflect real-time changes.
 ***************************************************************************************************************************/

import { FC } from 'react'
import styled from 'styled-components'
import { TimerIcon } from '../../../../config/icons'
import { Flex } from '../../../../styles/Global'
import { device } from '../../../../styles/BreakPoints'

// Styled component for the timer text display.
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

// Interface for Counter component props.
interface CounterProps {
  time: string // The time or counter value to display.
}

// Counter component that displays a timer icon alongside the time or counter value.
const Counter: FC<CounterProps> = ({ time }) => {
  return (
    <Flex center>
      <TimerIcon /> // Display the timer icon.
      <TimerStyle>{time}</TimerStyle> // Display the time or counter value.
    </Flex>
  )
}

export default Counter
