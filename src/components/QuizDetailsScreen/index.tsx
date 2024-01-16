import React, { useState } from "react";
import styled from 'styled-components'
import { AppLogo, StartIcon } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { useShuffleQuestions } from '../../hooks'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'
import Button from '../ui/Button'

const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.themeColor};
`

const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`

const DetailText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  line-height: 1.3;
`

const NumericInput = styled.input`
  margin-left: 10px;
  padding: 5px;
  width: 50px;
  ::-webkit-inner-spin-button, ::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  -moz-appearance: textfield;
`;

const ErrorMessage = styled.p`
  color: red;
  margin-top: 10px;
`;

const QuizDetailsScreen = () => {
  // Use the shuffle questions hook
  useShuffleQuestions();

  const { quizDetails, setCurrentScreen, updateQuizDetails } = useQuiz();
  const [userInput, setUserInput] = useState("");
  const [error, setError] = useState("");

  // This function updates the userInput state whenever the input value changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setUserInput(value);

    // Validate the input value and set error message if invalid
    if (!value) {
      setError("Please enter a number");
    } else if (
      !isNaN(Number(value)) &&
      Number(value) >= 1 &&
      Number(value) <= quizDetails.totalQuestions
    ) {
      setError("");
    } else {
      setError(`Enter a number between 1 and ${quizDetails.totalQuestions}`);
    }
  };

  // This function handles the transition to the QuestionScreen
  const goToQuestionScreen = () => {
    const numberOfQuestions = Number(userInput);
    if (numberOfQuestions && numberOfQuestions > 0 && numberOfQuestions <= quizDetails.totalQuestions) {
      updateQuizDetails({ userSelectedNumberOfQuestions: numberOfQuestions });
      setCurrentScreen(ScreenTypes.QuestionScreen);
    } else {
      setError("Please enter a valid number of questions");
    }
  };
  
  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <AppTitle>COTF TRIVIA</AppTitle>
        <DetailTextContainer>
          <DetailText>
            Selected Quiz Topic:{" "}
            <HighlightedText>{quizDetails.selectedQuizTopic}</HighlightedText>
          </DetailText>
          <DetailText>
            Total questions available from the selected quiz:{" "}
            <HighlightedText>{quizDetails.totalQuestions}</HighlightedText>
          </DetailText>
          <DetailText>
            <label htmlFor="userInput">
              How many questions would you like to attempt?
            </label>
            <NumericInput
              type="number"
              value={userInput}
              onChange={handleInputChange}
              min="1"
              max={quizDetails.totalQuestions}
              id="userInput"
              name="userInput"
            />
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </DetailText>
        </DetailTextContainer>
        <Button
          text="Start"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  );
};

export default QuizDetailsScreen;
