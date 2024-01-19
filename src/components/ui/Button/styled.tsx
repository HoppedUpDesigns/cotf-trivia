/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/ui/Button/styled.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file contains styled components for the Button component, defining its visual appearance.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - The file defines styled components including ButtonStyle, IconLeft, and IconRight.
 *  - ButtonStyle is the main button component with customizable properties like outline, bold, and big.
 *  - IconLeft and IconRight are styled components for positioning icons within the button.
 *  - The file uses styled-components library to leverage dynamic styling based on the props.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial creation of the styled components for the Button.
 *  - Added responsive styles and interactivity (like hover and active states).
 *  - Integrated theme colors and other styling parameters from the global theme.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - The separation of styling into a different file helps maintain cleaner code in the main Button component file.
 *  - The use of styled-components allows for more dynamic and reusable styles, enhancing scalability and maintainability.
 ***************************************************************************************************************************/

import styled from 'styled-components'
import { device } from '../../../styles/BreakPoints'
interface ButtonType {
  outline?: boolean
  bold?: boolean
  big?: boolean
}

export const ButtonStyle = styled.button.attrs(({ outline, bold, big }: ButtonType) => ({
  outline,
  bold,
  big,
}))`
  width: 195px;
  min-height: 50px;
  color: ${({ theme, outline }) =>
    outline ? theme.colors.outlineButtonText : theme.colors.buttonText};
  background: ${({ theme, outline }) =>
    outline ? theme.colors.cardBackground : theme.colors.buttonBackground};
  font-size: clamp(16px, 5vw, 24px);
  border: 1px solid
    ${({ theme, outline }) => (!outline ? 'none' : theme.colors.themeColor)};
  font-weight: ${({ bold }) => (bold ? '700' : '400')};
  border-radius: 9px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.md} {
    width: ${({ big }) => (big ? '180px' : '150px')};
    min-height: 40px;
    tap-highlight-color: transparent;
    -webkit-tap-highlight-color: transparent;
  }

  &:active {
    transform: scale(0.98);
    box-shadow: ${({ theme }) => theme.shadows.activeButton};
    transition: 0.2s all;
  }
  &:disabled {
    background: ${({ theme }) => theme.colors.disabledButton};
    color: ${({ theme }) => theme.colors.darkGray};
    cursor: not-allowed;
    transform: unset;
    box-shadow: unset;
  }
`

export const IconLeft = styled.span`
  margin-right: 10px;
  display: flex;
  svg {
    path {
      fill: ${({ theme }) => theme.colors.buttonText};
    }
  }
`

export const IconRight = styled.span`
  margin-left: 20px;
  display: flex;
  svg {
    path {
      fill: ${({ theme }) => theme.colors.buttonText};
    }
  }
`
