/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/components/ui/ModalWrapper/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file contains the ModalWrapper component, a reusable modal component for displaying information overlays in the application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - The ModalWrapper component is designed to be flexible and can display custom content, including titles, subtitles, icons, and buttons.
 *  - It uses styled-components for layout and styling, ensuring consistency with the application's theme.
 *  - The modal appears centered on the screen with a semi-transparent backdrop to focus the user's attention on the modal content.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial creation of the ModalWrapper component with responsive design and theme integration.
 *  - Added support for custom icons and button titles for versatility in different contexts.
 *  - Enhanced accessibility and user experience with clear and concise content presentation.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - The component is crucial for displaying important information, warnings, or confirmations to the user in a visually appealing manner.
 *  - Careful consideration has been given to ensure that the modal is both attention-grabbing and non-intrusive.
 ***************************************************************************************************************************/

import { FC } from 'react'
import styled from 'styled-components'
import Button from '../Button'

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
`

const ModalContent = styled.div`
  width: 600px;
  padding: 50px 25px;
  background: ${({ theme }) => theme.colors.cardBackground};
  border-radius: 10px;
  display: flex;
  align-items: center;
  flex-direction: column;
`

const ModalTitle = styled.h6`
  font-size: clamp(24px, 4vw, 32px);
  font-weight: 700;
  color: ${({ theme }) => theme.colors.themeColor};
  margin-top: 26px;
  margin-bottom: 20px;
`

const ModalSubtitle = styled.p`
  font-size: 24px;
  font-size: clamp(18px, 4vw, 24px);
  font-weight: 500;
  text-align: center;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.primaryText};
  margin-bottom: clamp(18px, calc(18px + 28 * ((100vw - 600px) / 1320)), 48px);
`

interface ModalWrapperProps {
  title: string
  icon: JSX.Element
  buttonTitle: string
  onClick: () => void
}

const ModalWrapper: FC<ModalWrapperProps> = ({
  title,
  icon,
  buttonTitle,
  onClick,
}) => {
  return (
    <ModalContainer>
      <ModalContent>
        {icon}
        <ModalTitle>{title}</ModalTitle>
        <Button text={buttonTitle} onClick={onClick} bold big />
      </ModalContent>
    </ModalContainer>
  )
}

export default ModalWrapper
