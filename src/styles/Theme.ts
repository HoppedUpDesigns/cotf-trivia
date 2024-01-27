/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/styles/Theme.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the light and dark themes for the COTF Trivia application. Each theme includes color schemes, 
 *               shadows, paddings, and margins, tailored to provide a distinct appearance for the application in different modes.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: The themes are used throughout the app to ensure consistency in appearance and user experience. This file 
 *                 centralizes the definition of color schemes and other stylistic details, making them easily accessible and 
 *                 modifiable. It leverages the styled-components theming capability for dynamic theme switching.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/26/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: Added dark theme with distinct color schemes and adjusted existing light theme properties for improved contrast 
 *               and readability.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: Any changes to this file will affect the global appearance of the application. Care should be taken to maintain 
 *        harmony between light and dark themes and to ensure accessibility standards are met.
 ***************************************************************************************************************************/

import { Theme } from './styled'

export const themes: Record<string, Theme> = {
  light: {
    colors: {
      primaryText: '#11052C', // question text color
      secondaryText: '#2D264B', // answer text color
      themeText: '#000000',
      themeColor: '#800080',
      themeGradient: 'linear-gradient(to right,#800080, #FFC0CB)',
      background: '#00c073',
      cardBackground: '#FFFFFF',
      selectTopicBg: '#FFFFFF',
      appLogo: '#000000',
      buttonText: '#FFFFFF',
      outlineButtonText: '#800080',
      buttonBackground: 'linear-gradient(90.04deg, #800080 0.03%, #FFC0CB 99.96%)',
      selectedAnswer: '#FFD6FF',
      infoText: '#FF783F', // skip tag text
      infoBackground: '#ffb23f26', // skip tag background
      border: '#EAEAEA',
      answerBg: '#ffffff',
      disabledCard: '#fbf4ecbc',
      disabledButton: '#e7e8e9',
      success: '#12B40E',
      successLight: '#DDFFDC',
      danger: '#FF143E',
      dangerLight: '#FFD7DE',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#282526',
      darkGray: '#9fa3a9',
      darkerGray: '#817a8e',
    },
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
    },
    paddings: {
      container: '15px',
      pageTop: '30px',
    },
    margins: {
      pageTop: '30px',
    },
  },
  dark: {
    colors: {
      primaryText: '#FFFFFF', // question text color
      secondaryText: '#FFFFFF', // answer text color
      themeText: '#FFFFFF',
      themeColor: '#C000C0',
      themeGradient: 'linear-gradient(90deg, #0e050e 0%, #281e20 100%)',
      background: 'linear-gradient(90deg, #0e050e 0%, #281e20 100%)',
      cardBackground: '#241a1a',
      selectTopicBg: '#21191C',
      appLogo: '#FFFFFF',
      buttonText: '#000000',
      outlineButtonText: '#ffffff',
      buttonBackground: 'linear-gradient(90.04deg, #800080 0.03%, #FFC0CB 99.96%)',
      selectedAnswer: '#151113',
      infoText: '#FF783F', // skip tag text
      infoBackground: '#ffb23f26', // skip tag background
      border: 'transparent',
      answerBg: '#151113',
      disabledCard: '#00000080',
      disabledButton: '#181214',
      success: '#12B40E',
      successLight: '#151113',
      danger: '#FF143E',
      dangerLight: '#151113',
      white: '#FFFFFF',
      black: '#000000',
      dark: '#282526',
      darkGray: '#9fa3a9',
      darkerGray: '#817a8e',
    },
    shadows: {
      activeButton: '3px 2px 22px 1px rgba(0, 0, 0, 0.24)',
    },
    paddings: {
      container: '15px',
      pageTop: '30px',
    },
    margins: {
      pageTop: '30px',
    },
  },
}
