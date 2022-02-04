import { createSelector } from 'reselect';
const marketplaceSelector = createSelector(({ marketplace }) => marketplace, ({ profile }) => profile, (marketplace, profile) => {
    return {
        allMarketplaceApps: marketplace.allMarketplaceApps,
        allMarketplaceLabels: marketplace.allMarketplaceLabels,
        allMarketplacePublishers: marketplace.allMarketplacePublishers,
        filteredMarketplaceApps: marketplace.filteredMarketplaceApps,
        retrievedAllMarketplaceApps: marketplace.retrievedAllMarketplaceApps,
        retrievedAllMarketplaceLabels: marketplace.retrievedAllMarketplaceLabels,
        retrievedAllMarketplacePublishers: marketplace.retrievedAllMarketplacePublishers,
        pagination: marketplace.pagination,
        userCurrentOrg: profile.profile.currentOrg,
        userProfile: profile.profile.user,
    };
});
export default marketplaceSelector;
