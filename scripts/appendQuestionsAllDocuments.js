/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/scripts/appendQuestionsAllDocuments.js
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This script is designed to append quiz question data to all specified Firestore Collection Documents. It reads JSON files 
 *               containing quiz questions and adds them to the specified Firestore collection documents.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Reads quiz question data from JSON files.
 *                 - Connects to the Firebase Firestore database.
 *                 - Appends data to specific Firestore collection documents.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 01/03/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/03/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initialized Firebase admin SDK.
 *     - Script now reads quiz questions from JSON files and appends them to individual Firestore collection documents.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - Ensure Firebase Admin SDK is configured correctly before running.
 *     - This script assumes the Firestore collection and documents already exist.
 *     - Data structure in JSON files should match Firestore collection schema.
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

const amory = require('../src/data/QuizQuestions/amory.json');
const coheed = require('../src/data/QuizQuestions/coheed.json');
const neverender = require('../src/data/QuizQuestions/neverender.json');
const sideProjects = require('../src/data/QuizQuestions/sideProjects.json');

const collectionsToAppend = [
    { collectionName: 'quizQuestions', documentName: 'AMORY WARS', data: amory },
    { collectionName: 'quizQuestions', documentName: 'Coheed and Cambria', data: coheed },
    { collectionName: 'quizQuestions', documentName: 'S.S. Neverender', data: neverender },
    { collectionName: 'quizQuestions', documentName: 'Side Projects', data: sideProjects },
];

for (const collectionData of collectionsToAppend) {
    appendToCollectionDocument(collectionData.collectionName, collectionData.documentName, collectionData.data);
}
