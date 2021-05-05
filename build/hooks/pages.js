import AppDetails from '../pages/AppDetails';
import Marketplace from '../pages/Marketplace';
const pagesConfig = [
    {
        auth: false,
        component: Marketplace,
        exact: true,
        path: '/marketplace',
    },
    {
        auth: false,
        component: AppDetails,
        exact: true,
        path: '/marketplace/app-details/:appID',
    },
];
const hookPages = () => {
    return pagesConfig;
};
export default hookPages;
