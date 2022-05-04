import { createSelector } from 'reselect';
const appConnectorConfigSelector = createSelector(({ marketplace }) => marketplace, ({ profile }) => profile, (marketplace, profile) => {
    return {
        selectedAppDetails: marketplace.selectedAppDetails,
        appConnectorConfigDetails: marketplace.appConnectorConfigDetails,
        appConnectorSubscriptionDetails: marketplace.appConnectorSubscriptionDetails,
        appConnectorSubscribed: marketplace.appConnectorSubscribed,
        userProfile: profile.profile.user,
    };
});
export default appConnectorConfigSelector;
