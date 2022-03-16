import { call, put, takeLatest } from 'redux-saga/effects'
import request from '../../util/request'

import {
  GET_ALL_MARKETPLACE_APPS_ACTION,
  GET_ALL_MARKETPLACE_LABELS_ACTION,
  GET_ALL_MARKETPLACE_PUBLISHERS_ACTION,
  GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION,
  GET_APP_DETAILS_ACTION,
  GET_FILTERED_MARKETPLACE_APPS_ACTION,
  GET_PUBLISHER_APPS_SAMPLE_ACTION,
  GET_PUBLISHER_DETAILS_ACTION,
  getAllMarketplaceAppsActionSuccess,
  getAllMarketplaceLabelsActionSuccess,
  getAllMarketplacePublishersActionSuccess,
  getAllSubbedMarketplaceAppsActionError,
  getAllSubbedMarketplaceAppsActionSuccess,
  getAppDetailsActionSuccess,
  getFilteredMarketplaceAppsActionSuccess,
  getPublisherAppsSampleActionSuccess,
  getPublisherDetailsActionSuccess,
  SUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
  subscribeToMarketplaceAppActionSuccess,
  UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
  unsubscribeToMarketplaceAppActionSuccess,
  getPublisherDetailsActionError,
  getAppConnectorConfigActionSuccess,
  GET_APP_CONNECTOR_CONFIG_ACTION,
  getAppConnectorSubscriptionActionSuccess,
  getAppConnectorSubscriptionActionError,
  GET_APP_CONNECTOR_SUBSCRIPTION_ACTION,
  subscribeAppConnectorActionSuccess,
  subscribeAppConnectorActionError,
  SUBSCRIBE_APP_CONNECTOR_ACTION,
  unsubscribeAppConnectorActionSuccess,
  UNSUBSCRIBE_APP_CONNECTOR_ACTION, FIELD_MAPPING_CONFIG_ACTION, fieldMappingConfigActionSuccess
} from './ducks'

import {
  FieldMappingConfigAction,
  GetAllMarketplaceAppsAction,
  GetAllSubbedMarketplaceAppsAction,
  GetAppConnectorConfigAction,
  GetAppConnectorSubscriptionAction,
  GetAppDetailsAction,
  GetFilteredAppsMarketplaceAction,
  GetPublisherAppsSampleAction,
  GetPublisherDetailsAction,
  SubscribeAppConnectorAction,
  SubscribeToMarketplaceAppAction,
  UnsubscribeAppConnectorAction,
  UnsubscribeToMarketplaceAppAction,
} from './types'

import {
  getApiUrl,
  getAppConnectorApiUrl,
  getMarketplaceApiUrl,
} from '../../constants/endpoints'
import appDetailsMapping from '../../util/appDetailsMapping'

