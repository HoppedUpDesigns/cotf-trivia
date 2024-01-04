/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/hooks/useTimer.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file contains the useTimer custom hook, which is responsible for managing the countdown timer functionality in quiz applications.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Decrements the timer value every second.
 *                 - Triggers modal display and sets end time when the timer runs out or when the quiz is completed.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Implemented countdown logic to decrement the timer.
 *     - Added functionality to handle end time calculation and modal display when the timer runs out or the quiz is completed.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - The hook uses the useEffect React hook to manage side effects related to the timer countdown and modal display.
 *     - It's designed to work closely with the quiz application's state management system to provide a seamless user experience.
 ***************************************************************************************************************************/

import { Dispatch, SetStateAction, useEffect } from 'react'

interface QuizDetails {
  totalTime: number
}

const useTimer = (
  timer: number,
  quizDetails: QuizDetails,
  setEndTime: (time: number) => void,
  setTimer: Dispatch<SetStateAction<number>>,
  setShowTimerModal: (time: boolean) => void,
  showResultModal: boolean
) => {
  useEffect(() => {
    if (timer <= 0) {
      const timeTaken = quizDetails.totalTime
      setEndTime(timeTaken)
      setShowTimerModal(true)
      setTimer(0)
    }
  }, [timer, quizDetails.totalTime, setEndTime, setShowTimerModal, setTimer])

  useEffect(() => {
    if (!showResultModal) {
      const countTimer = setTimeout(() => {
        setTimer((prevTimer) => prevTimer - 1)
      }, 1000)
      return () => clearTimeout(countTimer)
    }
  }, [timer, setTimer])
}

export default useTimer
