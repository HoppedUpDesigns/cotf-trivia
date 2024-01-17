/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/SplashScreen/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file implements the SplashScreen component, which is the initial screen displayed when the application is loaded.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - The component features an animated logo that changes size based on the window's width.
 *  - The logo's size is dynamically adjusted using React's useState and useEffect hooks to respond to window resize events.
 *  - It uses styled-components for defining the logo's size and transition effects.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/16/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial development of the SplashScreen component with responsive logo animation.
 *  - Implemented window resize listener to adjust the logo size dynamically.
 *  - Styled the component to align with the application's overall design theme.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - The SplashScreen serves as an engaging entry point for users, enhancing the overall user experience.
 *  - The responsive design ensures a consistent look across various device sizes.
 ***************************************************************************************************************************/

import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { AppLogo } from '../../config/icons'
import { PageCenter } from '../../styles/Global'

interface LogoAnimationProps {
  logoSize: string
}

const LogoAnimation = styled.div<LogoAnimationProps>`
  svg {
    width: ${({ logoSize }) => logoSize};
    transition: width 1s;
  }
`

const SplashScreen = () => {
  const [logoSize, setLogoSize] = useState('80px')

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setLogoSize('240px')
      } else {
        setLogoSize('350px')
      }
    }

    // Set initial logo size
    handleResize()

    // Update logo size on window resize
    window.addEventListener('resize', handleResize)

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <PageCenter justifyCenter>
      <LogoAnimation logoSize={logoSize}>
        <AppLogo />
      </LogoAnimation>
    </PageCenter>
  )
}

export default SplashScreen
