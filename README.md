# COTF Trivia Quiz App - ReactJS Quiz App Template Code Documentations

Welcome to the COTF Trivia Quiz App documentation! This guide will walk you through the steps to start using and customizing the app according to your needs. The Code Quiz App is designed to help you create interactive quizzes with various question types, including Multiple Choice Questions (MCQs), Multiple Answer Questions (MAQs), and True/False questions.

## Demo App

To experience the Demo App, visit the link: https://cotf-trivia-4644c.web.app/

## ** How to Start a Project **

To start a new project, follow these steps:

1. Download and extract the zip file containing the project.
2. Open the terminal and navigate to the project directory.
3. Run the command **`npm install`** to download and install all the project dependencies.
4. Once the dependencies are installed, run the command **`npm start`** to start the development server.

### Folder Structure Explanation

Understanding the folder structure is essential for working with the app. Here's an overview of the main folders:

- **assets**: Contains all the app's assets, such as fonts, icons, and images
- **components**: Contains all the components of app
- **components/ui**: Contains reusable ui components of app
- **context**: Includes a context for sharing logic across the app
- **styles**: Contains styles and their configurations using Styled Components
- **hooks**: Includes reusable hooks used in the app
- **utils**: Contains Javascript helper functions
- **data**: Contains quiz questions and quiz topic screens data
- **types**: Contains TypeScript types used throughout the app
- **config**: Imports all the icons, providing centralized access

### Components Architecture

The ** COTF Trivia Quiz App** consists of 5 main screens/components that are displayed conditionally:

1. Splash Screen
2. Quiz Topics Screen
3. Quiz Details Screen
4. Questions Screen
5. Result Screen

The screens are organized in the **`components`** folder since the app does not utilize routing. If a component is reusable and can be used in multiple places within the app (e.g., Button, ModalWrapper, and CodeSnippet), it is placed in the **`components/ui`** folder. On the other hand, if a component is screen-specific and separated just to make other components smaller and more manageable, it is placed in the relevant components folder. For example, the components `**QuizHeader**`, `**Question**`, and `**Answer**` are inside the **`QuestionScreen`** folder.

## How to customize the quiz layout and styling

### ** Changing the App Theme **

To change the theme of the app, follow these steps:

1. Open the **`styles/Themes`** file.
2. Modify the colors in the themes to customize the app's appearance.

### Changing the App Font

To change the font of the app, follow these steps:

1. Go to **`assets`** ⇒ **`fonts`**.
2. Replace the current fonts (e.g., "anek-malayalam") with the fonts you want to use.
3. Go to **`fonts.module.css`** file ****and replace the font name and path with new font you added.
4. Go to the **`theme`** file and change the font name.
5. Go to the global styles and update the font in the **`body`** section.

### ** Modifying the Quiz Topic Screen or Adding New Categories **

To modify the Quiz Topics Screen or add new categories of topics/icons, follow these steps:

1. Open the **`data/quizTopics`** file.
2. Make changes to the titles, icons or add new topics (by adding new object in `quizTopics`) as needed.
3. Ensure that the title in the **`QuizTopic`** data match the topic of **`data/QuizQuestions`** folder.

For example

```jsx
export const quizTopics: QuizTopic[] = [
  {
    title: 'AMORY WARS', // match topic value with this line
    icon: <Coheed />, // match icon for this quiz topic here
  },
  {
    title: 'Side Projects', // match topic value with this line
    icon: <Coheed />, // match icon for this quiz topic here
  },
  ....
]

export const coheed: Topic = {
  topic: 'Coheed and Cambria', // match value with topic key
  level: 'Beginner',
  totalQuestions: 14,
  .....
}
```

### Adding a New Screen

This app is designed with scalability in mind, allowing you to easily add new screens. Here's how you can add a new screen, such as a "Quiz Types" screen (where you can select quiz type for example individual question timer, with or without timer):

### ** Step 1: Create a component **

Create a new component called **`QuizType`** in the **`components`** folder.

### ** Step 2: Update the Main component **

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

### ** Implementing Different Types of Quiz Questions **

The COTF Trivia Quiz App supports various types of quiz questions, including Multiple Choice Questions (MCQs), Multiple Answer Questions (MAQs), and True/False questions. To add different question types, you can modify the question components and their associated data structures. You can refer to the existing question formats in the **`data/QuizQuestions`** folder as examples when creating new questions.

For example, if you want to create a Multiple Choice Question (MCQ), you need to set its **`type`** to **`MCQs`** in the question data. Similarly, for a Multiple Answer Question (MAQ), set the **`type`** to **`MAQs`**, and for a True/False question, set it to the appropriate type as well.

**Remember:** For MAQs, users can select multiple answer options, while for MCQs and True/False questions, users can select only one option. Make sure to set the correct **`type`** to match the question's behavior accordingly.

### ** Important Note **

Before making the COTF Trivia Quiz App your own, remember to customize the meta and title tags in the **`index.html`** file, as well as the logo, preview image, and favicon image in the **`public`** folder. This ensures that the app reflects your branding and identity.
