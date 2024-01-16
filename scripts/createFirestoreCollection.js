/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/scripts/createFirestoreCollection.js
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This script is designed to create a Firestore Collection, named Documents, and define Fields with specified data types.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Initializes Firebase Admin SDK and connects to the Firestore database.
 *                 - Creates a new Firestore Collection.
 *                 - Creates named Firestore Documents within the Collection.
 *                 - Defines Fields for each Document with specified data types.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 01/03/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/03/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initialized Firebase Admin SDK.
 *     - Created a Firestore Collection.
 *     - Created named Firestore Documents within the Collection.
 *     - Defined Fields for each Document with specified data types.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - Ensure Firebase Admin SDK is configured correctly before running.
 *     - Customize the Collection name, Document names, and Field definitions as needed.
 ***************************************************************************************************************************/
const admin = require('firebase-admin');
const serviceAccount = require('../cotf-trivia-4644c-firebase-adminsdk-xffvg-686407b859.json');

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: 'https://cotf-trivia-4644c.firebaseio.com'
});

const db = admin.firestore();

const createFirestoreCollection = async () => {
    try {
        const collectionName = 'quizQuestions';
        const documentNames = ['AMORY WARS', 'Coheed and Cambria', 'S.S. Neverender', 'Side Projects']; // Document names
        
        const fieldDefinitions = {
            questionID: 1, // Initialize questionID to 1
            question: '', // question is a string type field
            choices: [], // choices is an array type field
            correctAnswers: [], // correctAnswers is an array type field
            // Add any other fields you might need for your documents here
        };

        // Create the Firestore Collection
        const collectionRef = db.collection(collectionName);

        // Create named Firestore Documents and define Fields with data types
        for (const documentName of documentNames) {
            const documentRef = collectionRef.doc(documentName);
            await documentRef.set(fieldDefinitions); // Set the document with the field definitions
        }

        console.log(`Firestore Collection '${collectionName}' and Documents created successfully.`);
    } catch (error) {
        console.error(`Error creating Firestore Collection: ${error.message}`);
    }
};

createFirestoreCollection();

