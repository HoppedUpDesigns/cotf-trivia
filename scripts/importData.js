/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/scripts/importData.js
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This script is responsible for importing quiz data into Firebase Firestore.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/03/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *   - This script imports quiz data into Firebase Firestore from JSON files.
 ***************************************************************************************************************************/
const admin = require('firebase-admin');
const serviceAccount = require('../cotf-trivia-4644c-firebase-adminsdk-xffvg-686407b859.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://cotf-trivia-4644c.firebaseio.com'
});

const db = admin.firestore();

// Require the JSON files and define variables
const amory = require('../src/data/QuizQuestions/amory.json');
const coheed = require('../src/data/QuizQuestions/coheed.json');
const neverender = require('../src/data/QuizQuestions/neverender.json');
const sideProjects = require('../src/data/QuizQuestions/sideProjects.json');
const collectionKey = "quizQuestions";

const importData = async () => {
  const quizzes = [
    {
      data: amory,
      key: 'AMORY WARS'
    },
    {
      data: coheed,
      key: 'Coheed and Cambria'
    },
    {
      data: neverender,
      key: 'S.S. Neverender'
    },
    {
      data: sideProjects,
      key: 'Side Projects'
    }
  ];

  for (const quiz of quizzes) {
    await db.collection(collectionKey).doc(quiz.key).update({
      questions: admin.firestore.FieldValue.arrayUnion(...quiz.data),
    });
  }
}

importData().catch(console.error);
