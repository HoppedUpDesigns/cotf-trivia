/*************************************************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/QuestionScreen/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the QuestionScreen component, which is responsible for displaying individual quiz questions and managing quiz flow.
 *               It includes question rendering, answer selection, and navigation controls.
 * -----------------------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *    - Manages state for the current question index, selected answers, and the display of the result modal.
 *    - Renders the question text, choices, and associated image (if any) from the quiz data.
 *    - Utilizes a custom hook to shuffle answer choices to ensure randomness.
 *    - Implements navigation functionality, allowing the user to move between questions and submit answers.
 *    - Handles answer selection, updating state with the user's selected answers.
 *    - Determines if the user's answer is correct and updates the result accordingly.
 *    - Displays a modal with quiz results and an option to retry upon completing the last question.
 * -----------------------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * -----------------------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/22/2024
 * -----------------------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made:
 *     - Integrated useShuffledChoices hook for randomizing choice order.
 *     - Enhanced answer checking and result updating logic.
 *     - Improved responsiveness and user interaction flow.
 * -----------------------------------------------------------------------------------------------------------------------------------------------------------
 * Notes:
 *     - This component is central to the quiz-taking experience, providing an interactive interface for answering questions.
 *     - It ensures a dynamic and engaging user experience by randomizing answer choices and providing immediate feedback.
 *     - The component is designed to be reusable and adaptable for various types of quizzes.
 *************************************************************************************************************************************************************/

import { FC, useState } from "react";
import styled from "styled-components";
import { Dragonfly, Next, Previous, Done, TimesUp } from "../../config/icons";
import { useQuiz } from "../../context/QuizContext";
import { device } from "../../styles/BreakPoints";
import { PageCenter } from "../../styles/Global";
import { ScreenTypes } from "../../types";
import Button from "../ui/Button";
import ModalWrapper from "../ui/ModalWrapper";
import Question from "./Question";
import QuizHeader from "./QuizHeader";
import useShuffledChoices from "../../hooks/useShuffleChoices";
import useTimer from "../../hooks/useTimer";

const QuizContainer = styled.div<{ selectedAnswer: boolean }>`
  width: 900px;
  min-height: 500px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 4px;
  padding: 30px 60px 80px 60px;
  margin-bottom: 70px;
  position: relative;
  @media ${device.md} {
    width: 100%;
    padding: 15px 15px 80px 15px;
  }
  button {
    span {
      svg {
        path {
          fill: ${({ selectedAnswer, theme }) =>
            selectedAnswer
              ? `${theme.colors.buttonText}`
              : `${theme.colors.darkGray}`};
        }
      }
    }
  }
`;

const LogoContainer = styled.div`
  margin-top: 50px;
  margin-bottom: 50px;
  @media ${device.md} {
    margin-top: 10px;
    margin-bottom: 20px;
    svg {
      width: 185px;
      height: 80px;
    }
  }
`;

const ButtonWrapper = styled.div`
  position: absolute;
  right: 60px;
  bottom: 30px;
  display: flex;
  gap: 20px;
  @media ${device.sm} {
    justify-content: flex-end;
    width: 90%;
    right: 15px;
  }
`;

const QuestionScreen: FC = () => {
  const { questions, quizDetails, result, setResult, setCurrentScreen } = useQuiz();
  const totalQuizTime = quizDetails.userSelectedNumberOfQuestions * 10; // Total time for the quiz in seconds
  const [timer, setTimer] = useState(totalQuizTime);
  const [activeQuestion, setActiveQuestion] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([]);
  const [showResultModal, setShowResultModal] = useState<boolean>(false);
  const [timeExpired, setTimeExpired] = useState<boolean>(false); // Flag to track if time has expired
  const [quizCompleted, setQuizCompleted] = useState(false); // State to determine if the quiz is finished

  const shuffledChoices = useShuffledChoices(questions[activeQuestion].choices);

  const handleTimerEnd = () => {
    setTimeExpired(true);
    setShowResultModal(true);
  };

  useTimer(timer, handleTimerEnd, setTimer);

  const onClickNext = () => {
    const currentQuestion = questions[activeQuestion];
    let isMatch = false;

    if (currentQuestion.type === 'MAQs' || currentQuestion.type === 'MCQs') {
      isMatch = selectedAnswer.length === currentQuestion.correctAnswers.length &&
                selectedAnswer.every(answer => currentQuestion.correctAnswers.includes(answer));
    }

    if (currentQuestion.type === 'boolean') {
      isMatch = selectedAnswer.includes(currentQuestion.correctAnswers[0]);
    }

    const questionAlreadyAnsweredIndex = result.findIndex(res => res.question === currentQuestion.question);

    if (questionAlreadyAnsweredIndex === -1) {
      setResult([...result, { ...currentQuestion, selectedAnswer, isMatch }]);
    } else {
      const updatedResult = [...result];
      updatedResult[questionAlreadyAnsweredIndex] = { ...currentQuestion, selectedAnswer, isMatch };
      setResult(updatedResult);
    }

    if (activeQuestion === quizDetails.userSelectedNumberOfQuestions - 1) {
      setQuizCompleted(true);
      setShowResultModal(true);
    } else {
      setActiveQuestion(prev => prev + 1);
    }
    setSelectedAnswer([]);
  };

  const onClickPrevious = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    }
  };

  const handleAnswerSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    const currentType = questions[activeQuestion].type;

    if (currentType === 'MAQs') {
      if (checked) {
        setSelectedAnswer((prevSelectedAnswer) => [...prevSelectedAnswer, name]);
      } else {
        setSelectedAnswer((prevSelectedAnswer) =>
          prevSelectedAnswer.filter((element) => element !== name)
        );
      }
    }

    if (currentType === 'MCQs' || currentType === 'boolean') {
      setSelectedAnswer(checked ? [name] : []);
    }
  };

  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen);
    document.body.style.overflow = 'auto';
  };

  return (
    <PageCenter>
      <LogoContainer>
        <Dragonfly />
      </LogoContainer>
      <QuizContainer selectedAnswer={selectedAnswer.length > 0}>
        <QuizHeader
          activeQuestion={activeQuestion}
          totalQuestions={quizDetails.userSelectedNumberOfQuestions}
          timer={timer}
        />
        <Question
          question={questions[activeQuestion].question}
          image={questions[activeQuestion].image}
          choices={shuffledChoices}
          type={questions[activeQuestion].type}
          handleAnswerSelection={handleAnswerSelection}
          selectedAnswer={selectedAnswer}
        />
        <ButtonWrapper>
          <Button
            text={"Previous"}
            onClick={onClickPrevious}
            icon={<Previous />}
            iconPosition="left"
            disabled={activeQuestion === 0}
          />
          <Button
            text={activeQuestion === quizDetails.userSelectedNumberOfQuestions - 1 ? "Finish" : "Next"}
            onClick={onClickNext}
            icon={<Next />}
            iconPosition="right"
            disabled={selectedAnswer.length === 0}
          />
        </ButtonWrapper>
      </QuizContainer>
      {showResultModal && (
        <ModalWrapper
          title={timeExpired && !quizCompleted ? "Time's Up!" : "Done!"}
          onClick={handleModal}
          icon={timeExpired && !quizCompleted ? <TimesUp /> : <Done />}
          buttonTitle="SHOW RESULT"
        />
      )}
    </PageCenter>
  );
};

export default QuestionScreen;
    
