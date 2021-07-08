import { call, put, takeLatest } from 'redux-saga/effects';
import request from '../../util/request';
import { GET_ALL_MARKETPLACE_APPS_ACTION, GET_ALL_MARKETPLACE_LABELS_ACTION, GET_ALL_MARKETPLACE_PUBLISHERS_ACTION, GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION, GET_APP_DETAILS_ACTION, GET_FILTERED_MARKETPLACE_APPS_ACTION, GET_PUBLISHER_APPS_SAMPLE_ACTION, GET_PUBLISHER_DETAILS_ACTION, getAllMarketplaceAppsActionSuccess, getAllMarketplaceLabelsActionSuccess, getAllMarketplacePublishersActionSuccess, getAllSubbedMarketplaceAppsActionError, getAllSubbedMarketplaceAppsActionSuccess, getAppDetailsActionSuccess, getFilteredMarketplaceAppsActionSuccess, getPublisherAppsSampleActionSuccess, getPublisherDetailsActionSuccess, SUBSCRIBE_TO_MARKETPLACE_APP_ACTION, subscribeToMarketplaceAppActionSuccess, UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION, unsubscribeToMarketplaceAppActionSuccess, getPublisherDetailsActionError, } from './ducks';
import { API_URL, MARKETPLACE_API_URL } from '../../constants/endpoints';
import appDetailsMapping from '../../util/appDetailsMapping';
export function* getAllMarketplaceAppsActionSaga(action) {
    try {
        const getAllMarketplaceAppsActionUrl = `${API_URL}/apps/public?page=${action.pagination.page}&pageSize=${action.pagination.pageSize}&sort_by=app&order=asc`;
        const response = yield call(request, {
            url: getAllMarketplaceAppsActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        const allMarketplaceApps = response.rows.map((app) => {
            return appDetailsMapping(app);
        });
        yield put(getAllMarketplaceAppsActionSuccess(allMarketplaceApps));
    }
    catch (error) {
        console.log('Error fetching all marketplace apps', error);
    }
}
export function* getAllMarketplaceLabelsActionSaga() {
    try {
        const getAllMarketplaceLabelsActionUrl = `${API_URL}/apps/public/labels`;
        const response = yield call(request, {
            url: getAllMarketplaceLabelsActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        yield put(getAllMarketplaceLabelsActionSuccess(response));
    }
    catch (error) {
        console.log("Error fetching all marketplace apps' labels");
    }
}
export function* getAllMarketplacePublishersActionSaga() {
    try {
        const getAllMarketplacePublishersActionUrl = `${API_URL}/organizations/publishers`;
        const response = yield call(request, {
            url: getAllMarketplacePublishersActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        yield put(getAllMarketplacePublishersActionSuccess(response));
    }
    catch (error) {
        console.log("Error fetching all marketplace apps' publishers");
    }
}
export function* getAllSubbedMarketplaceAppsActionSaga(action) {
    try {
        const getAllSubbedMarketplaceAppsActionUrl = `${MARKETPLACE_API_URL}/users/${action.userID}/subscriptions`;
        const response = yield call(request, {
            url: getAllSubbedMarketplaceAppsActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        yield put(getAllSubbedMarketplaceAppsActionSuccess(response.data));
    }
    catch (error) {
        console.log('Error fetching all subscribed marketplace apps');
        yield put(getAllSubbedMarketplaceAppsActionError());
    }
}
export function* subscribeToMarketplaceAppActionSaga(action) {
    try {
        const subscribeToMarketplaceAppActionUrl = `${MARKETPLACE_API_URL}/users/${action.userID}/subscriptions/${action.appID}`;
        yield call(request, {
            url: subscribeToMarketplaceAppActionUrl,
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        yield put(subscribeToMarketplaceAppActionSuccess());
    }
    catch (error) {
        console.log('Error subscribing');
    }
}
export function* unsubscribeToMarketplaceAppActionSaga(action) {
    try {
        const unsubscribeToMarketplaceAppActionUrl = `${MARKETPLACE_API_URL}/users/${action.userID}/subscriptions/${action.appID}`;
        yield call(request, {
            url: unsubscribeToMarketplaceAppActionUrl,
            method: 'DELETE',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        yield put(unsubscribeToMarketplaceAppActionSuccess());
    }
    catch (error) {
        console.log('Error unsubscribing');
    }
}
export function* getFilteredMarketplaceAppsActionSaga(action) {
    try {
        let getFilteredMarketplaceAppsActionUrl = `${API_URL}/apps/public`;
        let orgIDParameters = '';
        let labelParameters = '';
        let sortModeParameters = '';
        let orderModeParameters = '';
        if (action.filters.org_id.length !== 0) {
            action.filters.org_id.map((orgID, index) => {
                if (index === 0) {
                    orgIDParameters = orgIDParameters + `?org_id=${orgID}`;
                }
                else {
                    orgIDParameters = orgIDParameters + `&org_id=${orgID}`;
                }
            });
        }
        if (action.filters.label.length !== 0) {
            action.filters.label.map((label, index) => {
                if (index === 0 && orgIDParameters.length === 0) {
                    labelParameters = labelParameters + `?label=${label}`;
                }
                else {
                    labelParameters = labelParameters + `&label=${label}`;
                }
            });
        }
        if (orgIDParameters.length === 0 && labelParameters.length === 0) {
            sortModeParameters =
                sortModeParameters + `?sort_by=${action.filters.sort_by}`;
        }
        else {
            sortModeParameters =
                sortModeParameters + `&sort_by=${action.filters.sort_by}`;
        }
        if (orgIDParameters.length === 0 &&
            labelParameters.length === 0 &&
            sortModeParameters.length === 0) {
            orderModeParameters =
                orderModeParameters + `?order=${action.filters.order}`;
        }
        else {
            orderModeParameters =
                orderModeParameters + `&order=${action.filters.order}`;
        }
        let prefix = orgIDParameters.length === 0 &&
            labelParameters.length === 0 &&
            sortModeParameters.length === 0
            ? '?'
            : '&';
        const pagination = `${prefix}page=${action.filters.page}&pageSize=${action.filters.pageSize}`;
        prefix =
            orgIDParameters.length === 0 &&
                labelParameters.length === 0 &&
                sortModeParameters.length === 0 &&
                pagination.length === 0
                ? '?'
                : '&';
        const search = action.filters.search.length
            ? `${prefix}search=${action.filters.search}`
            : '';
        getFilteredMarketplaceAppsActionUrl =
            getFilteredMarketplaceAppsActionUrl +
                orgIDParameters +
                labelParameters +
                sortModeParameters +
                orderModeParameters +
                pagination +
                search;
        const response = yield call(request, {
            url: getFilteredMarketplaceAppsActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        const filteredMarketplaceApps = response.rows.map((app) => {
            return appDetailsMapping(app);
        });
        yield put(getFilteredMarketplaceAppsActionSuccess({
            filteredMarketplaceApps,
            pagination: response.pagination,
            view: action.view,
        }));
    }
    catch (error) {
        console.log('Error fetching filtered marketplace apps', error);
    }
}
export function* getAppDetailsActionSaga(action) {
    try {
        const getAppDetailsActionUrl = `${API_URL}/apps/public/${action.appID}`;
        const response = yield call(request, {
            url: getAppDetailsActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        yield put(getAppDetailsActionSuccess(response));
    }
    catch (error) {
        console.log("Error fetching the selected app's details");
    }
}
export function* getPublisherAppsSampleActionSaga(action) {
    try {
        const getPublisherAppsSampleActionUrl = `${API_URL}/apps/public?org_id=${action.orgID}&sort_by=updated&order=desc&page=1&pageSize=4`;
        const response = yield call(request, {
            url: getPublisherAppsSampleActionUrl,
            method: 'GET',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
            },
        });
        const publisherAppsSample = response.rows
            .filter((app) => {
            return app.id !== action.appID;
        })
            .slice(0, 3)
            .map((app) => {
            return appDetailsMapping(app);
        });
        yield put(getPublisherAppsSampleActionSuccess({
            publisherAppsSample,
        }));
    }
    catch (error) {
        console.log('Error fetching a sample of publisher apps', error);
    }
}
export function* getPublisherDetailsActionSaga(action) {
    try {
        const publisherDetails = yield call(request, {
            url: `${API_URL}/organizations/publishers/${action.publisherID}`,
            method: 'GET',
        });
        yield put(getPublisherDetailsActionSuccess(publisherDetails));
    }
    catch (error) {
        console.log("Error retrieving the publisher's details", error);
        yield put(getPublisherDetailsActionError());
    }
}
function* rootSaga() {
    yield takeLatest(GET_ALL_MARKETPLACE_APPS_ACTION, getAllMarketplaceAppsActionSaga);
    yield takeLatest(GET_ALL_MARKETPLACE_LABELS_ACTION, getAllMarketplaceLabelsActionSaga);
    yield takeLatest(GET_ALL_MARKETPLACE_PUBLISHERS_ACTION, getAllMarketplacePublishersActionSaga);
    yield takeLatest(GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION, getAllSubbedMarketplaceAppsActionSaga);
    yield takeLatest(SUBSCRIBE_TO_MARKETPLACE_APP_ACTION, subscribeToMarketplaceAppActionSaga);
    yield takeLatest(UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION, unsubscribeToMarketplaceAppActionSaga);
    yield takeLatest(GET_FILTERED_MARKETPLACE_APPS_ACTION, getFilteredMarketplaceAppsActionSaga);
    yield takeLatest(GET_APP_DETAILS_ACTION, getAppDetailsActionSaga);
    yield takeLatest(GET_PUBLISHER_APPS_SAMPLE_ACTION, getPublisherAppsSampleActionSaga);
    yield takeLatest(GET_PUBLISHER_DETAILS_ACTION, getPublisherDetailsActionSaga);
}
export default rootSaga;
