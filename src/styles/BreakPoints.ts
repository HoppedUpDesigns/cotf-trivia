/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/styles/BreakPoints.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file defines the breakpoints for responsive design in the application, outlining sizes for various devices ranging from small mobile screens to large desktop monitors.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: It provides an interface and constants for screen sizes and a device object for media queries, allowing for tailored UI across different device sizes.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: Updated size constants and added xxl for big screens; refined media queries for better responsiveness.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: Be cautious when updating sizes as it can significantly affect the layout on different devices. Always test changes thoroughly.
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
