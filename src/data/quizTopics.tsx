/* Here is the code for the file cotf/src/data/quizTopics.tsx */

import { ReactNode } from 'react'
import { ReactComponent as JavaScript } from '../assets/icons/javascript.svg'
import { ReactComponent as Python } from '../assets/icons/python.svg'
import { ReactComponent as ReactIcon } from '../assets/icons/react.svg'
import { ReactComponent as BulbIcon } from '../assets/icons/bulb.svg'
import { ReactComponent as Coheed } from '../assets/icons/app-logo.svg'

type QuizTopic = {
  title: string
  icon: ReactNode
  disabled?: boolean
}

export const quizTopics: QuizTopic[] = [
  {
    title: 'Coheed and Cambria',
    icon: <Coheed />,
  },
  {
    title: 'AMORY WARS',
    icon: <Coheed />,
  },
  {
    title: 'Side Projects',
    icon: <Coheed />,
  },
  {
    title: 'S.S. Neverender',
    icon: <Coheed />,
  },
]
