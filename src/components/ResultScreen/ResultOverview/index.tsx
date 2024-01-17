/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/ResultScreen/ResultOverview/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the ResultOverview component used in the ResultScreen to summarize the user's performance in the quiz.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Displays the count of correctly answered questions out of the total attempted questions.
 *  - Uses styled-components for styling the text and layout.
 *  - Accesses quiz details from the QuizContext to get the total number of questions attempted by the user.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/17/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Implemented the logic to calculate the number of correct answers.
 *  - Added styled-component for consistent styling with the theme.
 *  - Integrated the component with the QuizContext for dynamic data retrieval.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - This component is pivotal for providing a quick overview of quiz performance to the user.
 *  - The design focuses on clear and concise presentation of key quiz performance metrics.
 ***************************************************************************************************************************/

import { FC } from 'react'
import styled from 'styled-components'
import { useQuiz } from '../../../context/QuizContext'
import { device } from '../../../styles/BreakPoints'
import { HighlightedText } from '../../../styles/Global'
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
  result: Result[];
}

const ResultOverview: FC<ResultOverviewProps> = ({ result }) => {
  const { quizDetails } = useQuiz();

  // Calculate the number of correct answers
  const correctAnswersCount = result.reduce((acc, current) => {
    return current.isMatch ? acc + 1 : acc;
  }, 0);

  return (
    <ResultOverviewStyle>
      <p>
      <p>You Answered <HighlightedText>{correctAnswersCount}</HighlightedText> Out of <HighlightedText>{quizDetails.userSelectedNumberOfQuestions}</HighlightedText> Questions Correctly</p>
      </p>
    </ResultOverviewStyle>
  );
};

export default ResultOverview;

