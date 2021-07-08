declare const publisherDetailsSelector: import("reselect").OutputSelector<any, {
    allPublisherApps: import("../Marketplace/types").AppDetails[];
    pagination: import("../Marketplace/types").Pagination;
    publisherDetails: import("../Marketplace/types").PublisherDetails;
    retrievedAllPublisherApps: boolean;
    retrievedPublisherDetails: boolean;
    retrievedPublisherDetailsError: boolean;
}, (res: any) => {
    allPublisherApps: import("../Marketplace/types").AppDetails[];
    pagination: import("../Marketplace/types").Pagination;
    publisherDetails: import("../Marketplace/types").PublisherDetails;
    retrievedAllPublisherApps: boolean;
    retrievedPublisherDetails: boolean;
    retrievedPublisherDetailsError: boolean;
}>;
export default publisherDetailsSelector;