export function* getAllMarketplaceAppsActionSaga(
  action: GetAllMarketplaceAppsAction
) {
  try {
    const getAllMarketplaceAppsActionUrl = `${getApiUrl()}/apps/public?page=${
      action.pagination.page
    }&pageSize=${action.pagination.pageSize}&sort_by=app&order=asc`

    const response = yield call(request, {
      url: getAllMarketplaceAppsActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const allMarketplaceApps = response.rows.map((app) => {
      return appDetailsMapping(app)
    })

    yield put(getAllMarketplaceAppsActionSuccess(allMarketplaceApps))
  } catch (error) {
    console.log('Error fetching all marketplace apps', error)
  }
}

export function* getAllMarketplaceLabelsActionSaga() {
  try {
    const getAllMarketplaceLabelsActionUrl = `${getApiUrl()}/apps/public/labels`

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
    const getAllMarketplacePublishersActionUrl = `${getApiUrl()}/organizations/publishers`

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
    const getAllSubbedMarketplaceAppsActionUrl = `${getMarketplaceApiUrl()}/users/${
      action.userID
    }/subscriptions`

    const response = yield call(request, {
      url: getAllSubbedMarketplaceAppsActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const allSubbedMarketplaceApps = response.data.map((app) => ({
      description: app.description,
      id: app.id,
      logo: app.logo,
      name: app.name,
      publisherId: app.publisherId,
      publisherName: app.publisherName,
      summary: app.shortDescription,
    }))

    yield put(
      getAllSubbedMarketplaceAppsActionSuccess(allSubbedMarketplaceApps)
    )
  } catch (error) {
    console.log('Error fetching all subscribed marketplace apps')
    yield put(getAllSubbedMarketplaceAppsActionError())
  }
}

export function* subscribeToMarketplaceAppActionSaga(
  action: SubscribeToMarketplaceAppAction
) {
  try {
    const subscribeToMarketplaceAppActionUrl = `${getMarketplaceApiUrl()}/users/${
      action.userID
    }/subscriptions/${action.appID}`

    yield call(request, {
      url: subscribeToMarketplaceAppActionUrl,
      method: 'POST',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    yield put(subscribeToMarketplaceAppActionSuccess())
  } catch (error) {
    console.log('Error subscribing')
  }
}

export function* unsubscribeToMarketplaceAppActionSaga(
  action: UnsubscribeToMarketplaceAppAction
) {
  try {
    const unsubscribeToMarketplaceAppActionUrl = `${getMarketplaceApiUrl()}/users/${
      action.userID
    }/subscriptions/${action.appID}`

    yield call(request, {
      url: unsubscribeToMarketplaceAppActionUrl,
      method: 'DELETE',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    yield put(unsubscribeToMarketplaceAppActionSuccess())
  } catch (error) {
    console.log('Error unsubscribing')
  }
}

/**
 * Takes a list of items and builds a string usable as a URL query string.
 * Ex.: buildQueryParameters([1,2], 'user') => 'user=1&user=2'
 * */
function buildQueryParameters(items: string[], paramName: string): string {
  let params = ''
  for (let i = 0; i < items.length; i++) {
    if (i === 0) {
      params = `${paramName}=${items[i]}`
      continue
    }
    params += `&${paramName}=${items[i]}`
  }
  return params
}

export function* getFilteredMarketplaceAppsActionSaga(
  action: GetFilteredAppsMarketplaceAction
) {
  try {
    const pagination = `page=${action.filters.page}&pageSize=${action.filters.pageSize}`
    let appsURL = `${getApiUrl()}/apps/public?${pagination}`

    const orgIDParams = buildQueryParameters(action.filters.org_id, 'org_id')
    const labelParams = buildQueryParameters(action.filters.label, 'label')
    const sortParams = buildQueryParameters([action.filters.sort_by], 'sort_by')
    const orderParams = buildQueryParameters([action.filters.order], 'order')
    const search = action.filters.search.length
      ? `search=${action.filters.search}`
      : ''

    const params = [orgIDParams, labelParams, sortParams, orderParams, search]
      .filter((p) => p.length)
      .join('&')

    appsURL = params.length ? `${appsURL}&${params}` : appsURL

    const response = yield call(request, {
      url: appsURL,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const filteredMarketplaceApps = response.rows.map((app) => {
      return appDetailsMapping(app)
    })

    yield put(
      getFilteredMarketplaceAppsActionSuccess({
        filteredMarketplaceApps,
        pagination: response.pagination,
        view: action.view,
      })
    )
  } catch (error) {
    console.log('Error fetching filtered marketplace apps', error)
  }
}

export function* getAppDetailsActionSaga(action: GetAppDetailsAction) {
  try {
    const getAppDetailsActionUrl = `${getApiUrl()}/apps/public/${action.appID}`

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

export function* getAppConnectorConfigActionSaga(
  action: GetAppConnectorConfigAction
) {
  try {
    const getAppConnectorConfigActionUrl = `${getAppConnectorApiUrl()}/apps/getid/${
      action.appID
    }`
    const response = yield call(request, {
      url: getAppConnectorConfigActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    yield put(getAppConnectorConfigActionSuccess(response))
  } catch (error) {
    console.log('Error fetching the selected app connector config')
  }
}

export function* getAppConnectorSubscriptionActionSaga(
  action: GetAppConnectorSubscriptionAction
) {
  try {
    const getAppConnectorSubscriptionActionUrl = `${getAppConnectorApiUrl()}/apps/subscribe/${
      action.appName
    }/${action.apiName}/`
    const response = yield call(request, {
      url: getAppConnectorSubscriptionActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    yield put(getAppConnectorSubscriptionActionSuccess(response))
  } catch (error) {
    console.log('Error fetching the selected app connector config')
    yield put(getAppConnectorSubscriptionActionError())
  }
}

export function* subscribeAppConnectorActionSaga(
  action: SubscribeAppConnectorAction
) {
  try {
    const subscribeAppConnectorActionUrl = `${getAppConnectorApiUrl()}/apps/subscribe/`
    const response = yield call(request, {
      url: subscribeAppConnectorActionUrl,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        app_name: action.appName,
        api_name: action.apiName,
        api_url: action.apiUrl,
      },
    })

    yield put(subscribeAppConnectorActionSuccess())
  } catch (error) {
    console.log('Error subscribing app connector')
    yield put(subscribeAppConnectorActionError())
  }
}

export function* unsubscribeAppConnectorActionSaga(
  action: UnsubscribeAppConnectorAction
) {
  try {
    const getAppConnectorSubscriptionActionUrl = `${getAppConnectorApiUrl()}/apps/subscribe/${
      action.apiName
    }/`
    const response = yield call(request, {
      url: getAppConnectorSubscriptionActionUrl,
      method: 'DELETE',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    yield put(unsubscribeAppConnectorActionSuccess())
  } catch (error) {
    console.log('Error unsubscribing app connector')
  }
}

export function* fieldMappingConfigActionSaga(
  action: FieldMappingConfigAction
) {
  try {
    const fieldMappingConfigActionUrl = `${getAppConnectorApiUrl()}/apps/fieldmapping/`
    const response = yield call(request, {
      url: fieldMappingConfigActionUrl,
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      data: {
        app_name: action.appName,
        api_name: action.apiName,
        map: action.map,
      },
    })

    yield put(fieldMappingConfigActionSuccess())
  } catch (error) {
    console.log('Error mapping app conector fields')
  }
}

export function* getPublisherAppsSampleActionSaga(
  action: GetPublisherAppsSampleAction
) {
  try {
    const getPublisherAppsSampleActionUrl = `${getApiUrl()}/apps/public?org_id=${
      action.orgID
    }&sort_by=updated&order=desc&page=1&pageSize=4`

    const response = yield call(request, {
      url: getPublisherAppsSampleActionUrl,
      method: 'GET',
      headers: {
        'content-type': 'application/x-www-form-urlencoded',
      },
    })

    const publisherAppsSample = response.rows
      .filter((app) => {
        return app.id !== action.appID
      })
      .slice(0, 3)
      .map((app) => {
        return appDetailsMapping(app)
      })

    yield put(
      getPublisherAppsSampleActionSuccess({
        publisherAppsSample,
      })
    )
  } catch (error) {
    console.log('Error fetching a sample of publisher apps', error)
  }
}

export function* getPublisherDetailsActionSaga(
  action: GetPublisherDetailsAction
) {
  try {
    const publisherDetails = yield call(request, {
      url: `${getApiUrl()}/organizations/publishers/${action.publisherID}`,
      method: 'GET',
    })

    yield put(getPublisherDetailsActionSuccess(publisherDetails))
  } catch (error) {
    console.log("Error retrieving the publisher's details", error)
    yield put(getPublisherDetailsActionError())
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
  yield takeLatest(
    GET_PUBLISHER_APPS_SAMPLE_ACTION,
    getPublisherAppsSampleActionSaga
  )
  yield takeLatest(GET_PUBLISHER_DETAILS_ACTION, getPublisherDetailsActionSaga)
  yield takeLatest(
    GET_APP_CONNECTOR_CONFIG_ACTION,
    getAppConnectorConfigActionSaga
  )
  yield takeLatest(
    GET_APP_CONNECTOR_SUBSCRIPTION_ACTION,
    getAppConnectorSubscriptionActionSaga
  )
  yield takeLatest(
    SUBSCRIBE_APP_CONNECTOR_ACTION,
    subscribeAppConnectorActionSaga
  )
  yield takeLatest(
    UNSUBSCRIBE_APP_CONNECTOR_ACTION,
    unsubscribeAppConnectorActionSaga
  )
  yield takeLatest(
    FIELD_MAPPING_CONFIG_ACTION,
    fieldMappingConfigActionSaga
  )
}

export default rootSaga
