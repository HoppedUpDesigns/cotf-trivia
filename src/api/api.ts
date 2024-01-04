/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/api/api.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file contains functions related to fetching quiz questions for a selected quiz topic from Firestore.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *   - fetchTotalQuestionsForTopic(selectedQuizTopic: string): This function fetches quiz questions for a selected quiz topic from Firestore.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/03/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *   - Added type annotations and error handling to the fetchTotalQuestionsForTopic function.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *   - This module interacts with Firestore to retrieve quiz questions for a specific quiz topic.
 *   - It handles data mapping, error handling, and type annotations for quiz questions.
 ***************************************************************************************************************************/
import { getFirestore, collection, query, where, getDocs, DocumentSnapshot } from "firebase/firestore";
import firebaseApp from "../firebaseConfig";
import { QuizQuestion } from './quizTypes';

// Initialize Firestore
const db = getFirestore(firebaseApp);

export async function fetchTotalQuestionsForTopic(selectedQuizTopic: string) {
  try {
    // Determine the document name in the database based on the selectedQuizTopic
    let documentName;
    switch (selectedQuizTopic) {
      case 'amory':
        documentName = 'AMORY WARS';
        break;
      case 'coheed':
        documentName = 'Coheed and Cambria';
        break;
      case 'neverender':
        documentName = 'S.S. Neverender';
        break;
      case 'sideProjects':
        documentName = 'Side Projects';
        break;
      default:
        throw new Error(`Invalid quiz topic: ${selectedQuizTopic}`);
    }

    // Fetch the quiz questions from the Firestore database
    const docRef = query(collection(db, "quizQuestions"), where("documentName", "==", documentName));
    const querySnapshot = await getDocs(docRef);

    // Map Firestore documents to QuizQuestion objects with type annotation
    const quizQuestions: QuizQuestion[] = querySnapshot.docs.map((doc: DocumentSnapshot) => {
      const data = doc.data();
      if (data) { // Check if data is defined
        return {
          questionID: doc.id,
          question: data.question,
          choices: data.choices,
          type: data.type,
          correctAnswers: data.correctAnswers,
        } as QuizQuestion;
      }
      return null; // Handle the case where data is undefined
    }).filter((question) => question !== null) as QuizQuestion[];

    // Calculate the total number of questions
    const totalQuestions = quizQuestions.length;

    return {
      totalQuestions,
      quizQuestions,
    };
  } catch (error) {
    if (error instanceof Error) {
      // Handle the error as an instance of the Error class
      throw new Error(`Error fetching total questions: ${error.message}`);
    } else {
      // Handle other cases where error is not an instance of Error
      throw new Error(`Unknown error occurred while fetching total questions.`);
    }
  }
}
