# ReactJS Quiz App Template Code Documentations

Welcome to the ReactJS Quiz App documentation! This guide will walk you through the steps to start using and customizing the app according to your needs. The ReactJS Quiz App is designed to help you create interactive quizzes with various question types, including Multiple Choice Questions (MCQs), Multiple Answer Questions (MAQs), and True/False questions.

## ReactJS Quiz App (DEMO)

To experience the ReactJS Quiz App Demo App, visit my website link: https://cotftrivia.com

## **How to Start a Project**

To start a new project, follow these steps:

1. Download and extract the zip file containing the project.
2. Open the terminal and navigate to the project directory.
3. Run the command **`npm install`** to download and install all the project dependencies.
4. Once the dependencies are installed, run the command **`npm start`** to start the development server.

## **Database Instructions**
**NOTE: Go to this link for help with using Firebase for your project:
`https://firebase.google.com/docs/guides`**

If you plan of using a Firebase Database (Firestore) with you project, 
there are a couple things you need to do:
1. Install the Firebase Admin SDK.
The Firebase Admin Node.js SDK is available on npm. If you don't already have a package.json file, create one via npm init. Next, install the firebase-admin npm package and save it to your package.json:
`npm install firebase-admin --save`

2. To use the module in your application, require it from any JavaScript file:
`const { initializeApp } = require('firebase-admin/app');`

3. If you are using ES2015, you can import the module:
`import { initializeApp } from 'firebase-admin/app';`

4. Initialize the SDK 
`https://firebase.google.com/docs/admin/setup#initialize-sdk`

5. Once you have created a Firebase project, you can initialize the SDK with Google Application Default Credentials. Because default credentials lookup is fully automated in Google environments, with no need to supply environment variables or other configuration, this way of initializing the SDK is strongly recommended for applications running in Google environments such as Cloud Run, App Engine, and Cloud Functions.

6. You will also need to add your Database details into a file called `firebaseConfig.js`
This file can be found in this ReactJS Quiz App at: `PROJECT-ROOT-FOLDER/src/firebaseConfig.js`

7. You will also need a Firebase service account key file. It's essentially a configuration file for your Firebase project, containing sensitive information that enables your application to authenticate with Firebase services securely. Here's a breakdown of its purpose and why it's needed:

  a. Type: Specifies that this is a service account key.
  b. Project ID: Identifies your Firebase project.
  c. Private Key ID: A unique identifier for the private key.
  d. Private Key: The actual private key used for authentication. This should be kept confidential.
  e. Client Email: The email associated with the Firebase service account.
  f. Client ID: A unique identifier for the service account.
  g. Auth URI: The URL for OAuth2 authentication.
  h. Token URI: The URL to obtain the auth token.
  i. Auth Provider X509 Cert URL: The URL for the public certificate.
  j. Client X509 Cert URL: The URL for the client's X509 certificate.
  k. Universe Domain: Indicates the domain associated with the service account, usually googleapis.com.

