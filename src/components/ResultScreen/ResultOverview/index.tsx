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

