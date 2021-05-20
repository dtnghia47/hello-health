/**
 *
 * Asynchronously loads the component
 *
 */

 import { lazyLoad } from "../../utils/loadable"

 export const CountPage = lazyLoad(
   () => import('./index'),
   module => module.CountPage,
 );
 