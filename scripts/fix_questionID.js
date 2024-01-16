const admin = require('firebase-admin');
const serviceAccount = require('../cotf-trivia-4644c-firebase-adminsdk-xffvg-686407b859.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "cotf-trivia-4644c.firebaseapp.com",
});

const db = admin.firestore();

async function updateQuestionIDs() {
  const quizQuestionsRef = db.collection('quizQuestions');
  const snapshot = await quizQuestionsRef.orderBy('questionID').get();

  if (snapshot.empty) {
    console.log('No matching documents.');
    return;
  }

  let expectedQuestionID = 1; // Starting from 1

  snapshot.forEach(doc => {
    const data = doc.data();
    if (data.questionID !== expectedQuestionID) {
      console.log(`Updating document ID: ${doc.id}, Current questionID: ${data.questionID}, Expected questionID: ${expectedQuestionID}`);
      doc.ref.update({ questionID: expectedQuestionID });
    }
    expectedQuestionID++;
  });
}
nod
updateQuestionIDs().catch(console.error);
