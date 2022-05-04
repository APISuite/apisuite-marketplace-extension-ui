declare const appConnectorConfigSelector: import("reselect").OutputSelector<any, {
    selectedAppDetails: import("../Marketplace/types").AppDetails;
    appConnectorConfigDetails: import("../Marketplace/types").AppConnectorConfigDetails;
    appConnectorSubscriptionDetails: import("../Marketplace/types").AppConnectorSubscriptionDetails;
    appConnectorSubscribed: boolean;
    userProfile: any;
}, (res1: any, res2: any) => {
    selectedAppDetails: import("../Marketplace/types").AppDetails;
    appConnectorConfigDetails: import("../Marketplace/types").AppConnectorConfigDetails;
    appConnectorSubscriptionDetails: import("../Marketplace/types").AppConnectorSubscriptionDetails;
    appConnectorSubscribed: boolean;
    userProfile: any;
}>;
export default appConnectorConfigSelector;