To optionally specify initialization options for services such as Realtime Database, Cloud Storage, or Cloud Functions, use the FIREBASE_CONFIG environment variable. If the content of the FIREBASE_CONFIG variable begins with a { it will be parsed as a JSON object. Otherwise the SDK assumes that the string is the path of a JSON file containing the options.
`const app = initializeApp();`

### Folder Structure Explanation

Understanding the folder structure is essential for working with the ReactJS Quiz App. Here's an overview of the main folders:

- **assets**: Contains all the ReactJS Quiz App's assets, such as fonts, icons, and images
- **components**: Contains all the components of ReactJS Quiz App
- **components/UI**: Contains reusable UI components of ReactJS Quiz App
- **context**: Includes a context for sharing logic across the ReactJS Quiz App
- **styles**: Contains styles and their configurations using Styled Components
- **hooks**: Includes reusable hooks used in the ReactJS Quiz App
- **utils**: Contains Javascript helper functions
- **data**: Contains quiz questions and quiz topic screens data
- **types**: Contains TypeScript types used throughout the ReactJS Quiz App
- **config**: Imports all the icons, providing centralized access

*** PROJECT-ROOT-FOLDER/ is the root of the project ***
*** anything that looks like this |-- / is a folder ***
*** for example: |-- /src is a folder that is one level down from the root of the project (i.e. PROJECT-ROOT-FOLDER/) ***
*** anything that looks like this |--  is a file ***
*** for example: |-- package.json is a file that is one level down from the root of the project (i.e. PROJECT-ROOT-FOLDER/) ***

PROJECT-ROOT-FOLDER/
  |-- PROJECT-ROOT-FOLDER/build/
  |     |-- PROJECT-ROOT-FOLDER/build/static/
  |     |     |-- PROJECT-ROOT-FOLDER/build/static/css
  |     |     |-- PROJECT-ROOT-FOLDER/build/static/js
  |     |     |-- PROJECT-ROOT-FOLDER/build/static/media
  |     |-- PROJECT-ROOT-FOLDER/build/index.html
  |
  |-- PROJECT-ROOT-FOLDER/node_modules/
  |
  |-- PROJECT-ROOT-FOLDER/public/
  |     |-- PROJECT-ROOT-FOLDER/public/index.html
  |     |-- PROJECT-ROOT-FOLDER/public/site.webmanifest
  |
  |-- PROJECT-ROOT-FOLDER/src/
  |     |-- PROJECT-ROOT-FOLDER/src/components/
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/Main
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/Main/index.tsx
  |     |     |
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuestionScreen/
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuestionScreen/Answer/
  |     |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuestionScreen/Answer/index.tsx
  |     |     |     |
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuestionScreen/Question/
  |     |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuestionScreen/Question/index.tsx
  |     |     |     |
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuestionScreen/Question/QuizHeader/
  |     |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuestionScreen/Question/QuizHeader/Counter
  |     |     |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuestionScreen/Question/QuizHeader/Counter/index.tsx
  |     |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuestionScreen/Question/QuizHeader/index.tsx
  |     |     |     |
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuestionScreen/Question/index.tsx
  |     |     |
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuizDetailsScreen/
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuizDetailsScreen/index.tsx
  |     |     |
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuizTopicsScreen/
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuizTopicsScreen/index.tsx
  |     |     |
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/ResultScreen/
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/ResultScreen/ResultOverview/
  |     |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/ResultScreen/ResultOverview/index.tsx
  |     |     |     |
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/ResultScreen/RightAnswer/
  |     |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/ResultScreen/RightAnswer/index.tsx
  |     |     |     |
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/ResultScreen/index.tsx
  |     |     |
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/SplashScreen/
  |     |           |-- PROJECT-ROOT-FOLDER/src/components/SplashScreen/index.tsx
  |     |
  |     |-- PROJECT-ROOT-FOLDER/src/components/ui/
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/ui/Button/
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/ui/Button/index.tsx
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/ui/Button/styled.tsx
  |     |     |
  |     |-- PROJECT-ROOT-FOLDER/src/components/contactUs.js
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/ui/ModalWrapper/
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/ui/ModalWrapper/index.tsx
  |     |     |
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/ui/PreviousButton/
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/ui/PreviousButton/index.tsx
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/ui/PreviousButton/styled.tsx
  |     |     |
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuizImage/
  |     |     |     |-- PROJECT-ROOT-FOLDER/src/components/QuizImage/index.tsx
  |     |     |
  |     |     |-- PROJECT-ROOT-FOLDER/src/components/ui/ToggleTheme/
  |     |           |-- PROJECT-ROOT-FOLDER/src/components/ui/ToggleTheme/index.tsx
  |
  |-- PROJECT-ROOT-FOLDER/src/config/
  |     |-- PROJECT-ROOT-FOLDER/src/config/icons.ts
  |
  |-- PROJECT-ROOT-FOLDER/src/context/
  |     |-- PROJECT-ROOT-FOLDER/src/context/QuizContext.tsx
  |
  |-- PROJECT-ROOT-FOLDER/src/data/
  |     |-- PROJECT-ROOT-FOLDER/src/data/fetchQuizTopics.js
  |     |-- PROJECT-ROOT-FOLDER/src/data/QuizQuestions/
  |     |     |-- PROJECT-ROOT-FOLDER/src/data/QuizQuestions/amory.ts
  |     |     |-- PROJECT-ROOT-FOLDER/src/data/QuizQuestions/coheed.ts
  |     |     |-- PROJECT-ROOT-FOLDER/src/data/QuizQuestions/index.tsx
  |     |     |-- PROJECT-ROOT-FOLDER/src/data/QuizQuestions/neverender.ts
  |     |     |-- PROJECT-ROOT-FOLDER/src/data/QuizQuestions/sideProjects.ts
  |     |
  |     |-- PROJECT-ROOT-FOLDER/src/data/QuizQuestions/quizTopics.tsx
  |
  |-- PROJECT-ROOT-FOLDER/src/hooks
  |     |-- PROJECT-ROOT-FOLDER/src/hooks/index.tsx
  |     |-- PROJECT-ROOT-FOLDER/src/hooks/useShuffleQuestions.ts
  |     |-- PROJECT-ROOT-FOLDER/src/hooks/useTimer.ts
  |
  |-- PROJECT-ROOT-FOLDER/src/styles/
  |     |-- PROJECT-ROOT-FOLDER/src/styles/Breakpoints.ts
  |     |-- PROJECT-ROOT-FOLDER/src/styles/fonts.module.css
  |     |-- PROJECT-ROOT-FOLDER/src/styles/Global.ts
  |     |-- PROJECT-ROOT-FOLDER/src/styles/styled.d.ts
  |     |-- PROJECT-ROOT-FOLDER/src/styles/Theme.ts
  |
  |-- PROJECT-ROOT-FOLDER/src/types/
  |     |-- PROJECT-ROOT-FOLDER/src/types/index.tsx
  |
  |-- PROJECT-ROOT-FOLDER/src/utils/
  |     |-- PROJECT-ROOT-FOLDER/src/utils/helpers.ts
  |
  |-- PROJECT-ROOT-FOLDER/src/App.test.tsx
  |-- PROJECT-ROOT-FOLDER/src/App.tsx
  |-- PROJECT-ROOT-FOLDER/src/index.tsx
  |-- PROJECT-ROOT-FOLDER/src/logo.svg
  |-- PROJECT-ROOT-FOLDER/src/react-app-env.d.ts
  |-- PROJECT-ROOT-FOLDER/src/reportWebVitals.ts
  |-- PROJECT-ROOT-FOLDER/src/setupTests.ts
|
|-- PROJECT-ROOT-FOLDER/.firebaserc
|-- PROJECT-ROOT-FOLDER/.gitignore
|-- PROJECT-ROOT-FOLDER/package-lock.json
|-- PROJECT-ROOT-FOLDER/package.json
|-- PROJECT-ROOT-FOLDER/README.md
|-- PROJECT-ROOT-FOLDER/tsconfig.json

### Components Architecture

The **ReactJS Quiz App** consists of 5 main screens/components that are displayed conditionally:

1. SplashScreen
2. QuizTopicsScreen
3. QuizDetailsScreen
4. QuestionsScreen
5. ResultScreen

The screens are organized in the **`components`** folder since the ReactJS Quiz App does not utilize routing. If a component is reusable and can be used in multiple places within the ReactJS Quiz App (e.g., Button, and ModalWrappe), it is placed in the **`components/ui`** folder. On the other hand, if a component is screen-specific and separated just to make other components smaller and more manageable, it is placed in the relevant components folder. For example, the components `**QuizHeader**`, `**Question**`, and `**Answer**` are inside the **`QuestionScreen`** folder.

## How to customize the quiz layout and styling

### **Changing the ReactJS Quiz App Theme**

To change the theme of the ReactJS Quiz App, follow these steps:

1. Open the **`styles/Themes`** file.
2. Modify the colors in the themes to customize the ReactJS Quiz App's appearance.

### Changing the App Font

To change the font of the ReactJS Quiz App, follow these steps:

1. Go to **`assets`** ⇒ **`fonts`**.
2. Replace the current fonts (e.g., "anek-malayalam") with the fonts you want to use.
3. Go to **`fonts.module.css`** file ****and replace the font name and path with new font you added.
4. Go to the **`theme`** file and change the font name.
5. Go to the global styles and update the font in the **`body`** section.

### **Modifying the Quiz Topic Screen or Adding New Categories**

To modify the QuizTopicsScreen or add new categories of topics/icons, follow these steps:

1. Open the **`data/quizTopics`** file.
2. Make changes to the titles, icons or add new topics (by adding new object in `quizTopics`) as needed.
3. Ensure that the title in the **`QuizTopic`** data match the topic of **`data/QuizQuestions`** folder.

For example

```jsx
export const quizTopics: QuizTopic[] = [
  {
    title: 'ReactJS Quiz App Topic #4', // match topic value with this line
    icon: <Icon />, // match icon value with this line
  },
  {
    title: 'ReactJS Quiz App Topic #4', // match topic value with this line
    icon: <Icon />, // match icon value with this line
  },
  ....
]

export const javascript: Topic = {
  topic: 'ReactJS Quiz App Topic #4', // match value with topic key
  level: 'Beginner', // this is optional
  totalQuestions: 14,
  .....
}
```

### Adding a New Screen

This ReactJS Quiz App is designed with scalability in mind, allowing you to easily add new screens. Here's how you can add a new screen, such as a "Quiz Types" screen (where you can select quiz type for example individual question timer, with or without timer):

**Step 1: Create a component**

Create a new component called **`QuizType`** in the **`components`** folder.

**Step 2: Update the Main component**

Go to the main components file (**`Main/index.ts`**) and render the **`QuizType`** screen in the **`screenComponents`** section/object. Don't forget to add the screen name in the typescript **`screenTypes`** as well.

```jsx
const screenComponents = {
  [ScreenTypes.SplashScreen]: <SplashScreen />,
  [ScreenTypes.QuizTopicsScreen]: <QuizTopicsScreen />,
  [ScreenTypes.QuizTypesScreen]: <QuizTypesScreen />, // new screen  
  [ScreenTypes.QuizDetailsScreen]: <QuizDetailsScreen />,
  [ScreenTypes.QuestionScreen]: <QuestionScreen />,
  [ScreenTypes.ResultScreen]: <ResultScreen />,
}
```

If you have multiple conditions to show the screen, you can change the object to a switch or if-else statement. Here's an example using a switch statement:

```jsx
import { useEffect } from 'react'

import { useQuiz } from '../../context/QuizContext'
import { ScreenTypes } from '../../types'

import QuestionScreen from '../QuestionScreen'
import QuizDetailsScreen from '../QuizDetailsScreen'
import QuizTopicsScreen from '../QuizTopicsScreen'
import ResultScreen from '../ResultScreen'
import SplashScreen from '../SplashScreen'

function Main() {
  const { currentScreen, setCurrentScreen } = useQuiz()

  useEffect(() => {
    setTimeout(() => {
      setCurrentScreen(ScreenTypes.QuizTopicsScreen)
    }, 1000)
  }, [])

  switch (currentScreen) {
    case ScreenTypes.SplashScreen:
      return <SplashScreen />
    case ScreenTypes.QuizTopicsScreen:
      return <QuizTopicsScreen />
    case ScreenTypes.QuizDetailsScreen:
      return <QuizDetailsScreen />
    case ScreenTypes.QuestionScreen:
      return <QuestionScreen />
    case ScreenTypes.ResultScreen:
      return <ResultScreen />
    default:
      return <SplashScreen />
  }
}

export default Main
```

### **Implementing Different Types of Quiz Questions**

The ReactJS Quiz App supports various types of quiz questions, including Multiple Choice Questions (MCQs), Multiple Answer Questions (MAQs), and True/False questions. To add different question types, you can modify the question components and their associated data structures. You can refer to the existing question formats in the **`data/QuizQuestions`** folder as examples when creating new questions.

For example, if you want to create a Multiple Choice Question (MCQ), you need to set its **`type`** to **`MCQs`** in the question data. Similarly, for a Multiple Answer Question (MAQ), set the **`type`** to **`MAQs`**, and for a True/False question, set it to the appropriate type as well.

**Remember:** For MAQs, users can select multiple answer options, while for MCQs and True/False questions, users can select only one option. Make sure to set the correct **`type`** to match the question's behavior accordingly.

### **Important Note**

Before making the ReactJS Quiz App your own, remember to customize the meta and title tags in the **`index.html`** file, as well as the logo, preview image, and favicon image in the **`public`** folder. This ensures that the app reflects your branding and identity.
