import { FC } from 'react'
import styled from 'styled-components'
import { Flex } from '../../../styles/Global'
import { addLeadingZero } from '../../../utils/helpers'

const ActiveQuestionNo = styled.span`
  font-size: clamp(40px, 5vw, 60px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.themeColor};
`

const TotalQuestionNo = styled.span`
  font-size: clamp(20px, 5vw, 30px);
  font-weight: 500;
  color: ${({ theme }) => theme.colors.darkerGray};
`

interface QuizHeaderProps {
  activeQuestion: number
  userSelectedNumberOfQuestions: number
}

const QuizHeader: FC<QuizHeaderProps> = ({
  activeQuestion,
  userSelectedNumberOfQuestions,
}) => {
  return (
    <Flex spaceBetween gap="6px">
      <div>
        <ActiveQuestionNo>{addLeadingZero(activeQuestion + 1)}</ActiveQuestionNo>
        <TotalQuestionNo>/{addLeadingZero(userSelectedNumberOfQuestions)}</TotalQuestionNo>
      </div>
    </Flex>
  )
}

export default QuizHeader
