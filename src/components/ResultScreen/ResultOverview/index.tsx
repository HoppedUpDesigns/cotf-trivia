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

  return (
    <ResultOverviewStyle>
      <p>
        You attempted questions: <HighlightedText>{result.length}</HighlightedText> / {quizDetails.userSelectedNumberOfQuestions}
      </p>
    </ResultOverviewStyle>
  );
};

export default ResultOverview;

