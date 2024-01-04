/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/styles/Theme.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines and exports the light and dark themes for the application, specifying colors, fonts, shadows, paddings, and margins for each theme.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: It provides a consistent theme structure for the application by offering a 'themes' object containing 'light' and 'dark' theme configurations to be applied throughout the application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: Added a new dark theme configuration with customized color schemes, adjusted font settings, and refined shadows for improved readability and user experience in dark mode.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: Ensure themes are accessible and meet contrast standards. Test changes with different user scenarios to ensure a consistent and comfortable user experience.
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
      background: '#E5E5E5',
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
    fonts: {
      anekMalayalam: 'Anek Malayalam',
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
    fonts: {
      anekMalayalam: 'Anek Malayalam',
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
