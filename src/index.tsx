/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file is the entry point for the Coheed and The Fence (COTF) Trivia application. It's responsible for rendering the root component (App) into the DOM and setting up performance reporting.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *     - Renders the App component at the root of the document.
 *     - Optionally sets up performance reporting with reportWebVitals.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Implemented React 18's createRoot for better concurrency and rendering performance.
 *     - Wrapped the App component with React.StrictMode for highlighting potential problems.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - React.StrictMode is a tool for highlighting potential problems in an application, it does not render any visible UI.
 *     - reportWebVitals is an optional tool to measure and analyze the performance of the application.
 ***************************************************************************************************************************/

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import reportWebVitals from './reportWebVitals'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
