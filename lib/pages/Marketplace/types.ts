import { Action } from 'redux'

import {
  GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS,
  GET_ALL_MARKETPLACE_APPS_ACTION,
  GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS,
  GET_ALL_MARKETPLACE_LABELS_ACTION,
  GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS,
  GET_ALL_MARKETPLACE_PUBLISHERS_ACTION,
  GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_ERROR,
  GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS,
  GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION,
  GET_APP_DETAILS_ACTION_SUCCESS,
  GET_APP_DETAILS_ACTION,
  GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS,
  GET_FILTERED_MARKETPLACE_APPS_ACTION,
  GET_PUBLISHER_APPS_SAMPLE_ACTION_SUCCESS,
  GET_PUBLISHER_APPS_SAMPLE_ACTION,
  GET_PUBLISHER_DETAILS_ACTION_ERROR,
  GET_PUBLISHER_DETAILS_ACTION_SUCCESS,
  GET_PUBLISHER_DETAILS_ACTION,
  SET_MARKETPLACE_APP_LABELS_ACTION,
  SET_MARKETPLACE_APP_VISIBILITY_ACTION,
  SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS,
  SUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
  UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS,
  UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
  GET_APP_CONNECTOR_CONFIG_ACTION,
  GET_APP_CONNECTOR_CONFIG_ACTION_SUCCESS,
  GET_APP_CONNECTOR_SUBSCRIPTION_ACTION,
  GET_APP_CONNECTOR_SUBSCRIPTION_ACTION_SUCCESS,
  GET_APP_CONNECTOR_SUBSCRIPTION_ACTION_ERROR,
  SUBSCRIBE_APP_CONNECTOR_ACTION,
  SUBSCRIBE_APP_CONNECTOR_ACTION_SUCCESS,
  SUBSCRIBE_APP_CONNECTOR_ACTION_ERROR,
  UNSUBSCRIBE_APP_CONNECTOR_ACTION,
  UNSUBSCRIBE_APP_CONNECTOR_ACTION_SUCCESS,
  FIELD_MAPPING_CONFIG_ACTION,
  FIELD_MAPPING_CONFIG_ACTION_SUCCESS,
  SET_POLLING_STATUS_ACTION, SET_POLLING_STATUS_ACTION_SUCCESS
} from './ducks'

export const roleNameOptions = [
  '',
  'admin',
  'developer',
  'organizationOwner',
] as const

export type View = 'marketplace' | 'publisher'

export interface Response {
  isError: boolean
  isRequesting: boolean
}

export interface MarketplacePublisher {
  id: number
  name: string
}

export interface SubbedMarketplaceApp {
  description: string
  id: number
  logo: string
  name: string
  publisherId: number
  publisherName: string
  summary: string
}

export interface Filters {
  label: string[]
  order: 'asc' | 'desc'
  org_id: string[]
  sort_by: 'app' | 'org' | 'updated'
  page: number
  pageSize: number
  search: string
}

export interface Pagination {
  page: number
  pageCount: number
  pageSize: number
  rowCount: number
}
export interface MarketplaceStore {
  // 'Marketplace' view
  allMarketplaceApps: AppDetails[]
  allMarketplaceLabels: string[]
  allMarketplacePublishers: MarketplacePublisher[]
  allSubbedMarketplaceApps: SubbedMarketplaceApp[]

  filteredMarketplaceApps: AppDetails[]

  retrievedAllMarketplaceApps: boolean
  retrievedAllMarketplaceLabels: boolean
  retrievedAllMarketplacePublishers: boolean
  retrievedAllSubbedMarketplaceApps: boolean

  pagination: Pagination

  // 'App connector config' view
  appConnectorConfigDetails: AppConnectorConfigDetails

  appConnectorSubscriptionDetails: AppConnectorSubscriptionDetails
  appConnectorSubscribed: boolean

  // 'App details' view
  selectedAppDetails: AppDetails
  retrievedSelectedAppDetails: boolean

  publisherAppsSample: AppDetails[]
  retrievedPublisherAppsSample: boolean

  // 'Publisher details' view
  publisherDetails: PublisherDetails
  retrievedPublisherDetails: boolean
  retrievedPublisherDetailsError: boolean

  allPublisherApps: AppDetails[]
  retrievedAllPublisherApps: boolean

  // 'App creating/editing' views
  marketplaceAppVisibility: 'private' | 'public'
  marketplaceAppLabels: string[]
}

export type UserProfile = {
  avatar?: string
  bio?: string
  email: string
  id: string
  last_login: string
  mobile?: string
  name: string
  oidcProvider: string | null
}

