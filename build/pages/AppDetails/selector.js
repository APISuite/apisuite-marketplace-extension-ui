import { createSelector } from 'reselect';
const appDetailsSelector = createSelector(({ marketplace }) => marketplace, ({ profile }) => profile, (marketplace, profile) => {
    return {
        allSubbedMarketplaceApps: marketplace.allSubbedMarketplaceApps,
        publisherAppsSample: marketplace.publisherAppsSample,
        retrievedPublisherAppsSample: marketplace.retrievedPublisherAppsSample,
        retrievedSelectedAppDetails: marketplace.retrievedSelectedAppDetails,
        selectedAppDetails: marketplace.selectedAppDetails,
        userProfile: profile.profile.user,
    };
});
export default appDetailsSelector;
