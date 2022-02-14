import React from 'react';
import { ApplicationURL } from '../components/ExternalFormSection';
import MarketplaceAppSettings from '../components/MarketplaceAppSettings';
import SubbedMarketplaceAppCards from '../components/SubbedMarketplaceAppCards';
const sections = {
    ['APPLICATION_NAV_FORM_SECTION']: ApplicationURL,
    ['MARKETPLACE_APP_SETTINGS']: MarketplaceAppSettings,
    ['SUBBED_MARKETPLACE_APPS']: SubbedMarketplaceAppCards,
};
const hookSections = (section, props) => {
    const Component = sections[section];
    if (Component) {
        return React.createElement(Component, Object.assign({}, props));
    }
    return null;
};
export default hookSections;
