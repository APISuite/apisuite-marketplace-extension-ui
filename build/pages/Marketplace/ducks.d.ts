import { AppDetails, Filters, MarketplaceActions, MarketplacePublisher, MarketplaceStore, SubbedMarketplaceApp, Pagination } from './types';
/** Action types */
export declare const GET_ALL_MARKETPLACE_APPS_ACTION = "Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION";
export declare const GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS = "Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS";
export declare const GET_ALL_MARKETPLACE_LABELS_ACTION = "Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION";
export declare const GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS = "Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS";
export declare const GET_ALL_MARKETPLACE_PUBLISHERS_ACTION = "Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION";
export declare const GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS = "Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS";
export declare const GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION = "Marketplace/GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION";
export declare const GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS = "Marketplace/GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS";
export declare const GET_APP_DETAILS_ACTION = "Marketplace/GET_APP_DETAILS_ACTION";
export declare const GET_APP_DETAILS_ACTION_SUCCESS = "Marketplace/GET_APP_DETAILS_ACTION_SUCCESS";
export declare const GET_FILTERED_MARKETPLACE_APPS_ACTION = "Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION";
export declare const GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS = "Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS";
export declare const SUBSCRIBE_TO_MARKETPLACE_APP_ACTION = "Marketplace/SUBSCRIBE_TO_MARKETPLACE_APP_ACTION";
export declare const SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS = "Marketplace/SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS";
export declare const UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION = "Marketplace/UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION";
export declare const UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS = "Marketplace/UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS";
/** Reducer */
export default function reducer(state: MarketplaceStore, action: MarketplaceActions): MarketplaceStore;
/** Action builders */
export declare function getAllMarketplaceAppsAction(pagination: {
    page: number;
    pageSize: number;
}): {
    type: string;
    pagination: {
        page: number;
        pageSize: number;
    };
};
export declare function getAllMarketplaceAppsActionSuccess(allMarketplaceApps: AppDetails[]): {
    type: string;
    allMarketplaceApps: AppDetails[];
};
export declare function getAllMarketplaceLabelsAction(): {
    type: string;
};
export declare function getAllMarketplaceLabelsActionSuccess(allMarketplaceLabels: string[]): {
    type: string;
    allMarketplaceLabels: string[];
};
export declare function getAllMarketplacePublishersAction(): {
    type: string;
};
export declare function getAllMarketplacePublishersActionSuccess(allMarketplacePublishers: MarketplacePublisher[]): {
    type: string;
    allMarketplacePublishers: MarketplacePublisher[];
};
export declare function getAllSubbedMarketplaceAppsAction(userID: number): {
    type: string;
    userID: number;
};
export declare function getAllSubbedMarketplaceAppsActionSuccess(allSubbedMarketplaceApps: SubbedMarketplaceApp[]): {
    type: string;
    allSubbedMarketplaceApps: SubbedMarketplaceApp[];
};
export declare function subscribeToMarketplaceAppAction(userID: number, appID: number): {
    type: string;
    userID: number;
    appID: number;
};
export declare function subscribeToMarketplaceAppActionSuccess(): {
    type: string;
};
export declare function unsubscribeToMarketplaceAppAction(userID: number, appID: number): {
    type: string;
    userID: number;
    appID: number;
};
export declare function unsubscribeToMarketplaceAppActionSuccess(): {
    type: string;
};
export declare function getFilteredMarketplaceAppsAction(filters: Filters): {
    type: string;
    filters: Filters;
};
export declare function getFilteredMarketplaceAppsActionSuccess(payload: {
    filteredMarketplaceApps: AppDetails[];
    pagination: Pagination;
}): {
    filteredMarketplaceApps: AppDetails[];
    pagination: Pagination;
    type: string;
};
export declare function getAppDetailsAction(appID: string): {
    type: string;
    appID: string;
};
export declare function getAppDetailsActionSuccess(appDetails: AppDetails): {
    type: string;
    appDetails: AppDetails;
};
