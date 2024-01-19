/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/ui/ToggleTheme/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file contains the ToggleTheme component, which allows users to switch between light and dark themes in the application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - The ToggleTheme component uses a checkbox input for toggling themes and custom animations for a smooth transition.
 *  - It shows a sun icon for the light theme and a moon icon for the dark theme, providing a visual representation of the current theme.
 *  - Styled components are used to style the toggle button and animations for switching themes.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial creation of the ToggleTheme component with animations and theme-specific icons.
 *  - Implemented theme switching functionality using React's context and state management.
 *  - Enhanced user experience with smooth transition animations and responsive design.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - This component is crucial for providing users the flexibility to choose their preferred theme, enhancing accessibility and user experience.
 *  - The use of keyframes for animations adds a polished feel to the theme switching action.
 ***************************************************************************************************************************/

import React, { FC } from 'react'
import styled, { keyframes } from 'styled-components'
import { Moon, Sun } from '../../../config/icons'

const ToggleLabel = styled.label`
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.themeText};
  display: flex;
  align-items: center;
  position: absolute;
  top: 12px;
  right: 25px;
`

const SlideOn = keyframes`
  0% {
    transform: translateX(0) scale(1);
  }
  50% {
    transform: translateX(15px) scale(1.1);
  }
  100% {
    transform: translateX(23px) scale(1);
  }
`

const SlideOff = keyframes`
  0% {
    transform: translateX(23px) scale(1);
  }
  50% {
    transform: translateX(15px) scale(1.1);
  }
  100% {
    transform: translateX(0px) scale(1);
  }
`

const ToggleInput = styled.input`
  visibility: hidden;
  border: 1px solid red;
  margin: 0;
  &:checked + span {
    background-color: ${({ theme }) => theme.colors.dark};
    svg {
      animation: ${SlideOn} 0.2s linear forwards;
    }
  }
  &:checked + span::after {
    background-color: ${({ theme }) => theme.colors.white};
    animation: ${SlideOn} 0.2s linear forwards;
  }
`

const Ball = styled.span`
  width: 52px;
  height: 26px;
  background-color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  cursor: pointer;
  border-radius: 50px;
  position: relative;
  svg {
    position: absolute;
    top: 5px;
    left: 7px;
    z-index: 1;
    animation: ${SlideOff} 0.2s linear forwards;
  }
  &::after {
    content: '';
    width: 21px;
    height: 21px;
    background-color: ${({ theme }) => theme.colors.dark};
    border-radius: 50%;
    display: inline-block;
    position: absolute;
    top: 3px;
    left: 5px;
    align-items: center;
    justify-content: center;
    animation: ${SlideOff} 0.2s linear forwards;
  }
`

interface ToggleThemeProps {
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  id: string
  value: string
  checked: boolean
  currentTheme: string
}

const ToggleTheme: FC<ToggleThemeProps> = ({
  onChange,
  id,
  value,
  checked,
  currentTheme,
}) => {
  return (
    <ToggleLabel htmlFor={id}>
      Mode:
      <ToggleInput
        type="checkbox"
        id={id}
        onChange={onChange}
        value={value}
        checked={checked}
      />
      <Ball>{currentTheme === 'light' ? <Sun /> : <Moon />}</Ball>
    </ToggleLabel>
  )
}

export default ToggleTheme
