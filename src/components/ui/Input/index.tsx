// src/components/ui/Input/Input.tsx
import React from 'react';
import styled from 'styled-components';

const StyledInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  font-size: 16px;
`;

interface InputProps {
  type?: string;
  value: string | number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  min?: number;
  max?: number;
}

const Input: React.FC<InputProps> = ({ type = 'text', value, onChange, min, max }) => (
  <StyledInput type={type} value={value} onChange={onChange} min={min} max={max} />
);

export default Input;
