/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/ResultScreen/ResultOverview/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the ResultOverview component, which provides a summary of the user's performance on the quiz, including the number of questions attempted and the time spent.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Displays the total number of questions attempted by the user.
 *                 - Shows the total time spent by the user on the quiz.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Implemented functionality to calculate and display the number of questions attempted and the time spent.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - This component is part of the ResultScreen and helps provide a quick overview of the user's performance.
 *     - Consider adding more metrics for a comprehensive performance analysis in future updates.
 ***************************************************************************************************************************/

import { FC } from 'react'
import styled from 'styled-components'
import { useQuiz } from '../../../context/QuizContext'
import { device } from '../../../styles/BreakPoints'
import { HighlightedText } from '../../../styles/Global'
import { convertSeconds } from '../../../utils/helpers'
import { Result } from '../../../types'

const ResultOverviewStyle = styled.div`
  text-align: center;
  margin-bottom: 70px;
  @media ${device.md} {
    margin-bottom: 30px;
  }
  p {
    margin-top: 15px;
    font-weight: 500;
    font-size: 18px;
  }
`

interface ResultOverviewProps {
  result: Result[]
}

const ResultOverview: FC<ResultOverviewProps> = ({ result }) => {
  const { quizDetails, endTime } = useQuiz()

  const totalQuestionAttempted = result.length


  return (
    <ResultOverviewStyle>
      <p>
        You attempted questions:{' '}
        <HighlightedText> {totalQuestionAttempted} </HighlightedText>/{' '}
        {quizDetails.totalQuestions}
      </p>
      <p>
        Time Spent:<HighlightedText> {convertSeconds(endTime)} </HighlightedText>
      </p>
    </ResultOverviewStyle>
  )
}

export default ResultOverview
