/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file serves as the entry point for the 'COTF Trivia' application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Sets up the React rendering process.
 *                 - Renders the root App component.
 *                 - Optionally includes performance measuring utilities.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial setup and rendering of the App component.
 *     - Added reportWebVitals for optional performance measuring.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - The React.StrictMode is used for highlighting potential problems in an application.
 ***************************************************************************************************************************/

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Create a root element for the React application
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render the App component into the root element with React Strict Mode
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Optional: Start measuring performance in the app
// This function can be used for logging or sending to an analytics endpoint.
reportWebVitals();
