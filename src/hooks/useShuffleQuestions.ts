import { useEffect } from 'react';
import { useQuiz } from '../context/QuizContext';
import { shuffleArray } from '../utils/helpers';
import { ScreenTypes } from '../types'

export const useShuffleQuestions = () => {
  const { setQuestions, currentScreen, quizTopic, questions } = useQuiz();

  useEffect(() => {
    if (currentScreen === ScreenTypes.QuizDetailsScreen && quizTopic) {
      // Assuming the 'questions' state in your context holds all questions of the selected topic
      const shuffledQuestions = shuffleArray([...questions]);
      setQuestions(shuffledQuestions);
    }
  }, [currentScreen, quizTopic, questions, setQuestions]);
}

export default useShuffleQuestions;
