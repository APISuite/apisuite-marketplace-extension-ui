declare const appConnectorConfigSelector: import("reselect").OutputSelector<any, {
    selectedAppDetails: import("../Marketplace/types").AppDetails;
    appConnectorConfigDetails: import("../Marketplace/types").AppConnectorConfigDetails;
    appConnectorSubscriptionDetails: import("../Marketplace/types").AppConnectorSubscriptionDetails;
    appConnectorSubscribed: boolean;
}, (res: any) => {
    selectedAppDetails: import("../Marketplace/types").AppDetails;
    appConnectorConfigDetails: import("../Marketplace/types").AppConnectorConfigDetails;
    appConnectorSubscriptionDetails: import("../Marketplace/types").AppConnectorSubscriptionDetails;
    appConnectorSubscribed: boolean;
}>;
export default appConnectorConfigSelector;
