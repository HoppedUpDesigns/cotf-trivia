/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/QuestionScreen/Question/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the Question component, which is responsible for rendering a single quiz question along with its answer options.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *   - Displays the quiz question.
 *   - Renders an optional image associated with the question.
 *   - Renders answer choices using the Answer component.
 *   - Handles answer selection events.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial creation of the Question component.
 *     - Added functionality for displaying questions with images.
 *     - Integrated Answer component for rendering answer choices.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - This component is designed to be flexible, supporting different types of questions (e.g., multiple choice, boolean).
 *     - Ensure the component is responsive and accessible.
 ***************************************************************************************************************************/

import { FC } from 'react'
import styled from 'styled-components'
import { device } from '../../../styles/BreakPoints'
import Answer from '../Answer'
import QuizImage from '../../ui/QuizImage'

// Styled container for the question and its answers.
const QuestionContainer = styled.div`
  margin-top: 30px;
  margin-bottom: 40px;
  max-width: 88%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

// Container for the answers.
const AnswersContainer = styled.div`
  max-width: 78%;
  @media ${device.sm} {
    max-width: 100%;
  }
`

// Styled component for the question text.
const QuestionStyle = styled.h2`
  font-size: clamp(18px, 4vw, 28px);
  font-weight: 500;
  margin-bottom: 25px;
  color: ${({ theme }) => theme.colors.primaryText};
  line-height: 1.3;
`

// Interface for Question component props.
interface QuestionTypes {
  question: string
  image?: string
  type: string
  choices: string[]
  selectedAnswer: string[]
  handleAnswerSelection: (e: React.ChangeEvent<HTMLInputElement>, index: number) => void
}

// The Question component, displays the question text, an optional image, and answer choices.
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
      {/* Display an image if provided with the question */}
      {image && <QuizImage image={image} />}
      <AnswersContainer>
        {/* Map over the choices and render each as an Answer component */}
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

