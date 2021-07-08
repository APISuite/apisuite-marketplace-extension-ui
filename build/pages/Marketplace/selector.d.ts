declare const marketplaceSelector: import("reselect").OutputSelector<any, {
    allMarketplaceApps: import("./types").AppDetails[];
    allMarketplaceLabels: string[];
    allMarketplacePublishers: import("./types").MarketplacePublisher[];
    filteredMarketplaceApps: import("./types").AppDetails[];
    retrievedAllMarketplaceApps: boolean;
    retrievedAllMarketplaceLabels: boolean;
    retrievedAllMarketplacePublishers: boolean;
    pagination: import("./types").Pagination;
    userProfile: any;
}, (res1: any, res2: any) => {
    allMarketplaceApps: import("./types").AppDetails[];
    allMarketplaceLabels: string[];
    allMarketplacePublishers: import("./types").MarketplacePublisher[];
    filteredMarketplaceApps: import("./types").AppDetails[];
    retrievedAllMarketplaceApps: boolean;
    retrievedAllMarketplaceLabels: boolean;
    retrievedAllMarketplacePublishers: boolean;
    pagination: import("./types").Pagination;
    userProfile: any;
}>;
export default marketplaceSelector;
