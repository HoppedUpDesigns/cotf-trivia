/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/firebaseConfig.js
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/26/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 ***************************************************************************************************************************/

/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/firebaseConfig.js
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file contains the configuration settings for Firebase, which is used to connect and interact with Firebase services.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *   - Initializes Firebase with the specified configuration settings.
 *   - Exports the initialized Firebase app instance for use in other parts of the application.
 *   - Also exports the Firestore service for database operations.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/26/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *   - Updated Firebase import to use the compat version for compatibility with the modular API.
 *   - Added Firestore service export for database interactions.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *   - The API keys and configuration details are specific to the Firebase project and should be kept secure.
 *   - Ensure that Firebase services are enabled in the Firebase console for this configuration to work.
 ***************************************************************************************************************************/

import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

// Firebase configuration settings specific to the project
let firebaseConfig = {
  apiKey: "60829957132",
  authDomain: "cotf-trivia-4644c.firebaseapp.com",
  projectId: "cotf-trivia-4644c",
  storageBucket: "cotf-trivia-4644c.appspot.com",
  messagingSenderId: "60829957132",
  appId: "1:60829957132:web:98c50e9c5a0d6439914229",
  measurementId: "G-YJPTMZCJX3",
};

// Initialize Firebase with the specified configuration
let firebaseApp = firebase.initializeApp(firebaseConfig);

// Export the initialized Firebase app for use in other parts of the application
export default firebaseApp;

// Export Firestore service for database operations
export const firestore = firebase.firestore();
