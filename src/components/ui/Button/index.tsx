/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/ui/Button/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file contains the implementation of a reusable Button component used across the application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - The Button component accepts various props such as text, onClick handler, icon, icon position, and styling options.
 *  - It supports both text and icon, and the icon can be positioned either to the left or right of the text.
 *  - The component can be styled as an outline button and can be configured for different sizes and states (like disabled).
 *  - It uses styled-components to handle the various styling based on the props provided.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Developed the initial version of the Button component with support for various configurations and styles.
 *  - Added the functionality to position an icon on either side of the button text.
 *  - Integrated styled-components for dynamic styling based on props.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - This Button component enhances the UI by providing a consistent and configurable button style throughout the application.
 *  - The flexibility of the component allows it to be used in various contexts with different styling needs.
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
