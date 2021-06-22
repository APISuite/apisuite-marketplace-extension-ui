import React from 'react';
import MarketplaceAppSettings from '../components/MarketplaceAppSettings';
import SubbedMarketplaceAppCards from '../components/SubbedMarketplaceAppCards';
const sections = {
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
