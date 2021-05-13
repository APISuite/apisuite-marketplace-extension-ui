import { GetAllMarketplaceAppsAction, GetAllSubbedMarketplaceAppsAction, GetAppDetailsAction, GetFilteredAppsMarketplaceAction, SubscribeToMarketplaceAppAction, UnsubscribeToMarketplaceAppAction } from './types';
export declare function getAllMarketplaceAppsActionSaga(action: GetAllMarketplaceAppsAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    allMarketplaceApps: import("./types").AppDetails[];
}>, void, unknown>;
export declare function getAllMarketplaceLabelsActionSaga(): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    allMarketplaceLabels: string[];
}>, void, unknown>;
export declare function getAllMarketplacePublishersActionSaga(): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    allMarketplacePublishers: import("./types").MarketplacePublisher[];
}>, void, unknown>;
export declare function getAllSubbedMarketplaceAppsActionSaga(action: GetAllSubbedMarketplaceAppsAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    allSubbedMarketplaceApps: import("./types").SubbedMarketplaceApp[];
}>, void, unknown>;
export declare function subscribeToMarketplaceAppActionSaga(action: SubscribeToMarketplaceAppAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, unknown>;
export declare function unsubscribeToMarketplaceAppActionSaga(action: UnsubscribeToMarketplaceAppAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, unknown>;
export declare function getFilteredMarketplaceAppsActionSaga(action: GetFilteredAppsMarketplaceAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    filteredMarketplaceApps: import("./types").AppDetails[];
    pagination: import("./types").Pagination;
    type: string;
}>, void, unknown>;
export declare function getAppDetailsActionSaga(action: GetAppDetailsAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    appDetails: import("./types").AppDetails;
}>, void, unknown>;
declare function rootSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default rootSaga;
