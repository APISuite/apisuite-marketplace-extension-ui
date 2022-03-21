import { createSelector } from 'reselect';
const appConnectorConfigSelector = createSelector(({ marketplace }) => marketplace, (marketplace) => {
    return {
        selectedAppDetails: marketplace.selectedAppDetails,
        appConnectorConfigDetails: marketplace.appConnectorConfigDetails,
        appConnectorSubscriptionDetails: marketplace.appConnectorSubscriptionDetails,
        appConnectorSubscribed: marketplace.appConnectorSubscribed,
    };
});
export default appConnectorConfigSelector;
