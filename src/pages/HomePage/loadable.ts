/**
 *
 * Asynchronously loads the component
 *
 */

 import { lazyLoad } from "../../utils/loadable"

 export const HomePage = lazyLoad(
   () => import('./index'),
   module => module.HomePage,
 );
 