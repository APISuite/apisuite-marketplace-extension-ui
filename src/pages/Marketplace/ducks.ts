import update from 'immutability-helper'

import {
  AppDetails,
  Filters,
  MarketplaceActions,
  MarketplacePublishers,
  MarketplaceStore,
} from './types'

/** Initial state */

const initialState: MarketplaceStore = {
  allMarketplaceApps: [],
  allMarketplaceLabels: [],
  allMarketplacePublishers: [],
  filteredMarketplaceApps: [],

  retrievedAllMarketplaceApps: false,
  retrievedAllMarketplaceLabels: false,
  retrievedAllMarketplacePublishers: false,

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
}

/** Action types */

export const GET_ALL_MARKETPLACE_APPS_ACTION =
  'Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION'
export const GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS =
  'Marketplace/GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS'

export const GET_ALL_MARKETPLACE_LABELS_ACTION =
  'Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION'
export const GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS =
  'Marketplace/GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS'

export const GET_ALL_MARKETPLACE_PUBLISHERS_ACTION =
  'Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION'
export const GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS =
  'Marketplace/GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS'

export const GET_FILTERED_MARKETPLACE_APPS_ACTION =
  'Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION'
export const GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS =
  'Marketplace/GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS'

export const GET_APP_DETAILS_ACTION = 'Marketplace/GET_APP_DETAILS_ACTION'
export const GET_APP_DETAILS_ACTION_SUCCESS =
  'Marketplace/GET_APP_DETAILS_ACTION_SUCCESS'

/** Reducer */

export default function reducer(
  state = initialState,
  action: MarketplaceActions
): MarketplaceStore {
  switch (action.type) {
    case GET_ALL_MARKETPLACE_APPS_ACTION: {
      return state
    }

    case GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS: {
      return update(state, {
        allMarketplaceApps: { $set: action.allMarketplaceApps },
        retrievedAllMarketplaceApps: { $set: true },
      })
    }

    case GET_ALL_MARKETPLACE_LABELS_ACTION: {
      return state
    }

    case GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS: {
      return update(state, {
        allMarketplaceLabels: { $set: action.allMarketplaceLabels },
        retrievedAllMarketplaceLabels: { $set: true },
      })
    }

    case GET_ALL_MARKETPLACE_PUBLISHERS_ACTION: {
      return state
    }

    case GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS: {
      return update(state, {
        allMarketplacePublishers: { $set: action.allMarketplacePublishers },
        retrievedAllMarketplacePublishers: { $set: true },
      })
    }

    case GET_FILTERED_MARKETPLACE_APPS_ACTION: {
      return state
    }

    case GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS: {
      return update(state, {
        filteredMarketplaceApps: { $set: action.filteredMarketplaceApps },
      })
    }

    case GET_APP_DETAILS_ACTION: {
      return update(state, {
        retrievedSelectedAppDetails: { $set: false },
      })
    }

    case GET_APP_DETAILS_ACTION_SUCCESS: {
      return update(state, {
        selectedAppDetails: { $set: action.appDetails },
        retrievedSelectedAppDetails: { $set: true },
      })
    }

    default:
      return state
  }
}

/** Action builders */

export function getAllMarketplaceAppsAction() {
  return { type: GET_ALL_MARKETPLACE_APPS_ACTION }
}

export function getAllMarketplaceAppsActionSuccess(
  allMarketplaceApps: AppDetails[]
) {
  return { type: GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS, allMarketplaceApps }
}

export function getAllMarketplaceLabelsAction() {
  return { type: GET_ALL_MARKETPLACE_LABELS_ACTION }
}

export function getAllMarketplaceLabelsActionSuccess(
  allMarketplaceLabels: string[]
) {
  return {
    type: GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS,
    allMarketplaceLabels,
  }
}

export function getAllMarketplacePublishersAction() {
  return { type: GET_ALL_MARKETPLACE_PUBLISHERS_ACTION }
}

export function getAllMarketplacePublishersActionSuccess(
  allMarketplacePublishers: MarketplacePublishers[]
) {
  return {
    type: GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS,
    allMarketplacePublishers,
  }
}

export function getFilteredMarketplaceAppsAction(filters: Filters) {
  return {
    type: GET_FILTERED_MARKETPLACE_APPS_ACTION,
    filters,
  }
}

export function getFilteredMarketplaceAppsActionSuccess(
  filteredMarketplaceApps: AppDetails[]
) {
  return {
    type: GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS,
    filteredMarketplaceApps,
  }
}

export function getAppDetailsAction(appID: string) {
  return { type: GET_APP_DETAILS_ACTION, appID }
}

export function getAppDetailsActionSuccess(appDetails: AppDetails) {
  return { type: GET_APP_DETAILS_ACTION_SUCCESS, appDetails }
}
