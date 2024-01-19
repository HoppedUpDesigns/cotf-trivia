/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/styles/styled.d.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file extends the default theme provided by styled-components with custom theme properties specific 
 *               to the COTF Trivia application. It defines the structure of the Theme interface, which includes color 
 *               schemes, shadows, paddings, and margins.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: By extending the DefaultTheme from styled-components, this file allows for the consistent application 
 *                 of the theme throughout the app. It enables easy access to the defined theme properties (like colors, 
 *                 shadows, and layout measures) in any styled component, ensuring a cohesive look and feel.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: Enhanced the theme structure to include new color schemes and layout properties. Refactored the theme 
 *               to improve readability and ease of use across the application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: The theme defined in this file is crucial for the styling and appearance of the app. Updates or changes to 
 *        this file should be made with consideration of its wide-reaching impact across all styled components in the app.
 ***************************************************************************************************************************/

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
  // fonts: {
  //   anekMalayalam: string
  // }
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
