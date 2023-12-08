import { neverender } from './neverender'
import { amory } from './amory'
import { sideProjects } from './sideProjects'
import { coheed } from './coheed'

// Question Types
// 1. MCQs | Multiple Choice | single
// 2. boolean | true/false | single
// 3. MAQs | Multiple Answers | multiple

type Choice = string
type CorrectAnswers = string[]

export type Question = {
  question: string
  choices: Choice[]
  type: 'MCQs' | 'MAQs' | 'boolean'
  correctAnswers: CorrectAnswers
  score: number
  code?: string
  image?: string
}

export type Topic = {
  topic: string
  level: string
  totalQuestions: number
  totalScore: number
  totalTime: number
  questions: Question[]
}

export const quiz: Record<string, Topic> = {
  'AMORY WARS': amory,
  'Coheed and Cambria': coheed,
  'Side Projects': sideProjects,
  'S.S. Neverender': neverender,
}
