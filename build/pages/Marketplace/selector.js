import { createSelector } from 'reselect';
const marketplaceSelector = createSelector(({ marketplace }) => marketplace, (marketplace) => {
    return {
        allMarketplaceApps: marketplace.allMarketplaceApps,
        allMarketplaceLabels: marketplace.allMarketplaceLabels,
        allMarketplacePublishers: marketplace.allMarketplacePublishers,
        filteredMarketplaceApps: marketplace.filteredMarketplaceApps,
        retrievedAllMarketplaceApps: marketplace.retrievedAllMarketplaceApps,
        retrievedAllMarketplaceLabels: marketplace.retrievedAllMarketplaceLabels,
        retrievedAllMarketplacePublishers: marketplace.retrievedAllMarketplacePublishers,
        pagination: marketplace.pagination,
    };
});
export default marketplaceSelector;
