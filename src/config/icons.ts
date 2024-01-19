/***************************************************************************************************************************
 * @file: PROJECT-ROOT-FOLDER/src/config/icons.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: 
 *  - This file serves as a centralized hub for importing and exporting SVG icons used throughout the application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *  - It imports various SVG icons as React components from the assets directory.
 *  - The icons are then exported for use in different components, ensuring consistency in iconography across the app.
 *  - Icons include common UI elements like navigation arrows, refresh, timer, thematic icons like sun and moon, and the app logo.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/19/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *  - Initial setup of icon imports and exports.
 *  - Addition of new icons as required by the evolving UI design.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *  - The use of SVG icons ensures high-quality visuals at any scale, important for responsive design.
 *  - Keeping all icon imports in one file simplifies maintenance and updates to the icon set.
 ***************************************************************************************************************************/

import { ReactComponent as AppLogo } from '../assets/icons/app-logo.svg'
import { ReactComponent as CheckIcon } from '../assets/icons/check.svg'
import { ReactComponent as Next } from '../assets/icons/next.svg'
import { ReactComponent as Previous } from '../assets/icons/previous.svg'
import { ReactComponent as Refresh } from '../assets/icons/refresh.svg'
import { ReactComponent as TimerIcon } from '../assets/icons/timer.svg'
import { ReactComponent as StartIcon } from '../assets/icons/start.svg'
import { ReactComponent as Sun } from '../assets/icons/sun.svg'
import { ReactComponent as Moon } from '../assets/icons/moon.svg'
import { ReactComponent as Coheed } from '../assets/icons/coheed.svg'
import { ReactComponent as Done } from '../assets/icons/done.svg'
import { ReactComponent as TimesUp } from '../assets/icons/timesUp.svg'

export { AppLogo, CheckIcon, Next, Previous, Refresh, TimerIcon, StartIcon, Sun, Moon, Coheed, Done, TimesUp }
