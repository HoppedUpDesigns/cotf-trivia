/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/firebaseConfig.js
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file serves as the configuration setup for Firebase in the Coheed and The Fence (COTF) Trivia application. It initializes Firebase with the specific project settings and provides a unified point of export for the Firebase app and Firestore services.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *     - Initializes the Firebase application with the given configuration.
 *     - Sets up the Firestore database for storing and retrieving quiz data.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Updated the imports for Firebase to be compatible with the latest version.
 *     - Defined the Firebase configuration with project-specific settings.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - The firebaseConfig must be kept secure and should not be exposed in public repositories.
 *     - This configuration is crucial for connecting the application to Firebase services and should be updated if the Firebase project settings change.
 ***************************************************************************************************************************/

import firebase from 'firebase/compat/app'; // Updated import for compatibility
import 'firebase/compat/firestore'; // Updated import for compatibility

const firebaseConfig = {
  apiKey: "60829957132",
  authDomain: "cotf-trivia-4644c.firebaseapp.com",
  projectId: "cotf-trivia-4644c",
  storageBucket: "cotf-trivia-4644c.appspot.com",
  messagingSenderId: "60829957132",
  appId: "1:60829957132:web:98c50e9c5a0d6439914229",
  measurementId: "G-YJPTMZCJX3"
};

const firebaseApp = firebase.initializeApp(firebaseConfig); // Initialize the Firebase app

export default firebaseApp; // Export the initialized app
export const firestore = firebase.firestore(); // Export firestore
