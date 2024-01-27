/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/Main/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file contains the Main component, which is responsible for rendering different screens based on the current quiz state.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *   - Manages the routing logic for different quiz screens.
 *   - Utilizes the QuizContext to determine the current screen to be displayed.
 *   - Maps ScreenTypes to their respective components.
 *   - Uses a timer to transition from the SplashScreen to the QuizTopicsScreen.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/26/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial creation and setup of routing for quiz screens.
 *     - Added useEffect to transition from SplashScreen to QuizTopicsScreen.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - This is a central component for managing the display of different screens in the quiz application.
 *     - The transition delay from the SplashScreen is configurable.
 ***************************************************************************************************************************/

import { useEffect } from 'react';
import { useQuiz } from '../../context/QuizContext';
import { ScreenTypes } from '../../types';
import QuestionScreen from '../QuestionScreen';
import QuizDetailsScreen from '../QuizDetailsScreen';
import QuizTopicsScreen from '../QuizTopicsScreen';
import ResultScreen from '../ResultScreen';
import SplashScreen from '../SplashScreen';

function Main() {
  const { currentScreen, setCurrentScreen } = useQuiz();

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizTopicsScreen);
    }, 1000);
  }, [setCurrentScreen]);

  const screenComponents = {
    [ScreenTypes.SplashScreen]: <SplashScreen />,
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
  };

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />;

  return <>{ComponentToRender}</>;
}

export default Main;