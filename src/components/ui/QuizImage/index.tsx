/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/ui/QuizImage/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: The QuizImage component is responsible for rendering images within the quiz, enhancing the visual appeal and providing visual context for questions where necessary. It ensures images are displayed with appropriate styling and accessibility considerations.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Receives an image URL as a prop and renders it within the quiz context.
 *                 - Utilizes styled-components for consistent and theme-based styling, including border-radius and shadow for visual depth.
 *                 - Ensures images are responsive and fit within the layout without breaking the design.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Implemented the initial version of the QuizImage component with basic styling.
 *     - Added responsive design considerations to ensure the image scales correctly.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - Future enhancements may include lazy loading for better performance and placeholders for image load times.
 *     - Consider adding error handling for broken image links or alternative text for improved accessibility.
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
