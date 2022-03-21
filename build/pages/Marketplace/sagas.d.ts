import { GetAllMarketplaceAppsAction, GetAllSubbedMarketplaceAppsAction, GetAppConnectorConfigAction, GetAppConnectorSubscriptionAction, GetAppDetailsAction, GetFilteredAppsMarketplaceAction, GetPublisherAppsSampleAction, GetPublisherDetailsAction, SubscribeToMarketplaceAppAction, UnsubscribeToMarketplaceAppAction, SetPollingStatusAction, SubscribeAppConnectorAction, UnsubscribeAppConnectorAction } from './types';
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
    view: import("./types").View;
    type: string;
}>, void, unknown>;
export declare function getAppDetailsActionSaga(action: GetAppDetailsAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    appDetails: import("./types").AppDetails;
}>, void, unknown>;
export declare function getPublisherAppsSampleActionSaga(action: GetPublisherAppsSampleAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    publisherAppsSample: import("./types").AppDetails[];
    type: string;
}>, void, unknown>;
export declare function getPublisherDetailsActionSaga(action: GetPublisherDetailsAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, unknown>;
export declare function getAppConnectorConfigActionSaga(action: GetAppConnectorConfigAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
    appConnectorConfigDetails: import("./types").AppConnectorConfigDetails;
}>, void, unknown>;
export declare function getAppConnectorSubscriptionActionSaga(action: GetAppConnectorSubscriptionAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, unknown>;
export declare function subscribeAppConnectorActionSaga(action: SubscribeAppConnectorAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, unknown>;
export declare function unsubscribeAppConnectorActionSaga(action: UnsubscribeAppConnectorAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, unknown>;
export declare function setPollingStatusActionSaga(action: SetPollingStatusAction): Generator<import("redux-saga/effects").CallEffect<any> | import("redux-saga/effects").PutEffect<{
    type: string;
}>, void, unknown>;
declare function rootSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export default rootSaga;
