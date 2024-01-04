/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/App.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: The main entry point for the cotf Trivia application. It sets up the theme provider, global styles, and the main quiz context provider. It also includes a toggle for switching between light and dark themes.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *     - ThemeProvider: Provides a theme to all styled components within the app.
 *     - GlobalStyles: Applies global styles to the entire application.
 *     - QuizProvider: Provides the quiz context to all components within the application.
 *     - ToggleTheme: Allows users to switch between light and dark themes.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Implemented ThemeProvider for theme switching capabilities.
 *     - Integrated QuizProvider to manage quiz-related state throughout the app.
 *     - Added ToggleTheme for dynamic theme adjustments.
 *     - Applied GlobalStyles to ensure consistent styling.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - This file acts as the central hub for managing the application's layout, theme, and global context.
 *     - Future updates may include more nuanced theme management and additional context providers for expanded functionality.
 ***************************************************************************************************************************/

import { useState } from 'react'
import { ThemeProvider } from 'styled-components'
import Main from './components/Main'
import ToggleTheme from './components/ui/ToggleTheme'
import QuizProvider from './context/QuizContext'
import { GlobalStyles } from './styles/Global'
import { themes } from './styles/Theme'

function App() {
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme')
    return savedTheme || 'light'
  })

  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target
    setCurrentTheme(checked ? 'dark' : 'light')
    localStorage.setItem('theme', checked ? 'dark' : 'light')
  }

  const theme = currentTheme === 'light' ? themes.light : themes.dark

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <QuizProvider>
        <ToggleTheme
          onChange={toggleTheme}
          currentTheme={currentTheme}
          checked={currentTheme === 'dark'}
          id="toggleTheme"
          value="theme"
        />
        <Main />
      </QuizProvider>
    </ThemeProvider>
  )
}

export default App
