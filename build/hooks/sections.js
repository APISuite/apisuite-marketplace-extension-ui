import React from 'react';
import SubbedMarketplaceAppCards from '../components/SubbedMarketplaceAppCards';
const sections = {
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
