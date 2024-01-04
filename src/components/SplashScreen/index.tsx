/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/components/SplashScreen/index.tsx
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the SplashScreen component, which is used to display a welcoming or loading screen while the application is initializing or fetching necessary data. The component primarily features an animated logo.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: - Displays an animated logo during application initialization.
 *                 - Adjusts the logo size based on the window's width to ensure responsiveness.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Implemented initial creation of the SplashScreen with a resizable logo.
 *     - Added responsive design support to ensure the logo looks good on various screen sizes.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - This component is crucial for enhancing user experience by providing a visual cue during loading times.
 *     - Future updates might include more complex animations or branding elements to enrich the initial user interaction.
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
