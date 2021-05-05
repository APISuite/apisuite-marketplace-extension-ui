import update from 'immutability-helper';
/** Initial state */
const initialState = {
    allMarketplaceApps: [],
    allMarketplaceLabels: [],
    allMarketplacePublishers: [],
    allSubbedMarketplaceApps: [],
    filteredMarketplaceApps: [],
    retrievedAllMarketplaceApps: false,
    retrievedAllMarketplaceLabels: false,
    retrievedAllMarketplacePublishers: false,
    retrievedAllSubbedMarketplaceApps: false,
    selectedAppDetails: {
        createdAt: '',
        description: '',
        id: 0,
        labels: [],
        logo: '',
        name: '',
        organization: {
            id: '',
            name: '',
            privacyUrl: '',
            supportUrl: '',
            tosUrl: '',
        },
        orgId: 0,
        privacyUrl: '',
        shortDescription: '',
        supportUrl: '',
        tosUrl: '',
        updatedAt: '',
        websiteUrl: '',
        youtubeUrl: '',
    },
    retrievedSelectedAppDetails: false,
};
/** Action types */
export const GET_ALL_MARKETPLACE_APPS_ACTION = 'Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION';
export const GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS = 'Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS';
export const GET_ALL_MARKETPLACE_LABELS_ACTION = 'Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION';
export const GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS = 'Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS';
export const GET_ALL_MARKETPLACE_PUBLISHERS_ACTION = 'Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION';
export const GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS = 'Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS';
export const GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION = 'Marketplace/GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION';
export const GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS = 'Marketplace/GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS';
export const GET_APP_DETAILS_ACTION = 'Marketplace/GET_APP_DETAILS_ACTION';
export const GET_APP_DETAILS_ACTION_SUCCESS = 'Marketplace/GET_APP_DETAILS_ACTION_SUCCESS';
export const GET_FILTERED_MARKETPLACE_APPS_ACTION = 'Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION';
export const GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS = 'Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS';
export const SUBSCRIBE_TO_MARKETPLACE_APP_ACTION = 'Marketplace/SUBSCRIBE_TO_MARKETPLACE_APP_ACTION';
export const SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS = 'Marketplace/SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS';
export const UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION = 'Marketplace/UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION';
export const UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS = 'Marketplace/UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS';
/** Reducer */
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_ALL_MARKETPLACE_APPS_ACTION: {
            return state;
        }
        case GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS: {
            return update(state, {
                allMarketplaceApps: { $set: action.allMarketplaceApps },
                retrievedAllMarketplaceApps: { $set: true },
            });
        }
        case GET_ALL_MARKETPLACE_LABELS_ACTION: {
            return state;
        }
        case GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS: {
            return update(state, {
                allMarketplaceLabels: { $set: action.allMarketplaceLabels },
                retrievedAllMarketplaceLabels: { $set: true },
            });
        }
        case GET_ALL_MARKETPLACE_PUBLISHERS_ACTION: {
            return state;
        }
        case GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS: {
            return update(state, {
                allMarketplacePublishers: { $set: action.allMarketplacePublishers },
                retrievedAllMarketplacePublishers: { $set: true },
            });
        }
        case GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION: {
            return state;
        }
        case GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS: {
            return update(state, {
                allSubbedMarketplaceApps: { $set: action.allSubbedMarketplaceApps },
                retrievedAllSubbedMarketplaceApps: { $set: true },
            });
        }
        case SUBSCRIBE_TO_MARKETPLACE_APP_ACTION:
        case SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS: {
            return state;
        }
        case UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION:
        case UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS: {
            return state;
        }
        case GET_FILTERED_MARKETPLACE_APPS_ACTION: {
            return state;
        }
        case GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS: {
            return update(state, {
                filteredMarketplaceApps: { $set: action.filteredMarketplaceApps },
            });
        }
        case GET_APP_DETAILS_ACTION: {
            return update(state, {
                retrievedSelectedAppDetails: { $set: false },
            });
        }
        case GET_APP_DETAILS_ACTION_SUCCESS: {
            return update(state, {
                selectedAppDetails: { $set: action.appDetails },
                retrievedSelectedAppDetails: { $set: true },
            });
        }
        default:
            return state;
    }
}
/** Action builders */
export function getAllMarketplaceAppsAction() {
    return { type: GET_ALL_MARKETPLACE_APPS_ACTION };
}
export function getAllMarketplaceAppsActionSuccess(allMarketplaceApps) {
    return { type: GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS, allMarketplaceApps };
}
export function getAllMarketplaceLabelsAction() {
    return { type: GET_ALL_MARKETPLACE_LABELS_ACTION };
}
export function getAllMarketplaceLabelsActionSuccess(allMarketplaceLabels) {
    return {
        type: GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS,
        allMarketplaceLabels,
    };
}
export function getAllMarketplacePublishersAction() {
    return { type: GET_ALL_MARKETPLACE_PUBLISHERS_ACTION };
}
export function getAllMarketplacePublishersActionSuccess(allMarketplacePublishers) {
    return {
        type: GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS,
        allMarketplacePublishers,
    };
}
export function getAllSubbedMarketplaceAppsAction(userID) {
    return {
        type: GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION,
        userID,
    };
}
export function getAllSubbedMarketplaceAppsActionSuccess(allSubbedMarketplaceApps) {
    return {
        type: GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS,
        allSubbedMarketplaceApps,
    };
}
export function subscribeToMarketplaceAppAction(userID, appID) {
    return {
        type: SUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
        userID,
        appID,
    };
}
export function subscribeToMarketplaceAppActionSuccess() {
    return {
        type: SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS,
    };
}
export function unsubscribeToMarketplaceAppAction(userID, appID) {
    return {
        type: UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
        userID,
        appID,
    };
}
export function unsubscribeToMarketplaceAppActionSuccess() {
    return {
        type: UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS,
    };
}
export function getFilteredMarketplaceAppsAction(filters) {
    return {
        type: GET_FILTERED_MARKETPLACE_APPS_ACTION,
        filters,
    };
}
export function getFilteredMarketplaceAppsActionSuccess(filteredMarketplaceApps) {
    return {
        type: GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS,
        filteredMarketplaceApps,
    };
}
export function getAppDetailsAction(appID) {
    return { type: GET_APP_DETAILS_ACTION, appID };
}
export function getAppDetailsActionSuccess(appDetails) {
    return { type: GET_APP_DETAILS_ACTION_SUCCESS, appDetails };
}
