// src/components/UserInput/QuestionInput.tsx
import React, { useState } from 'react';
import styled from 'styled-components';
import Button from "../ui/Button";
import Input from "../ui/Input";


const InputContainer = styled.div`
  margin-top: 15px;
`;

const QuestionInput: React.FC<{
  totalQuestions: number;
  setUserSelectedQuestions: React.Dispatch<React.SetStateAction<number>>;
  startQuiz: () => void;
}> = ({ totalQuestions, setUserSelectedQuestions, startQuiz }) => {
  const [inputValue, setInputValue] = useState(1);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    setInputValue(value);
  };

  const handleStartQuiz = () => {
    const selectedQuestions = Math.min(Math.max(1, inputValue), totalQuestions);
    setUserSelectedQuestions(selectedQuestions);
    startQuiz();
  };

  return (
    <InputContainer>
      <Input
        type="number"
        value={inputValue}
        onChange={handleInputChange}
        min={1}
        max={totalQuestions}
      />
      <Button text="Start Quiz" onClick={handleStartQuiz} />
    </InputContainer>
  );
};

export default QuestionInput;
