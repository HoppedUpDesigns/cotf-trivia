/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/styles/BreakPoints.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - Defines the breakpoints for responsive design in the quiz application.
 *  - Contains a range of sizes to accommodate different screen sizes.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - Provides a centralized location for managing responsive breakpoints.
 *  - Used across the application to ensure consistent and adaptive layouts.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/16/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Established specific breakpoints for various device categories (mobile, tablet, laptop, desktop, etc.).
 *  - Ensured the application layout adapts seamlessly across a wide range of screen sizes.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - These breakpoints can be used throughout the application's styled components for responsive design.
 *  - The breakpoints should be updated or extended if new device sizes need to be supported.
 ***************************************************************************************************************************/

interface Size {
  xs: string
  sm: string
  md: string
  lg: string
  xl: string
  xxl: string
}

const size: Size = {
  xs: '400px', // for small screen mobile
  sm: '600px', // for mobile screen
  md: '900px', // for tablets
  lg: '1280px', // for laptops
  xl: '1440px', // for desktop / monitors
  xxl: '1920px', // for big screens
}

export const device = {
  xs: `(max-width: ${size.xs})`,
  sm: `(max-width: ${size.sm})`,
  md: `(max-width: ${size.md})`,
  lg: `(max-width: ${size.lg})`,
  xl: `(max-width: ${size.xl})`,
  xxl: `(max-width: ${size.xxl})`,
}
