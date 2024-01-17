/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/App.test.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file contains tests for the main App component of the 'COTF Trivia' application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: It includes tests to ensure that the App component renders correctly and that key elements 
 *                 such as links or specific text are present on the screen when the application starts.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/16/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *    - Initial creation of the test file with basic render test for the App component.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *    - Tests are written using React Testing Library.
 *    - As the application evolves, more tests should be added to cover new features and components.
 ***************************************************************************************************************************/

import { render, screen } from '@testing-library/react'; // Importing functions from React Testing Library
import App from './App'; // Importing the App component to be tested

// Test to check if the App component renders a specific link or text
test('renders learn react link', () => {
  render(<App />); // Renders the App component in a virtual DOM for testing
  const linkElement = screen.getByText(/learn react/i); // Queries the virtual DOM for text that matches 'learn react'
  expect(linkElement).toBeInTheDocument(); // Asserts that the queried text is present in the rendered component
});
