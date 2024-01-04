/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/QuestionScreen/Question/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the Question component, used within the QuestionScreen to display quiz questions and their associated answer options.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Renders the question text and an optional image if provided.
 *                 - Displays answer choices using the Answer component, handling the selection of answers.
 *                 - Supports different types of questions, such as multiple-choice or single-answer.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial creation of the Question component with support for text-based questions and answer selection.
 *     - Added functionality to display an image with a question if applicable.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - This component is integral to the quiz-taking experience, ensuring users can view and interact with each question.
 *     - Ensure the Answer component is properly integrated to handle answer selections.
 *     - Consider extending this component to handle different types of questions beyond text and image-based ones.
 ***************************************************************************************************************************/
import { FC } from 'react'
import styled from 'styled-components'
import { device } from '../../../styles/BreakPoints'
import Answer from '../Answer'
import QuizImage from '../../ui/QuizImage'

const QuestionContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 88%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

const AnswersContainer = styled.div`
  max-width: 78%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

const QuestionStyle = styled.h2`
  font-size: clamp(18px, 4vw, 28px);
  font-weight: 500;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 1.3;
`

interface QuestionTypes {
  question: string
  image?: string
  type: string
  choices: string[]
  selectedAnswer: string[]
  handleAnswerSelection: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
}

const Question: FC<QuestionTypes> = ({
  question,
  image,
  type,
  choices,
  selectedAnswer,
  handleAnswerSelection,
}) => {
  return (
    <QuestionContainer>
      <QuestionStyle>{question}</QuestionStyle>
      {/* if question contains an image */}
      {image && <QuizImage image={image} />}
      <AnswersContainer>
        {choices.map((choice, index) => (
          <Answer
            choice={choice}
            index={index}
            key={index}
            onChange={(e) => handleAnswerSelection(e, index)}
            type={type}
            selectedAnswer={selectedAnswer}
          />
        ))}
      </AnswersContainer>
    </QuestionContainer>
  )
}

export default Question