export interface AppDetails {
  createdAt: string
  description: string
  directUrl: string
  id: number
  images: string[]
  labels: string[]
  logo: string
  name: string
  organization: {
    id: string
    name: string
    privacyUrl: string
    supportUrl: string
    tosUrl: string
  }
  orgId: number
  privacyUrl: string
  shortDescription: string
  supportUrl: string
  tosUrl: string
  updatedAt: string
  websiteUrl: string
  youtubeUrl: string
  appType: {
    id: string
    type: string
  }
}

export interface AppConnectorConfigDetails {
  data: {
    name: string
    fieldsRaw: string[]
    workerStatus: string
  }
}
export interface AppConnectorSubscriptionDetails {
  data: {
    appName: string
    apiName: string
    apiUrl: string
    fieldMapping: any
    status: string
  }
}

export interface PublisherDetails {
  description: string
  id: string
  logo: string
  name: string
  privacyUrl: string
  supportUrl: string
  tosUrl: string
  vat: string
  websiteUrl: string
  youtubeUrl: string
}

export type Role = {
  id: string
  name: typeof roleNameOptions[number]
}

export interface User {
  fName: string
  id: number
  lName: string
  photo?: string
  role: Role
}

export interface SocialUrl {
  name: string
  url: string
}

export type SettingsStore = SettingsData

export interface SettingsData {
  clientName: string
  documentationURL: string
  portalName: string
  socialURLs: SocialUrl[]
  supportURL: string
}

export interface GetAllMarketplaceAppsAction extends Action {
  type: typeof GET_ALL_MARKETPLACE_APPS_ACTION
  pagination: { page: number; pageSize: number }
}

export interface GetAllMarketplaceAppsActionSuccess extends Action {
  type: typeof GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS
  allMarketplaceApps: AppDetails[]
}

export interface GetAllMarketplaceLabelsAction extends Action {
  type: typeof GET_ALL_MARKETPLACE_LABELS_ACTION
}

export interface GetAllMarketplaceLabelsActionSuccess extends Action {
  type: typeof GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS
  allMarketplaceLabels: string[]
}

export interface GetAllMarketplacePublishersAction extends Action {
  type: typeof GET_ALL_MARKETPLACE_PUBLISHERS_ACTION
}

export interface GetAllMarketplacePublishersActionSuccess extends Action {
  type: typeof GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS
  allMarketplacePublishers: MarketplacePublisher[]
}

export interface GetAllSubbedMarketplaceAppsAction extends Action {
  type: typeof GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION
  userID: number
}

export interface GetAllSubbedMarketplaceAppsActionSuccess extends Action {
  type: typeof GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS
  allSubbedMarketplaceApps: SubbedMarketplaceApp[]
}

export interface GetAllSubbedMarketplaceAppsActionError extends Action {
  type: typeof GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_ERROR
}

export interface SubscribeToMarketplaceAppAction extends Action {
  type: typeof SUBSCRIBE_TO_MARKETPLACE_APP_ACTION
  userID: number
  appID: number
}

export interface SubscribeToMarketplaceAppActionSuccess extends Action {
  type: typeof SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS
}

export interface UnsubscribeToMarketplaceAppAction extends Action {
  type: typeof UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION
  userID: number
  appID: number
}

export interface UnsubscribeToMarketplaceAppActionSuccess extends Action {
  type: typeof UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS
}

export interface GetFilteredAppsMarketplaceAction extends Action {
  type: typeof GET_FILTERED_MARKETPLACE_APPS_ACTION
  filters: Filters
  view: View
}

export interface GetFilteredAppsMarketplaceActionSuccess extends Action {
  type: typeof GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS
  filteredMarketplaceApps: AppDetails[]
  pagination: Pagination
  view: View
}

export interface GetAppDetailsAction extends Action {
  type: typeof GET_APP_DETAILS_ACTION
  appID: string
}

export interface GetAppDetailsActionSuccess extends Action {
  type: typeof GET_APP_DETAILS_ACTION_SUCCESS
  appDetails: AppDetails
}

export interface GetAppConnectorConfigAction extends Action {
  type: typeof GET_APP_CONNECTOR_CONFIG_ACTION
  appID: string
}

export interface GetAppConnectorConfigActionSuccess extends Action {
  type: typeof GET_APP_CONNECTOR_CONFIG_ACTION_SUCCESS
  appConnectorConfigDetails: AppConnectorConfigDetails
}

export interface GetAppConnectorSubscriptionAction extends Action {
  type: typeof GET_APP_CONNECTOR_SUBSCRIPTION_ACTION
  appName: string
  apiName: string
}

export interface GetAppConnectorSubscriptionActionSuccess extends Action {
  type: typeof GET_APP_CONNECTOR_SUBSCRIPTION_ACTION_SUCCESS
  appConnectorSubscriptionDetails: AppConnectorSubscriptionDetails
}

