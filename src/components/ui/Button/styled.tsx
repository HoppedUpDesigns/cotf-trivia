/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/ui/Button/styled.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file contains the styled components for the Button component, defining the visual aspects such as color, size, border, and responsiveness. It provides a consistent and theme-driven appearance for buttons throughout the application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Defines the ButtonStyle with various props for outline, bold, and big variants.
 *                 - Provides IconLeft and IconRight components for icon positioning within buttons.
 *                 - Ensures responsive and interactive design with media queries and active states.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Implemented ButtonStyle with conditional props for outline, bold, and big styles.
 *     - Added IconLeft and IconRight for flexible icon placement within buttons.
 *     - Enhanced responsiveness with media queries and interactive states for user feedback.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - The styled components in this file are closely tied to the Button component's functionality and should be updated together for consistency.
 *     - Consider extending these styles for more variants or theme adjustments as the application evolves.
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
