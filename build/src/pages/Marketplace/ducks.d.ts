import { AppDetails, Filters, MarketplaceActions, MarketplacePublishers, MarketplaceStore } from './types';
/** Action types */
export declare const GET_ALL_MARKETPLACE_APPS_ACTION = "Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION";
export declare const GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS = "Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS";
export declare const GET_ALL_MARKETPLACE_LABELS_ACTION = "Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION";
export declare const GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS = "Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS";
export declare const GET_ALL_MARKETPLACE_PUBLISHERS_ACTION = "Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION";
export declare const GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS = "Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS";
export declare const GET_FILTERED_MARKETPLACE_APPS_ACTION = "Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION";
export declare const GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS = "Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS";
export declare const GET_APP_DETAILS_ACTION = "Marketplace/GET_APP_DETAILS_ACTION";
export declare const GET_APP_DETAILS_ACTION_SUCCESS = "Marketplace/GET_APP_DETAILS_ACTION_SUCCESS";
/** Reducer */
export default function reducer(state: MarketplaceStore, action: MarketplaceActions): MarketplaceStore;
/** Action builders */
export declare function getAllMarketplaceAppsAction(): {
    type: string;
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
export declare function getAllMarketplacePublishersActionSuccess(allMarketplacePublishers: MarketplacePublishers[]): {
    type: string;
    allMarketplacePublishers: MarketplacePublishers[];
};
export declare function getFilteredMarketplaceAppsAction(filters: Filters): {
    type: string;
    filters: Filters;
};
export declare function getFilteredMarketplaceAppsActionSuccess(filteredMarketplaceApps: AppDetails[]): {
    type: string;
    filteredMarketplaceApps: AppDetails[];
};
export declare function getAppDetailsAction(appID: string): {
    type: string;
    appID: string;
};
export declare function getAppDetailsActionSuccess(appDetails: AppDetails): {
    type: string;
    appDetails: AppDetails;
};
