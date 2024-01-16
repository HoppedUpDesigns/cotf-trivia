import { FC, useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppLogo, CheckIcon, Next, Previous } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { device } from '../../styles/BreakPoints'
import { PageCenter } from '../../styles/Global'
import { ScreenTypes } from '../../types'
import Button from '../ui/Button'
import ModalWrapper from '../ui/ModalWrapper'
import Question from './Question'
import QuizHeader from './QuizHeader'

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
            selectedAnswer ? `${theme.colors.buttonText}` : `${theme.colors.darkGray}`};
        }
      }
    }
  }
`

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
`

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
`

const QuestionScreen: FC = () => {
  const [activeQuestion, setActiveQuestion] = useState<number>(0)
  const [selectedAnswer, setSelectedAnswer] = useState<string[]>([])
  const [showResultModal, setShowResultModal] = useState<boolean>(false)

  const {
    questions,
    quizDetails,
    result,
    setResult,
    setCurrentScreen,
  } = useQuiz();

  const currentQuestion = questions[activeQuestion];
  const { question, type, choices, image } = currentQuestion;

  const onClickNext = () => {
    const isMatch = selectedAnswer.length === currentQuestion.correctAnswers.length &&
                    selectedAnswer.every(answer => currentQuestion.correctAnswers.includes(answer));
    
    const questionAlreadyAnsweredIndex = result.findIndex(res => res.question === currentQuestion.question);

    if (questionAlreadyAnsweredIndex === -1) {
      setResult([...result, { ...currentQuestion, selectedAnswer, isMatch }]);
    } else {
      const updatedResult = [...result];
      updatedResult[questionAlreadyAnsweredIndex] = { ...currentQuestion, selectedAnswer, isMatch };
      setResult(updatedResult);
    }

    if (activeQuestion === quizDetails.userSelectedNumberOfQuestions - 1) {
      setShowResultModal(true);
    } else {
      setActiveQuestion(prev => prev + 1);
    }
    setSelectedAnswer([]);
  };
  
  // Handler for the Previous button click
  const onClickPrevious = () => {
    if (activeQuestion > 0) {
      setActiveQuestion(activeQuestion - 1);
    }
  };

  const handleAnswerSelection = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target

    if (type === 'MAQs') {
      if (selectedAnswer.includes(name)) {
        setSelectedAnswer((prevSelectedAnswer) =>
          prevSelectedAnswer.filter((element) => element !== name)
        )
      } else {
        setSelectedAnswer((prevSelectedAnswer) => [...prevSelectedAnswer, name])
      }
    }

    if (type === 'MCQs' || type === 'boolean') {
      if (checked) {
        setSelectedAnswer([name])
      }
    }
  }

  const handleModal = () => {
    setCurrentScreen(ScreenTypes.ResultScreen)
    document.body.style.overflow = 'auto'
  }

  // to prevent scrolling when modal is opened
  useEffect(() => {
    if (showResultModal) {
      document.body.style.overflow = 'hidden'
    }
  }, [showResultModal])

  return (
    <PageCenter>
      <LogoContainer>
        <AppLogo />
      </LogoContainer>
      <QuizContainer selectedAnswer={selectedAnswer.length > 0}>
      <QuizHeader
          activeQuestion={activeQuestion}
          userSelectedNumberOfQuestions={quizDetails.userSelectedNumberOfQuestions} // Pass this prop
        />
        <Question
          question={question}
          image={image}
          choices={choices}
          type={type}
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
      {/* finish quiz modal*/}
      {(showResultModal) && (
        <ModalWrapper
        title="Done!"
        subtitle={`You have attempted ${result.length} questions in total.`}
        onClick={handleModal}
        icon={<CheckIcon />}
        buttonTitle="SHOW RESULT"
      />
      )}
    </PageCenter>
  )
}

export default QuestionScreen
