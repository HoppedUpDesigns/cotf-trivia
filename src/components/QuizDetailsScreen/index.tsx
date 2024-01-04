
/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/QuizDetailsScreen/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the QuizDetailsScreen component, which provides a detailed overview of the selected quiz topic, including the total number of questions and the time allotted for the quiz.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Retrieves the last question IDs for each quiz topic from the database.
 *                 - Displays selected quiz topic and the total questions available.
 *                 - Provides a button to start the quiz.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial creation of the QuizDetailsScreen component with functionality to fetch and display quiz details.
 *     - Added logic to dynamically fetch the last question IDs for each quiz topic from the Firestore database.
 *     - Implemented a user-friendly interface to display quiz details and start the quiz.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - This component plays a critical role in setting expectations for the user before starting the quiz.
 *     - Future updates may include more interactive elements or additional information about the quiz.
 ***************************************************************************************************************************/
import { useEffect, useState } from "react";
import { doc, getDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import firebaseApp from "../../firebaseConfig";
import styled from "styled-components";
import { AppLogo, StartIcon } from "../../config/icons";
import { useQuiz } from "../../context/QuizContext";
import { useShuffleQuestions } from "../../hooks";
import {
  CenterCardContainer,
  HighlightedText,
  LogoContainer,
  PageCenter,
} from "../../styles/Global";
import { ScreenTypes } from "../../types";
import { convertSeconds } from "../../utils/helpers";
import Button from "../ui/Button";

const AppTitle = styled.h2`
  font-weight: 700;
  font-size: 32px;
  color: ${({ theme }) => theme.colors.themeColor};
`;

const DetailTextContainer = styled.div`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`;

const DetailText = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 15px;
  line-height: 1.3;
`;

// Initialize Firestore
const db = getFirestore(firebaseApp);

const QuizDetailsScreen = () => {
  const { setCurrentScreen, quizDetails } = useQuiz();
  const { selectedQuizTopic, totalQuestions, totalTime } = quizDetails;

  const [lastAmoryQuestionId, setLastAmoryQuestionId] = useState(0);
  const [lastCoheedQuestionId, setLastCoheedQuestionId] = useState(0);
  const [lastNeverenderQuestionId, setLastNeverenderQuestionId] = useState(0);
  const [lastSideProjectsQuestionId, setLastSideProjectsQuestionId] =
    useState(0);

  async function getLastAmoryQuestionId() {
    const docRef = doc(db, "quizQuestions", "AMORY WARS");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const lastQuestionId = docSnap.data().questionID;
      return lastQuestionId;
    }
    return 0
  }

  async function getLastCoheedQuestionId() {
    const docRef = doc(db, "quizQuestions", "Coheed and Cambria");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      // Assuming your data structure has the questionID field in the document
      const lastQuestionId = docSnap.data().questionID;
      return lastQuestionId;
    }
    return 0; 
  }

  async function getLastNeverenderQuestionId() {
    const docRef = doc(db, "quizQuestions", "S.S. Neverender");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const lastQuestionId = docSnap.data().questionID;
      return lastQuestionId;
    }
    return 0;
  }

  async function getLastSideProjectsQuestionId() {
    const docRef = doc(db, "quizQuestions", "Side Projects");
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const lastQuestionId = docSnap.data().questionID;
      return lastQuestionId;
    }
    return 0;
  }

  useEffect(() => {
    async function fetchLastQuestionIds() {
      const amoryId = await getLastAmoryQuestionId();
      setLastAmoryQuestionId(amoryId);
      const coheedId = await getLastCoheedQuestionId();
      setLastCoheedQuestionId(coheedId);
      const neverenderId = await getLastNeverenderQuestionId();
      setLastNeverenderQuestionId(neverenderId);
      const sideProjectsId = await getLastSideProjectsQuestionId();
      setLastSideProjectsQuestionId(sideProjectsId);
    }

    fetchLastQuestionIds();
  }, []);

  const goToQuestionScreen = () => {
    setCurrentScreen(ScreenTypes.QuestionScreen);
  };

  // to shuffle or randomize quiz questions
  useShuffleQuestions();

  // Determine which question count to display based on the selected topic
  const getTopicQuestionCount = () => {
    switch(selectedQuizTopic) {
      case 'AMORY WARS': return lastAmoryQuestionId;
      case 'Coheed and Cambria': return lastCoheedQuestionId;
      case 'S.S. Neverender': return lastNeverenderQuestionId;
      case 'Side Projects': return lastSideProjectsQuestionId;
      default: return 0; // default case if no topic matches
    }
  }

  return (
    <PageCenter light justifyCenter>
      <CenterCardContainer>
        <LogoContainer>
          <AppLogo />
        </LogoContainer>
        <AppTitle>COTF TRIVIA</AppTitle>
        <DetailTextContainer>
          <DetailText>
            Selected Quiz Topic: <HighlightedText>{selectedQuizTopic}</HighlightedText>
          </DetailText>
          <DetailText>
            Total questions available in the selected quiz:{' '}
            <HighlightedText>{getTopicQuestionCount()}</HighlightedText>
          </DetailText>
          <DetailText>
            You will have 10 seconds to answer each question in the quiz
          </DetailText>
          <DetailText>
            To save time, you can skip questions. Skipped questions will show up at the
            end of the quiz.
          </DetailText>
        </DetailTextContainer>
        <Button
          text="Start"
          icon={<StartIcon />}
          iconPosition="left"
          onClick={goToQuestionScreen}
          bold
        />
      </CenterCardContainer>
    </PageCenter>
  )
}

export default QuizDetailsScreen
