/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/scripts/appendOneCollection.js
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This script is designed to append quiz question data to a specified Firestore Collection Document. It reads a JSON file 
 *               containing quiz questions and adds them to the specified Firestore collection document.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Reads quiz question data from a JSON file.
 *                 - Connects to the Firebase Firestore database.
 *                 - Appends data to a specific Firestore collection document.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 01/03/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/03/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initialized Firebase admin SDK.
 *     - Script now reads quiz questions from a JSON file and appends them to a Firestore collection document.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - Ensure Firebase Admin SDK is configured correctly before running.
 *     - This script assumes the Firestore collection and document already exist.
 *     - Data structure in the JSON file should match the Firestore collection schema.
 ***************************************************************************************************************************/

const admin = require('firebase-admin');
const serviceAccount = require('../cotf-trivia-4644c-firebase-adminsdk-xffvg-686407b859.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://cotf-trivia-4644c.firebaseio.com'
});

const db = admin.firestore();

const appendToCollectionDocument = async (collectionName, documentName, data) => {
    try {
        const collectionRef = db.collection(collectionName);
        const documentRef = collectionRef.doc(documentName);

        const currentData = (await documentRef.get()).data();
        const currentQuestions = currentData.questions || [];

        const newData = [...currentQuestions, ...data];

        await documentRef.update({ questions: newData });

        console.log(`Appended questions to ${documentName} in ${collectionName}`);
    } catch (error) {
        console.error(`Error appending questions to ${documentName} in ${collectionName}: ${error.message}`);
    }
};

const questionsData = require('../src/data/QuizQuestions/amory.json'); // Replace with the path to the JSON file you want to append

const collectionName = 'quizQuestions'; // Replace with the target collection name
const documentName = 'AMORY WARS'; // Replace with the target document name

appendToCollectionDocument(collectionName, documentName, questionsData);
