/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/setupTests.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file is used to set up configurations and extensions for testing the application using Jest and the React Testing Library.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: It configures the testing environment by importing extensions that enhance Jest's testing capabilities, particularly for React applications.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial setup to include '@testing-library/jest-dom' for more readable and maintainable tests.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - '@testing-library/jest-dom' offers custom matchers to test the state of the DOM more expressively.
 *     - This setup file is part of Create React App's default configuration, making it easier to start writing tests for your application right away.
 ***************************************************************************************************************************/
import '@testing-library/jest-dom';
