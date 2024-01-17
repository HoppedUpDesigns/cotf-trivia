/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/hooks/index.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file serves as a centralized export point for the custom hooks used in the quiz application.
 *  - It streamlines the import process of hooks throughout the application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Facilitates the reusability and organization of custom hooks within the application.
 *  - Enhances code readability and maintainability by providing a single source of truth for hook exports.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/16/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial setup of the file to export 'useShuffleQuestions' and 'useTimer' hooks.
 *  - Ensured the consistent and efficient export of hooks as the application grows.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - Any new custom hooks created for the application should be added to this file for export.
 *  - This approach ensures a modular and organized structure for hook management.
 ***************************************************************************************************************************/

import useShuffleQuestions from './useShuffleQuestions'
import useTimer from './useTimer'

export { useShuffleQuestions, useTimer }
