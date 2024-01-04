/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/styles/styled.d.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file extends the styled-components module to include a custom theme interface, defining the color, font, shadow, padding, and margin properties for the application's design.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: It provides a strongly typed interface for theme properties, ensuring consistent theming and styling across the application by extending the DefaultTheme from styled-components.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: Added additional color properties for UI components, refined font settings, and updated shadow definitions for a more cohesive design language.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: When modifying this file, ensure that the theme remains coherent and accessible. Consult the design team for significant changes.
 ***************************************************************************************************************************/
// import original module declarations
import 'styled-components'

export interface Theme {
  colors: {
    primaryText: string
    secondaryText: string
    themeText: string
    themeColor: string
    themeGradient: string
    background: string
    cardBackground: string
    selectTopicBg: string
    appLogo: string
    buttonText: string
    outlineButtonText: string
    buttonBackground: string
    selectedAnswer: string
    infoText: string
    infoBackground: string
    border: string
    answerBg: string
    disabledCard: string
    disabledButton: string
    success: string
    successLight: string
    danger: string
    dangerLight: string
    white: string
    black: string
    dark: string
    darkGray: string
    darkerGray: string
  }
  fonts: {
    anekMalayalam: string
  }
  shadows: {
    activeButton: string
  }
  paddings: {
    container: string
    pageTop: string
  }
  margins: {
    pageTop: string
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
