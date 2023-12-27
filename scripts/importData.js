const admin = require('firebase-admin');
const serviceAccount = require('../cotf-trivia-4644c-firebase-adminsdk-xffvg-686407b859.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: 'https://cotf-trivia-4644c.firebaseio.com'
});

const db = admin.firestore();

const amory = require('../src/data/QuizQuestions/amory.json');
const coheed = require('../src/data/QuizQuestions/coheed.json');
const neverender = require('../src/data/QuizQuestions/neverender.json');
const sideProjects = require('../src/data/QuizQuestions/sideProjects.json');
const collectionKey = "quizQuestions";

async function importData() {
  const quizzes = [
    { data: amory, key: 'amory' },
    { data: coheed, key: 'coheed' },
    { data: neverender, key: 'neverender' },
    { data: sideProjects, key: 'sideProjects' }
  ];

  for (const quiz of quizzes) {
    for (const item of quiz.data) {
      await db.collection(collectionKey).doc(quiz.key).set(item);
    }
  }
}

importData().catch(console.error);
