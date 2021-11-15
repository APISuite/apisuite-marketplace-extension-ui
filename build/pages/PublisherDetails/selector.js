import { createSelector } from 'reselect';
const publisherDetailsSelector = createSelector(({ marketplace }) => marketplace, (marketplace) => {
    return {
        allPublisherApps: marketplace.allPublisherApps,
        pagination: marketplace.pagination,
        publisherDetails: marketplace.publisherDetails,
        retrievedAllPublisherApps: marketplace.retrievedAllPublisherApps,
        retrievedPublisherDetails: marketplace.retrievedPublisherDetails,
        retrievedPublisherDetailsError: marketplace.retrievedPublisherDetailsError,
    };
});
export default publisherDetailsSelector;
