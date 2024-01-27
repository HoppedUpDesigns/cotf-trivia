/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/hooks/useTimer.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file contains the custom hook 'useTimer' used to manage the countdown timer in the quiz application.
 *  - It handles the logic for decrementing the timer, triggering end-time actions, and displaying time-related modals.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Manages countdown timer for each quiz session.
 *  - Executes actions when the timer reaches zero or the quiz ends.
 *  - Integrates with other components to display time-related notifications and results.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/26/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial creation of the useTimer hook with basic countdown functionality.
 *  - Added integration with result modal and timer modal for enhanced UX.
 *  - Optimized timer performance and reliability.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - The hook can be further enhanced by adding pause/resume functionality.
 *  - Ensure the timer's accuracy and smoothness across different devices and browsers.
 ***************************************************************************************************************************/

import { useEffect } from 'react';

const useTimer = (
  timer: number,
  onTimerEnd: () => void,
  setTimer: React.Dispatch<React.SetStateAction<number>>
) => {
  useEffect(() => {
    if (timer <= 0) {
      onTimerEnd();
    } else {
      const timeoutId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [timer, onTimerEnd, setTimer]);
};

export default useTimer;
