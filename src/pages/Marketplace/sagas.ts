import { call, put, takeLatest } from 'redux-saga/effects'

import {
  GET_ALL_MARKETPLACE_APPS_ACTION,
  GET_ALL_MARKETPLACE_LABELS_ACTION,
  GET_ALL_MARKETPLACE_PUBLISHERS_ACTION,
  GET_FILTERED_MARKETPLACE_APPS_ACTION,
  getAllMarketplaceAppsActionSuccess,
  getAllMarketplaceLabelsActionSuccess,
  getAllMarketplacePublishersActionSuccess,
  getFilteredMarketplaceAppsActionSuccess,
} from './ducks'

import { AppData, GetFilteredAppsMarketplaceAction } from './types'

import request from 'util/request'

export function* getAllMarketplaceAppsActionSaga() {
  try {
    const getAllMarketplaceAppsActionUrl =
      'https://api.develop.apisuite.io/apps/public'

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
          (appA: AppData, appB: AppData) => appA.id - appB.id
        )
      )
    )
  } catch (error) {
    console.log('Error fetching all marketplace apps')
  }
}

export function* getAllMarketplaceLabelsActionSaga() {
  try {
    const getAllMarketplaceLabelsActionUrl =
      'https://api.develop.apisuite.io/apps/public/labels'

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
    const getAllMarketplacePublishersActionUrl =
      'https://api.develop.apisuite.io/organizations/publishers'

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

export function* getFilteredMarketplaceAppsActionSaga(
  action: GetFilteredAppsMarketplaceAction
) {
  try {
    let getFilteredMarketplaceAppsActionUrl =
      'https://api.develop.apisuite.io/apps/public'

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
    GET_FILTERED_MARKETPLACE_APPS_ACTION,
    getFilteredMarketplaceAppsActionSaga
  )
}

export default rootSaga
