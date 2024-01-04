
/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/ResultScreen/RightAnswer/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the RightAnswer component, which is responsible for displaying the correct answers to the quiz questions. It is typically used in the result screen to show users the correct responses for the questions they got wrong.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Displays the correct answers for quiz questions.
 *                 - Formats and highlights the correct answers for better visibility.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial creation of the component to display correct answers.
 *     - Added functionality to handle multiple correct answers for a single question.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - This component enhances user learning by providing feedback on the correct answers post-quiz.
 *     - Consider adding explanations for why answers are correct in future iterations for an enhanced learning experience.
 ***************************************************************************************************************************/
import { FC } from 'react'
import styled from 'styled-components'
import { HighlightedText } from '../../../styles/Global'

interface RightAnswerProps {
  correctAnswers: string[]
  choices: string[]
}

const RightAnswerContainer = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.darkerGray};
  margin-top: 15px;
  line-height: 1.2;
`

const RightAnswer: FC<RightAnswerProps> = ({ correctAnswers, choices }) => {
  return (
    <RightAnswerContainer>
      {`Right ${correctAnswers.length < 2 ? 'Answer' : 'Answers'}: `}
      {correctAnswers.map((item: string, index: number) => {
        const label = String.fromCharCode(65 + choices.indexOf(item))

        return (
          <HighlightedText key={index} themeText>
            {`${label} (${item})${index !== correctAnswers.length - 1 ? ', ' : ''}`}
          </HighlightedText>
        )
      })}
    </RightAnswerContainer>
  )
}

export default RightAnswer
