import { call, put, takeLatest } from 'redux-saga/effects'
import request from '../../util/request'

import {
  GET_ALL_MARKETPLACE_APPS_ACTION,
  GET_ALL_MARKETPLACE_LABELS_ACTION,
  GET_ALL_MARKETPLACE_PUBLISHERS_ACTION,
  GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION,
  GET_APP_DETAILS_ACTION,
  GET_FILTERED_MARKETPLACE_APPS_ACTION,
  getAllMarketplaceAppsActionSuccess,
  getAllMarketplaceLabelsActionSuccess,
  getAllMarketplacePublishersActionSuccess,
  getAllSubbedMarketplaceAppsActionSuccess,
  getAppDetailsActionSuccess,
  getFilteredMarketplaceAppsActionSuccess,
  SUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
  subscribeToMarketplaceAppActionSuccess,
  UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
  unsubscribeToMarketplaceAppActionSuccess,
} from './ducks'

import {
  AppDetails,
  GetAllSubbedMarketplaceAppsAction,
  GetAppDetailsAction,
  GetFilteredAppsMarketplaceAction,
  SubscribeToMarketplaceAppAction,
  UnsubscribeToMarketplaceAppAction,
} from './types'

import { API_URL, MARKETPLACE_API_URL } from '../../constants/endpoints'

