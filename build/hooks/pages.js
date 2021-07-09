import { BASE_URI } from '../helpers/constants';
import AppDetails from '../pages/AppDetails';
import Marketplace from '../pages/Marketplace';
import { PublisherDetails } from '../pages/PublisherDetails';
const pagesConfig = [
    {
        auth: false,
        component: Marketplace,
        exact: true,
        path: BASE_URI,
    },
    {
        auth: false,
        component: AppDetails,
        exact: true,
        path: `${BASE_URI}/app-details/:appID`,
    },
    {
        auth: false,
        component: PublisherDetails,
        exact: true,
        path: `${BASE_URI}/publisher-details/:publisherID`,
    },
];
const hookPages = () => {
    return pagesConfig;
};
export default hookPages;
