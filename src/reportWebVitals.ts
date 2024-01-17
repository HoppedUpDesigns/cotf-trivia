/***************************************************************************************************************************
 * @file: /Users/jason/Sites/cotf/src/reportWebVitals.ts
 * -----------------------------------------------------------------------------------------------------------------------------------------------
 * @description: This file includes the functionality to measure and report web vitals, which are metrics related to the performance of a web page.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * @functionality: 
 *   - This file defines a function to report various web performance metrics (CLS, FID, FCP, LCP, TTFB) for the application.
 *   - It leverages the 'web-vitals' library to capture these metrics.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Created by: Jason McCoy
 * Created on: 12/30/2023
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Last Updated by: Jason McCoy
 * Last Updated on: 01/16/2024
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Changes made: 
 *     - Initial implementation of the reportWebVitals function to measure key performance indicators of the web application.
 * ---------------------------------------------------------------------------------------------------------------------------------------------
 * Notes: 
 *     - The function reportWebVitals is optional and can be used to measure and analyze the performance of the web application.
 *     - CLS (Cumulative Layout Shift), FID (First Input Delay), FCP (First Contentful Paint), LCP (Largest Contentful Paint), and TTFB (Time to First Byte) are the metrics reported.
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