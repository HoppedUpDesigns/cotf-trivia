/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/ui/QuizImage/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file contains the QuizImage component, which is used for displaying images in quiz questions.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - The QuizImage component takes an image URL as a prop and renders the image with specific styling.
 *  - It uses styled-components to apply styles such as border-radius, max-width, box-shadow, and margin.
 *  - The component enhances the visual appeal of quiz questions by including relevant images.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: Last Updated on: 01/24/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial implementation of the QuizImage component with responsive design.
 *  - Added shadow and border-radius to make images more integrated with the quiz's aesthetic.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - The QuizImage component is essential for quizzes that rely on visual aids or require image-based questions.
 *  - It is designed to be responsive and maintain the aspect ratio of images across different screen sizes.
 ***************************************************************************************************************************/

import { FC } from 'react'
import styled from 'styled-components'

interface QuizImageProps {
  image: string
}

const ImageStyle = styled.img`
  border-radius: 10px;
  height: 400px;
  max-width: 100%;
  box-shadow: 6px 6px 2px ${({ theme }) => theme.colors.themeColor};
  margin-bottom: 20px;
`

const QuizImage: FC<QuizImageProps> = ({ image }) => (
  <ImageStyle src={image} alt="picture quiz" />
)

export default QuizImage
