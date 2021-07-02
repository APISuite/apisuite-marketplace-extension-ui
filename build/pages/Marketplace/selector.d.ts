declare const marketplaceSelector: import("reselect").OutputSelector<any, {
    allMarketplaceApps: import("./types").AppDetails[];
    allMarketplaceLabels: string[];
    allMarketplacePublishers: import("./types").MarketplacePublisher[];
    filteredMarketplaceApps: import("./types").AppDetails[];
    retrievedAllMarketplaceApps: boolean;
    retrievedAllMarketplaceLabels: boolean;
    retrievedAllMarketplacePublishers: boolean;
    pagination: import("./types").Pagination;
}, (res: any) => {
    allMarketplaceApps: import("./types").AppDetails[];
    allMarketplaceLabels: string[];
    allMarketplacePublishers: import("./types").MarketplacePublisher[];
    filteredMarketplaceApps: import("./types").AppDetails[];
    retrievedAllMarketplaceApps: boolean;
    retrievedAllMarketplaceLabels: boolean;
    retrievedAllMarketplacePublishers: boolean;
    pagination: import("./types").Pagination;
}>;
export default marketplaceSelector;
