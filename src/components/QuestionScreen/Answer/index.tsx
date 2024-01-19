/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/QuestionScreen/Answer/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file contains the Answer component, which is responsible for rendering individual answer options within the QuestionScreen.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality:
 *   - Displays answer choices for each question in the quiz.
 *   - Highlights the selected answer based on user interaction.
 *   - Handles changes in selection of answers (for both single and multiple choice questions).
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made:
 *     - Initial creation and setup of the Answer component.
 *     - Added styling and interactivity for answer selection.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes:
 *     - The component supports both single-choice (radio) and multiple-choice (checkbox) answers.
 *     - It is styled to visually represent the selection state of each answer.
 ***************************************************************************************************************************/

import { FC } from "react";
import styled, { css } from "styled-components";
import { device } from "../../../styles/BreakPoints";

// Styled component for the overall style of an answer option.
const AnswerStyle = styled.div<{ highlightAnswer: boolean }>`
  font-size: clamp(18px, 4vw, 16px);
  color: ${({ theme }) => theme.colors.secondaryText};
  font-weight: 400;
  border: 1px solid ${({ highlightAnswer, theme }) =>
    highlightAnswer ? `${theme.colors.themeColor}` : `${theme.colors.border}`};
  background-color: ${({ highlightAnswer, theme }) =>
    highlightAnswer
      ? `${theme.colors.selectedAnswer}`
      : `${theme.colors.answerBg}`};
  border-radius: 16px;
  margin-top: clamp(13px, calc(10px + 6 * ((100vw - 600px) / 1320)), 16px);
  cursor: pointer;
  ${({ highlightAnswer }) =>
    highlightAnswer && css`transition: border 0.2s ease-in;`}
  @media ${device.md} {
    font-weight: 500;
  }
  input {
    visibility: hidden;
    margin: 0;
  }
`;

// Styled label for each answer option.
const AnswerLabel = styled.label`
  padding: 18px;
  display: flex;
  cursor: pointer;
  @media ${device.md} {
    padding: 14px;
  }
`;

// Styled component for the choice label (A, B, C, D, etc.).
const ChoiceLabel = styled.span``;

interface AnswerProps {
  index: number; // Index of the answer in the choices array.
  choice: string; // Text of the choice.
  type: string; // Type of question (MAQs or MCQs).
  selectedAnswer: string[]; // Array of selected answers for MAQs or the selected answer for MCQs.
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Handler function for answer selection changes.
}

// The Answer component.
const Answer: FC<AnswerProps> = ({
  onChange,
  index,
  choice,
  type,
  selectedAnswer,
}) => {
  const label = String.fromCharCode(65 + index); // Convert index to an alphabet label (A, B, C, etc.)

  return (
    <AnswerStyle key={index} highlightAnswer={selectedAnswer.includes(choice)}>
      <AnswerLabel>
        <ChoiceLabel>{label}.</ChoiceLabel>
        <input
          name={choice}
          type={type === "MAQs" ? "checkbox" : "radio"}
          checked={selectedAnswer.includes(choice)}
          onChange={onChange}
        />
        {choice}
      </AnswerLabel>
    </AnswerStyle>
  );
};

export default Answer;
