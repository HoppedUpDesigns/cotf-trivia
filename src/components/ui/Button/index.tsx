/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/ui/Button/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the Button component, a reusable UI element for user interaction throughout the application. It supports various configurations including icons, bold text, different sizes, and an outlined style.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Renders a button with customizable text, icons, and styling.
 *                 - Supports left and right icon placements.
 *                 - Offers outline, bold, and size variations for different UI contexts.
 *                 - Provides a disabled state for conditional interaction.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Introduced the Button component with basic text and click functionality.
 *     - Added icon support with left and right positioning options.
 *     - Implemented outline, bold, and big variations for diverse design needs.
 *     - Included a disabled state for conditional rendering based on user interactions or application state.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - This component is crucial for user interactions across the application, ensuring a consistent and accessible experience.
 *     - Future enhancements might include more intricate styles, animations, or additional functionality like loading states or accessibility improvements.
 ***************************************************************************************************************************/
import { FC, ReactNode } from 'react'
import { ButtonStyle, IconLeft, IconRight } from './styled'

interface ButtonTypes {
  text: string
  onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
  icon?: ReactNode
  iconPosition?: 'left' | 'right'
  outline?: boolean
  bold?: boolean
  big?: boolean
  disabled?: boolean
}

const Button: FC<ButtonTypes> = ({
  text,
  onClick,
  icon,
  iconPosition,
  outline,
  bold,
  big,
  disabled,
}) => {
  return (
    <ButtonStyle
      onClick={onClick}
      outline={outline}
      bold={bold}
      big={big}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && <IconLeft>{icon}</IconLeft>}
      {text}
      {icon && iconPosition === 'right' && <IconRight>{icon}</IconRight>}
    </ButtonStyle>
  )
}

export default Button
