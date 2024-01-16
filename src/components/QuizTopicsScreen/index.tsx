import React, { ReactElement } from 'react';
import styled from 'styled-components'
import { AppLogo } from '../../config/icons'
import { useQuiz } from '../../context/QuizContext'
import { quizTopics } from '../../data/quizTopics'
import { device } from '../../styles/BreakPoints'
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from '../../styles/Global'
import { ScreenTypes } from '../../types'

const Heading = styled.h2`
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  text-align: center;
`

const DetailText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  text-align: center;
`

const SelectButtonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 60%;
  gap: 30px;
  margin-top: 40px;
  margin-bottom: 45px;
  @media ${device.md} {
    row-gap: 20px;
    column-gap: 20px;
    max-width: 100%;
  }
`

interface SelectButtonProps {
  disabled?: boolean
  icon?: ReactElement;
}

const SelectButton = styled.div<SelectButtonProps>`
  background-color: ${({ disabled, theme }) =>
    disabled ? `${theme.colors.disabledCard}` : `${theme.colors.selectTopicBg}`};
  transition: background-color 0.4s ease-out, transform 0.3s ease, box-shadow 0.3s ease;
  border-radius: 10px;
  padding: 14px 10px;
  display: flex;
  align-items: center;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.2); // Shadow for 3D effect
  
  // Apply border conditionally based on theme
  border: ${({ theme }) => theme.colors.background === '#708dad' ? '1px solid #708dad' : '1px solid #B4B4B4'};

  /* Directly apply the fill color to SVG icons */
  > svg {
    fill: ${({ theme }) => theme.colors.appLogo}; // Using theme color
  }

  /* Additional specificity if needed */
  > svg path {
    fill: ${({ theme }) => theme.colors.appLogo};
  }

  &:hover {
    transform: translateY(-3px); // Raise button on hover
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.3); // Increase shadow size on hover
  }

  @media ${device.md} {
    padding: 10px;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }
`;



const SelectButtonText = styled.span`
  font-size: 18px;
  font-weight: 600;
  margin-left: 10px;
  @media ${device.md} {
    font-size: 16px;
    font-weight: 500;
  }
`

const QuizTopicsScreen: React.FC = () => {
  const { selectQuizTopic, setCurrentScreen } = useQuiz();

  const handleTopicSelect = (topic: string) => {
    selectQuizTopic(topic);
    setCurrentScreen(ScreenTypes.QuizDetailsScreen);
  };

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <Heading>
          WELCOME TO <HighlightedText> COTF TRIVIA</HighlightedText>
        </Heading>
        <DetailText>Select Topic Below To Start Your Quiz</DetailText>
        <SelectButtonContainer>
          {quizTopics.map(({ title, icon }) => (
            <SelectButton
              key={title}
              onClick={() => handleTopicSelect(title)}
            >
              {icon}
              <SelectButtonText>{title}</SelectButtonText>
            </SelectButton>
          ))}
        </SelectButtonContainer>
      </CenterCardContainer>
    </PageCenter>
  );
};
console.log(quizTopics); // Add this line to debug

export default QuizTopicsScreen
