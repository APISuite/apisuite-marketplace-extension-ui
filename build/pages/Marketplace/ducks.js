import update from 'immutability-helper';
/** Initial state */
const initialState = {
    // 'Marketplace' view
    allMarketplaceApps: [],
    allMarketplaceLabels: [],
    allMarketplacePublishers: [],
    allSubbedMarketplaceApps: [],
    filteredMarketplaceApps: [],
    retrievedAllMarketplaceApps: false,
    retrievedAllMarketplaceLabels: false,
    retrievedAllMarketplacePublishers: false,
    retrievedAllSubbedMarketplaceApps: false,
    pagination: {
        page: 1,
        pageCount: 0,
        pageSize: 1,
        rowCount: 0,
    },
    // 'App details' view
    selectedAppDetails: {
        createdAt: '',
        description: '',
        directUrl: '',
        id: 0,
        images: [],
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
    publisherAppsSample: [],
    retrievedPublisherAppsSample: false,
    // 'Publisher details' view
    allPublisherApps: [],
    retrievedAllPublisherApps: false,
    // 'App creating/editing' views
    marketplaceAppVisibility: 'private',
    marketplaceAppLabels: [],
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
export const GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_ERROR = 'Marketplace/GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_ERROR';
export const GET_APP_DETAILS_ACTION = 'Marketplace/GET_APP_DETAILS_ACTION';
export const GET_APP_DETAILS_ACTION_SUCCESS = 'Marketplace/GET_APP_DETAILS_ACTION_SUCCESS';
export const GET_PUBLISHER_APPS_SAMPLE_ACTION = 'Marketplace/GET_PUBLISHER_APPS_SAMPLE_ACTION';
export const GET_PUBLISHER_APPS_SAMPLE_ACTION_SUCCESS = 'Marketplace/GET_PUBLISHER_APPS_SAMPLE_ACTION_SUCCESS';
export const GET_FILTERED_MARKETPLACE_APPS_ACTION = 'Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION';
export const GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS = 'Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS';
export const SUBSCRIBE_TO_MARKETPLACE_APP_ACTION = 'Marketplace/SUBSCRIBE_TO_MARKETPLACE_APP_ACTION';
export const SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS = 'Marketplace/SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS';
export const UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION = 'Marketplace/UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION';
export const UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS = 'Marketplace/UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS';
export const SET_MARKETPLACE_APP_VISIBILITY_ACTION = 'Marketplace/SET_MARKETPLACE_APP_VISIBILITY_ACTION';
export const SET_MARKETPLACE_APP_LABELS_ACTION = 'Marketplace/SET_MARKETPLACE_APP_LABELS_ACTION';
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
        case GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_ERROR: {
            return update(state, {
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
            if (action.view === 'marketplace') {
                return state;
            }
            else {
                return update(state, {
                    retrievedAllPublisherApps: { $set: false },
                });
            }
        }
        case GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS: {
            if (action.view === 'marketplace') {
                return update(state, {
                    filteredMarketplaceApps: { $set: action.filteredMarketplaceApps },
                    pagination: { $set: action.pagination },
                });
            }
            else {
                return update(state, {
                    pagination: { $set: action.pagination },
                    allPublisherApps: { $set: action.filteredMarketplaceApps },
                    retrievedAllPublisherApps: { $set: true },
                });
            }
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
        case GET_PUBLISHER_APPS_SAMPLE_ACTION: {
            return update(state, {
                retrievedPublisherAppsSample: { $set: false },
            });
        }
        case GET_PUBLISHER_APPS_SAMPLE_ACTION_SUCCESS: {
            return update(state, {
                publisherAppsSample: { $set: action.publisherAppsSample },
                retrievedPublisherAppsSample: { $set: true },
            });
        }
        case SET_MARKETPLACE_APP_VISIBILITY_ACTION: {
            return update(state, {
                marketplaceAppVisibility: { $set: action.marketplaceAppVisibility },
            });
        }
        case SET_MARKETPLACE_APP_LABELS_ACTION: {
            return update(state, {
                marketplaceAppLabels: { $set: action.marketplaceAppLabels },
            });
        }
        default:
            return state;
    }
}
/** Action builders */
export function getAllMarketplaceAppsAction(pagination) {
    return { type: GET_ALL_MARKETPLACE_APPS_ACTION, pagination };
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
export function getAllSubbedMarketplaceAppsActionError() {
    return {
        type: GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_ERROR,
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
export function getFilteredMarketplaceAppsAction(filters, view) {
    return {
        type: GET_FILTERED_MARKETPLACE_APPS_ACTION,
        filters,
        view,
    };
}
export function getFilteredMarketplaceAppsActionSuccess(payload) {
    return {
        type: GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS,
        ...payload,
    };
}
export function getAppDetailsAction(appID) {
    return { type: GET_APP_DETAILS_ACTION, appID };
}
export function getAppDetailsActionSuccess(appDetails) {
    return { type: GET_APP_DETAILS_ACTION_SUCCESS, appDetails };
}
export function getPublisherAppsSampleAction(orgID, appID) {
    return {
        type: GET_PUBLISHER_APPS_SAMPLE_ACTION,
        orgID,
        appID,
    };
}
export function getPublisherAppsSampleActionSuccess(payload) {
    return {
        type: GET_PUBLISHER_APPS_SAMPLE_ACTION_SUCCESS,
        ...payload,
    };
}
export function setMarketplaceAppVisibilityAction(marketplaceAppVisibility) {
    return {
        type: SET_MARKETPLACE_APP_VISIBILITY_ACTION,
        marketplaceAppVisibility,
    };
}
export function setMarketplaceAppLabelsAction(marketplaceAppLabels) {
    return {
        type: SET_MARKETPLACE_APP_LABELS_ACTION,
        marketplaceAppLabels,
    };
}
