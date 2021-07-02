declare const appDetailsSelector: import("reselect").OutputSelector<any, {
    allSubbedMarketplaceApps: import("../Marketplace/types").SubbedMarketplaceApp[];
    publisherAppsSample: import("../Marketplace/types").AppDetails[];
    retrievedPublisherAppsSample: boolean;
    retrievedSelectedAppDetails: boolean;
    selectedAppDetails: import("../Marketplace/types").AppDetails;
    userProfile: any;
}, (res1: any, res2: any) => {
    allSubbedMarketplaceApps: import("../Marketplace/types").SubbedMarketplaceApp[];
    publisherAppsSample: import("../Marketplace/types").AppDetails[];
    retrievedPublisherAppsSample: boolean;
    retrievedSelectedAppDetails: boolean;
    selectedAppDetails: import("../Marketplace/types").AppDetails;
    userProfile: any;
}>;
export default appDetailsSelector;
