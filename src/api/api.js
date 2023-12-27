// /cotf/src/api/api.js
import { amoryQuestions, coheedQuestions, neverenderQuestions, sideProjectsQuestions } from '../data/QuizQuestions'; // Adjust the import paths as needed

export async function fetchTotalQuestionsForTopic(selectedQuizTopic) {
  try {
    // Determine which quiz data to use based on the selectedQuizTopic
    let quizData;

    switch (selectedQuizTopic) {
      case 'Amory':
        quizData = amoryQuestions;
        break;
      case 'Coheed':
        quizData = coheedQuestions;
        break;
      case 'Neverender':
        quizData = neverenderQuestions;
        break;
      case 'SideProjects':
        quizData = sideProjectsQuestions;
        break;
      default:
        throw new Error(`Invalid quiz topic: ${selectedQuizTopic}`);
    }

    // Calculate the total number of questions
    const totalQuestions = quizData.length;

    return {
      totalQuestions,
    };
  } catch (error) {
    throw new Error(`Error fetching total questions: ${error.message}`);
  }
}
