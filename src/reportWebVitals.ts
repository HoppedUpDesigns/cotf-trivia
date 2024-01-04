/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/reportWebVitals.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file contains a function to report website performance metrics using the web-vitals library.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: Provides a utility function to measure and report on a variety of web performance metrics. These metrics can help understand areas of the site that can be improved for a better user experience.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/04/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial setup to import and utilize web vitals reporting functions.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - This file is part of the Create React App setup and is used to measure the performance of the app in production.
 *     - Web vitals are important for understanding real-world user experience and can contribute to improving site ranking and user satisfaction.
 ***************************************************************************************************************************/

import { ReportHandler } from 'web-vitals';

const reportWebVitals = (onPerfEntry?: ReportHandler) => {
  if (onPerfEntry && onPerfEntry instanceof Function) {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      getCLS(onPerfEntry);
      getFID(onPerfEntry);
      getFCP(onPerfEntry);
      getLCP(onPerfEntry);
      getTTFB(onPerfEntry);
    });
  }
};

export default reportWebVitals;
