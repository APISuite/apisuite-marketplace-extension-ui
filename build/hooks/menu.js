import { Menus } from '@apisuite/extension-ui-types';
import { BASE_URI } from '../helpers/constants';
const menuConfig = {
    [Menus.HeaderAnonymousMain]: [
        {
            label: 'Marketplace',
            title: 'Marketplace',
            route: BASE_URI,
        },
    ],
    [Menus.HeaderAuthenticatedMain]: [
        {
            label: 'Marketplace',
            title: 'Marketplace',
            route: BASE_URI,
        },
    ],
};
const hookMenu = (menu) => {
    return menuConfig[menu] || null;
};
export default hookMenu;
