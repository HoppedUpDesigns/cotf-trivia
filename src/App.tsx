/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/App.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the main App component of the 'COTF Trivia' application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Renders the top-level component structure for the application.
 *                 - Manages the application theme (light/dark) state.
 *                 - Provides the QuizContext to all child components.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/17/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made:
 *     - Initial creation of the App component with theme switching and QuizContext.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - The application uses styled-components for theming.
 *     - QuizProvider is used to manage quiz-related state throughout the app.
 ***************************************************************************************************************************/

import { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Main from './components/Main';
import ToggleTheme from './components/ui/ToggleTheme';
import QuizProvider from './context/QuizContext';
import { GlobalStyles } from './styles/Global';
import { themes } from './styles/Theme';

function App() {
  // State to manage the current theme (light or dark)
  const [currentTheme, setCurrentTheme] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light'; // Default to 'light' if no theme is saved
  });

  // Function to toggle the theme and save the preference to localStorage
  const toggleTheme = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setCurrentTheme(checked ? 'dark' : 'light');
    localStorage.setItem('theme', checked ? 'dark' : 'light');
  };

  // Determine the theme object based on the current theme state
  const theme = currentTheme === 'light' ? themes.light : themes.dark;

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
        <Main /> {/* Main component of the application */}
      </QuizProvider>
    </ThemeProvider>
  );
}

export default App;
