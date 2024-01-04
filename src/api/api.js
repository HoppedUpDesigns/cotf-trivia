/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/api/api.js
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This API module is responsible for fetching quiz question data from the Firestore database. 
 *               It provides functionality to retrieve the total number of questions based on the selected quiz topic.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Connects to the Firestore database.
 *                 - Fetches quiz question data based on the selected topic.
 *                 - Calculates the total number of questions for the selected topic.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 1/1/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Removed references to local JSON files for quiz data.
 *     - Implemented Firestore database fetching for quiz questions.
 *     - Updated error handling and data retrieval logic.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: Ensure that the Firestore database is configured correctly and that the required collections and documents exist.
 ***************************************************************************************************************************/
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import firebaseApp from "../firebaseConfig";

// Initialize Firestore
const db = getFirestore(firebaseApp);

// Interface for the structure of each quiz question
interface QuizQuestion {
  questionID: number;
  question: string;
  choices: string[];
  type: string;
  correctAnswers: string[];
}

export async function fetchTotalQuestionsForTopic(selectedQuizTopic) {
  try {
    // Determine the document name in the database based on the selectedQuizTopic
    let documentName;
    switch (selectedQuizTopic) {
      case 'Amory':
        documentName = 'AMORY WARS';
        break;
      case 'Coheed':
        documentName = 'Coheed and Cambria';
        break;
      case 'Neverender':
        documentName = 'S.S. Neverender';
        break;
      case 'SideProjects':
        documentName = 'Side Projects';
        break;
      default:
        throw new Error(`Invalid quiz topic: ${selectedQuizTopic}`);
    }

    // Fetch the quiz questions from the Firestore database
    const docRef = query(collection(db, "quizQuestions"), where("documentName", "==", documentName));
    const querySnapshot = await getDocs(docRef);
    const quizQuestions = querySnapshot.docs.map(doc => doc.data() as QuizQuestion);

    // Calculate the total number of questions
    const totalQuestions = quizQuestions.length;

    return {
      totalQuestions,
    };
  } catch (error) {
    throw new Error(`Error fetching total questions: ${error.message}`);
  }
}
