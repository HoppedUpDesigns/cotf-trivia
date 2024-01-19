/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/ResultScreen/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file contains the ResultScreen component which displays the results of the quiz after it has concluded.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality:
 *  - Shows a summary of the user's performance including correct and incorrect answers.
 *  - Utilizes styled components for displaying each question with user's selected answer and the correct answer.
 *  - Provides a "RETRY" button for users to retake the quiz.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made:
 *  - Initial creation of the component with basic result presentation.
 *  - Integration with QuizContext for accessing quiz results.
 *  - Styling and layout enhancements for a user-friendly display of results.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes:
 *  - Essential component for providing feedback and analysis of user's performance in the quiz.
 *  - The component structure and logic ensure a detailed and informative result presentation.
 ***************************************************************************************************************************/

import { FC } from 'react'
import styled, { css } from 'styled-components'
import { AppLogo, Refresh } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { device } from '../../styles/BreakPoints'
import { Flex, LogoContainer, ResizableBox } from '../../styles/Global'
import { refreshPage } from '../../utils/helpers'
import Button from '../ui/Button'
import QuizImage from '../ui/QuizImage'
import ResultOverview from './ResultOverview'
import RightAnswer from './RightAnswer'

const ResultScreenContainer = styled.div`
  max-width: 900px;
  margin: 60px auto;
  @media ${device.md} {
    width: 90%;
    margin: 30px auto;
    padding-top: 40px;
  }
`

const InnerContainer = styled.div`
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 4px;
  margin: 0 auto;
  margin-bottom: 40px;
  padding: 40px 90px 90px 90px;
  @media ${device.md} {
    padding: 15px;
  }
`

const QuestionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 40px;
  @media ${device.md} {
    flex-direction: column;
  }
`

const QuestionNumber = styled.h6`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
`

const QuestionStyle = styled.span`
  font-size: clamp(16px, 5vw, 24px);
  font-weight: 500;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: 20px;
  @media ${device.md} {
    margin-bottom: 10px;
  }
`

interface AnswerProps {
  correct?: boolean
  wrong?: boolean
}

const Answer = styled.li<AnswerProps>`
  border: 1px solid ${({ theme }) => theme.colors.border};
  width: 90%;
  @media ${device.md} {
    width: 100%;
  }
  background: ${({ theme }) => theme.colors.answerBg};
  border-radius: 16px;
  font-size: clamp(16px, 5vw, 18px);
  font-weight: 600;
  padding: 15px;
  color: ${({ theme }) => theme.colors.secondaryText};
  margin-top: clamp(13px, calc(10px + 6 * ((100vw - 600px) / 1320)), 16px);

  // if user answer matches to correct answer make answer background success color otherwise danger color
  ${({ correct }) =>
    correct &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.success};
      background-color: ${({ theme }) => theme.colors.successLight};
    `}

  ${({ wrong }) =>
    wrong &&
    css`
      border: 1px solid ${({ theme }) => theme.colors.danger};
      background-color: ${({ theme }) => theme.colors.dangerLight};
    `}

  span {
    margin-right: 14px;
  }

  @media ${device.md} {
    font-weight: 400;
  }
`

const ResultScreen: FC = () => {
  const { questions, result, quizDetails } = useQuiz();

  const onClickRetry = () => {
    refreshPage();
  };

  return (
    <ResultScreenContainer>
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
      <InnerContainer>
        <ResultOverview result={result} />
        {questions.slice(0, quizDetails.userSelectedNumberOfQuestions).map((questionObj, index) => {
          const questionResult = result.find(r => r.question === questionObj.question);
          const isAnswered = questionResult !== undefined;

          return (
            <QuestionContainer key={questionObj.question}>
              <ResizableBox width="90%">
                <Flex gap="4px">
                  <QuestionNumber>{`${index + 1}. `}</QuestionNumber>
                  <QuestionStyle>{questionObj.question}</QuestionStyle>
                </Flex>
                <div>
                  {questionObj.image && <QuizImage image={questionObj.image} />}
                  <ul>
                    {questionObj.choices.map((ans, idx) => {
                      const label = String.fromCharCode(65 + idx);
                      const isCorrectAnswer = questionObj.correctAnswers.includes(ans);
                      const isSelectedAnswer = isAnswered && questionResult?.selectedAnswer.includes(ans);
                      const isWrongAnswer = isSelectedAnswer && !isCorrectAnswer;

                      return (
                        <Answer key={ans} correct={isCorrectAnswer} wrong={isWrongAnswer}>
                          <span>{label}.</span>
                          {ans}
                          {isCorrectAnswer && <span style={{ color: 'green' }}> (Right Answer)</span>}
                        </Answer>
                      );
                    })}
                  </ul>
                  {!isAnswered && (
                    <p style={{ color: 'red', marginTop: '10px' }}>Question Not Answered</p>
                  )}
                </div>
              </ResizableBox>
            </QuestionContainer>
          );
        })}
      </InnerContainer>
      <Flex flxEnd>
        <Button
          text="RETRY"
          onClick={onClickRetry}
          icon={<Refresh />}
          iconPosition="left"
          bold
        />
      </Flex>
    </ResultScreenContainer>
  );
};

export default ResultScreen;