/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/Main/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: The Main component is the core script responsible for controlling the display of different screens in the quiz application. 
 *               It utilizes the QuizContext to manage and render the appropriate screen based on the current quiz state.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Utilizes the useQuiz hook from the QuizContext to manage the current screen state.
 *                 - Dynamically renders different quiz screens based on the current state, including splash, topic selection, 
 *                   quiz details, questions, and results screens.
 *                 - Employs a useEffect hook to transition from the splash screen to the quiz topics screen after a set timeout.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Implemented dynamic screen rendering based on quiz state.
 *     - Added transition from splash screen to quiz topics screen.
 *     - Integrated the useQuiz hook for state management.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - Ensure the QuizContext is properly configured and wrapping the Main component in the component tree.
 *     - Update the ScreenTypes and corresponding components as needed for new quiz features or screens.
 ***************************************************************************************************************************/
import { useEffect } from 'react'

import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'

import QuestionScreen from '../QuestionScreen'
import QuizDetailsScreen from '../QuizDetailsScreen'
import QuizTopicsScreen from '../QuizTopicsScreen'
import ResultScreen from '../ResultScreen'
import SplashScreen from '../SplashScreen'

function Main() {
  const { currentScreen, setCurrentScreen } = useQuiz()

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizTopicsScreen)
    }, 1000)
  }, [setCurrentScreen])

  const screenComponents = {
    [ScreenTypes.SplashScreen]: <SplashScreen />,
    [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
    [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
    [ScreenTypes.QuestionScreen]: <QuestionScreen />,
    [ScreenTypes.ResultScreen]: <ResultScreen />,
  }

  const ComponentToRender = screenComponents[currentScreen] || <SplashScreen />

  return <>{ComponentToRender}</>
}

export default Main