export interface GetAppConnectorSubscriptionActionError extends Action {
  type: typeof GET_APP_CONNECTOR_SUBSCRIPTION_ACTION_ERROR
}

export interface SubscribeAppConnectorAction extends Action {
  type: typeof SUBSCRIBE_APP_CONNECTOR_ACTION
  appName: string
  apiName: string
  apiUrl: string
}

export interface SubscribeAppConnectorActionSuccess extends Action {
  type: typeof SUBSCRIBE_APP_CONNECTOR_ACTION_SUCCESS
}

export interface SubscribeAppConnectorActionError extends Action {
  type: typeof SUBSCRIBE_APP_CONNECTOR_ACTION_ERROR
}

export interface UnsubscribeAppConnectorAction extends Action {
  type: typeof UNSUBSCRIBE_APP_CONNECTOR_ACTION
  apiName: string
}

export interface UnsubscribeAppConnectorActionSuccess extends Action {
  type: typeof UNSUBSCRIBE_APP_CONNECTOR_ACTION_SUCCESS
}

export interface FieldMappingConfigAction extends Action {
  type: typeof FIELD_MAPPING_CONFIG_ACTION
  appName: string
  apiName: string
  map: any
}

export interface FieldMappingConfigActionSuccess extends Action {
  type: typeof FIELD_MAPPING_CONFIG_ACTION_SUCCESS
}
export interface GetPublisherAppsSampleAction extends Action {
  type: typeof GET_PUBLISHER_APPS_SAMPLE_ACTION
  orgID: number
  appID: number
}

export interface GetPublisherAppsSampleActionSuccess extends Action {
  type: typeof GET_PUBLISHER_APPS_SAMPLE_ACTION_SUCCESS
  publisherAppsSample: AppDetails[]
}

export interface GetPublisherDetailsAction extends Action {
  type: typeof GET_PUBLISHER_DETAILS_ACTION
  publisherID: string
}

export interface GetPublisherDetailsActionSuccess extends Action {
  type: typeof GET_PUBLISHER_DETAILS_ACTION_SUCCESS
  publisherDetails: PublisherDetails
}

export interface GetPublisherDetailsActionError extends Action {
  type: typeof GET_PUBLISHER_DETAILS_ACTION_ERROR
}

export interface SetMarketplaceAppVisibilityAction extends Action {
  type: typeof SET_MARKETPLACE_APP_VISIBILITY_ACTION
  marketplaceAppVisibility: 'private' | 'public'
}

export interface SetMarketplaceAppLabelsAction extends Action {
  type: typeof SET_MARKETPLACE_APP_LABELS_ACTION
  marketplaceAppLabels: string[]
}

export interface SetPollingStatusAction extends Action {
  type: typeof SET_POLLING_STATUS_ACTION
  appName: string
  apiName: string
  command: string
}

export interface SetPollingStatusActionSuccess extends Action {
  type: typeof SET_POLLING_STATUS_ACTION_SUCCESS
}

export type MarketplaceActions =
  | FieldMappingConfigAction
  | FieldMappingConfigActionSuccess
  | GetAllMarketplaceAppsAction
  | GetAllMarketplaceAppsActionSuccess
  | GetAllMarketplaceLabelsAction
  | GetAllMarketplaceLabelsActionSuccess
  | GetAllMarketplacePublishersAction
  | GetAllMarketplacePublishersActionSuccess
  | GetAllSubbedMarketplaceAppsAction
  | GetAllSubbedMarketplaceAppsActionError
  | GetAllSubbedMarketplaceAppsActionSuccess
  | GetAppDetailsAction
  | GetAppDetailsActionSuccess
  | GetAppConnectorConfigAction
  | GetAppConnectorConfigActionSuccess
  | GetAppConnectorSubscriptionAction
  | GetAppConnectorSubscriptionActionSuccess
  | GetAppConnectorSubscriptionActionError
  | GetFilteredAppsMarketplaceAction
  | GetFilteredAppsMarketplaceActionSuccess
  | GetPublisherAppsSampleAction
  | GetPublisherAppsSampleActionSuccess
  | GetPublisherDetailsAction
  | GetPublisherDetailsActionSuccess
  | GetPublisherDetailsActionError
  | SetMarketplaceAppLabelsAction
  | SetMarketplaceAppVisibilityAction
  | SetPollingStatusAction
  | SetPollingStatusActionSuccess
  | SubscribeAppConnectorAction
  | SubscribeAppConnectorActionSuccess
  | SubscribeAppConnectorActionError
  | SubscribeToMarketplaceAppAction
  | SubscribeToMarketplaceAppActionSuccess
  | UnsubscribeAppConnectorAction
  | UnsubscribeAppConnectorActionSuccess
  | UnsubscribeToMarketplaceAppAction
  | UnsubscribeToMarketplaceAppActionSuccess