export function* getAllMarketplaceAppsActionSaga() {
  try {
    const getAllMarketplaceAppsActionUrl = `${API_URL}/apps/public`

    const response = yield call(request, {
      url: getAllMarketplaceAppsActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const allMarketplaceApps = response.map((marketplaceApp: any) => ({
      createdAt: marketplaceApp.createdAt,
      description: marketplaceApp.description,
      id: marketplaceApp.id,
      labels: marketplaceApp.labels,
      logo: marketplaceApp.logo,
      name: marketplaceApp.name,
      organization: {
        id: marketplaceApp.organization.id,
        name: marketplaceApp.organization.name,
        privacyUrl: marketplaceApp.organization.privacyUrl,
        supportUrl: marketplaceApp.organization.supportUrl,
        tosUrl: marketplaceApp.organization.tosUrl,
      },
      orgId: marketplaceApp.orgId,
      privacyUrl: marketplaceApp.privacyUrl,
      shortDescription: marketplaceApp.shortDescription,
      supportUrl: marketplaceApp.supportUrl,
      tosUrl: marketplaceApp.tosUrl,
      updatedAt: marketplaceApp.updatedAt,
      websiteUrl: marketplaceApp.websiteUrl,
      youtubeUrl: marketplaceApp.youtubeUrl,
    }))

    yield put(
      getAllMarketplaceAppsActionSuccess(
        allMarketplaceApps.sort(
          (appA: AppDetails, appB: AppDetails) => appA.id - appB.id
        )
      )
    )
  } catch (error) {
    console.log('Error fetching all marketplace apps')
  }
}

export function* getAllMarketplaceLabelsActionSaga() {
  try {
    const getAllMarketplaceLabelsActionUrl = `${API_URL}/apps/public/labels`

    const response = yield call(request, {
      url: getAllMarketplaceLabelsActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    yield put(getAllMarketplaceLabelsActionSuccess(response))
  } catch (error) {
    console.log("Error fetching all marketplace apps' labels")
  }
}

export function* getAllMarketplacePublishersActionSaga() {
  try {
    const getAllMarketplacePublishersActionUrl = `${API_URL}/organizations/publishers`

    const response = yield call(request, {
      url: getAllMarketplacePublishersActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    yield put(getAllMarketplacePublishersActionSuccess(response))
  } catch (error) {
    console.log("Error fetching all marketplace apps' publishers")
  }
}

export function* getAllSubbedMarketplaceAppsActionSaga(
  action: GetAllSubbedMarketplaceAppsAction
) {
  try {
    const getAllSubbedMarketplaceAppsActionUrl = `${MARKETPLACE_API_URL}/users/${action.userID}/subscriptions`

    const response = yield call(request, {
      url: getAllSubbedMarketplaceAppsActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    console.log('getAllSubbedMarketplaceAppsActionSaga response', response)

    yield put(getAllSubbedMarketplaceAppsActionSuccess(response.data))
  } catch (error) {
    console.log('Error fetching all subscribed marketplace apps')
  }
}

export function* subscribeToMarketplaceAppActionSaga(
  action: SubscribeToMarketplaceAppAction
) {
  try {
    const subscribeToMarketplaceAppActionUrl = `${MARKETPLACE_API_URL}/users/${action.userID}/subscriptions/${action.appID}`

    const response = yield call(request, {
      url: subscribeToMarketplaceAppActionUrl,
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    console.log('subscribeToMarketplaceAppActionSaga response', response)

    yield put(subscribeToMarketplaceAppActionSuccess())
  } catch (error) {
    console.log('Error subscribing')
  }
}

export function* unsubscribeToMarketplaceAppActionSaga(
  action: UnsubscribeToMarketplaceAppAction
) {
  try {
    const unsubscribeToMarketplaceAppActionUrl = `${MARKETPLACE_API_URL}/users/${action.userID}/subscriptions/${action.appID}`

    const response = yield call(request, {
      url: unsubscribeToMarketplaceAppActionUrl,
      method: 'DELETE',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    console.log('unsubscribeToMarketplaceAppActionSaga response', response)

    yield put(unsubscribeToMarketplaceAppActionSuccess())
  } catch (error) {
    console.log('Error unsubscribing')
  }
}

export function* getFilteredMarketplaceAppsActionSaga(
  action: GetFilteredAppsMarketplaceAction
) {
  try {
    let getFilteredMarketplaceAppsActionUrl = `${API_URL}/apps/public`

    let orgIDParameters = ''
    let labelParameters = ''
    let sortModeParameters = ''
    let orderModeParameters = ''

    if (action.filters.org_id.length !== 0) {
      action.filters.org_id.map((orgID, index) => {
        if (index === 0) {
          orgIDParameters = orgIDParameters + `?org_id=${orgID}`
        } else {
          orgIDParameters = orgIDParameters + `&org_id=${orgID}`
        }
      })
    }

    if (action.filters.label.length !== 0) {
      action.filters.label.map((label, index) => {
        if (index === 0 && orgIDParameters.length === 0) {
          labelParameters = labelParameters + `?label=${label}`
        } else {
          labelParameters = labelParameters + `&label=${label}`
        }
      })
    }

    if (orgIDParameters.length === 0 && labelParameters.length === 0) {
      sortModeParameters =
        sortModeParameters + `?sort_by=${action.filters.sort_by}`
    } else {
      sortModeParameters =
        sortModeParameters + `&sort_by=${action.filters.sort_by}`
    }

    if (
      orgIDParameters.length === 0 &&
      labelParameters.length === 0 &&
      sortModeParameters.length === 0
    ) {
      orderModeParameters =
        orderModeParameters + `?order=${action.filters.order}`
    } else {
      orderModeParameters =
        orderModeParameters + `&order=${action.filters.order}`
    }

    getFilteredMarketplaceAppsActionUrl =
      getFilteredMarketplaceAppsActionUrl +
      orgIDParameters +
      labelParameters +
      sortModeParameters +
      orderModeParameters

    const response = yield call(request, {
      url: getFilteredMarketplaceAppsActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const filteredMarketplaceApps = response.map((marketplaceApp: any) => ({
      createdAt: marketplaceApp.createdAt,
      description: marketplaceApp.description,
      id: marketplaceApp.id,
      labels: marketplaceApp.labels,
      logo: marketplaceApp.logo,
      name: marketplaceApp.name,
      organization: {
        id: marketplaceApp.organization.id,
        name: marketplaceApp.organization.name,
        privacyUrl: marketplaceApp.organization.privacyUrl,
        supportUrl: marketplaceApp.organization.supportUrl,
        tosUrl: marketplaceApp.organization.tosUrl,
      },
      orgId: marketplaceApp.orgId,
      privacyUrl: marketplaceApp.privacyUrl,
      shortDescription: marketplaceApp.shortDescription,
      supportUrl: marketplaceApp.supportUrl,
      tosUrl: marketplaceApp.tosUrl,
      updatedAt: marketplaceApp.updatedAt,
      websiteUrl: marketplaceApp.websiteUrl,
      youtubeUrl: marketplaceApp.youtubeUrl,
    }))

    yield put(getFilteredMarketplaceAppsActionSuccess(filteredMarketplaceApps))
  } catch (error) {
    console.log('Error fetching all marketplace apps')
  }
}

export function* getAppDetailsActionSaga(action: GetAppDetailsAction) {
  try {
    const getAppDetailsActionUrl = `${API_URL}/apps/public/${action.appID}`

    const response = yield call(request, {
      url: getAppDetailsActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    yield put(getAppDetailsActionSuccess(response))
  } catch (error) {
    console.log("Error fetching the selected app's details")
  }
}

function* rootSaga() {
  yield takeLatest(
    GET_ALL_MARKETPLACE_APPS_ACTION,
    getAllMarketplaceAppsActionSaga
  )
  yield takeLatest(
    GET_ALL_MARKETPLACE_LABELS_ACTION,
    getAllMarketplaceLabelsActionSaga
  )
  yield takeLatest(
    GET_ALL_MARKETPLACE_PUBLISHERS_ACTION,
    getAllMarketplacePublishersActionSaga
  )
  yield takeLatest(
    GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION,
    getAllSubbedMarketplaceAppsActionSaga
  )
  yield takeLatest(
    SUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
    subscribeToMarketplaceAppActionSaga
  )
  yield takeLatest(
    UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
    unsubscribeToMarketplaceAppActionSaga
  )
  yield takeLatest(
    GET_FILTERED_MARKETPLACE_APPS_ACTION,
    getFilteredMarketplaceAppsActionSaga
  )
  yield takeLatest(GET_APP_DETAILS_ACTION, getAppDetailsActionSaga)
}

export default rootSaga
