import { Action } from 'redux'

import {
  GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS,
  GET_ALL_MARKETPLACE_APPS_ACTION,
  GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS,
  GET_ALL_MARKETPLACE_LABELS_ACTION,
  GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS,
  GET_ALL_MARKETPLACE_PUBLISHERS_ACTION,
  GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_SUCCESS,
  GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION,
  GET_APP_DETAILS_ACTION_SUCCESS,
  GET_APP_DETAILS_ACTION,
  GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS,
  GET_FILTERED_MARKETPLACE_APPS_ACTION,
  SET_MARKETPLACE_APP_VISIBILITY_ACTION,
  SET_MARKETPLACE_APP_LABELS_ACTION,
  SUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS,
  SUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
  UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION_SUCCESS,
  UNSUBSCRIBE_TO_MARKETPLACE_APP_ACTION,
  GET_ALL_SUBBED_MARKETPLACE_APPS_ACTION_ERROR,
} from './ducks'

export const roleNameOptions = [
  '',
  'admin',
  'developer',
  'organizationOwner',
] as const

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
  shortDescription: string
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
  allMarketplaceApps: AppDetails[]
  allMarketplaceLabels: string[]
  allMarketplacePublishers: MarketplacePublisher[]
  allSubbedMarketplaceApps: SubbedMarketplaceApp[]

  filteredMarketplaceApps: AppDetails[]
  retrievedFilteredMarketplaceApps: boolean

  retrievedAllMarketplaceApps: boolean
  retrievedAllMarketplaceLabels: boolean
  retrievedAllMarketplacePublishers: boolean
  retrievedAllSubbedMarketplaceApps: boolean

  selectedAppDetails: AppDetails
  retrievedSelectedAppDetails: boolean

  pagination: Pagination

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

export interface MarketplaceProps {
  allMarketplaceApps: AppDetails[]
  allMarketplaceLabels: string[]
  allMarketplacePublishers: MarketplacePublisher[]

  filteredMarketplaceApps: AppDetails[]

  getAllMarketplaceAppsAction: (pagination: {
    page: number
    pageSize: number
  }) => void
  getAllMarketplaceLabelsAction: () => void
  getAllMarketplacePublishersAction: () => void
  getFilteredMarketplaceAppsAction: (filters: Filters) => void

  retrievedAllMarketplaceApps: boolean
  retrievedAllMarketplaceLabels: boolean
  retrievedAllMarketplacePublishers: boolean

  pagination: Pagination
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
}

export interface GetFilteredAppsMarketplaceActionSuccess extends Action {
  type: typeof GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS
  filteredMarketplaceApps: AppDetails[]
  pagination: Pagination
}

export interface GetAppDetailsAction extends Action {
  type: typeof GET_APP_DETAILS_ACTION
  appID: string
}

export interface GetAppDetailsActionSuccess extends Action {
  type: typeof GET_APP_DETAILS_ACTION_SUCCESS
  appDetails: AppDetails
}

export interface SetMarketplaceAppVisibilityAction extends Action {
  type: typeof SET_MARKETPLACE_APP_VISIBILITY_ACTION
  marketplaceAppVisibility: 'private' | 'public'
}

export interface SetMarketplaceAppLabelsAction extends Action {
  type: typeof SET_MARKETPLACE_APP_LABELS_ACTION
  marketplaceAppLabels: string[]
}

export type MarketplaceActions =
  | GetAllMarketplaceAppsAction
  | GetAllMarketplaceAppsActionSuccess
  | GetAllMarketplaceLabelsAction
  | GetAllMarketplaceLabelsActionSuccess
  | GetAllMarketplacePublishersAction
  | GetAllMarketplacePublishersActionSuccess
  | GetAllSubbedMarketplaceAppsAction
  | GetAllSubbedMarketplaceAppsActionSuccess
  | GetAllSubbedMarketplaceAppsActionError
  | GetAppDetailsAction
  | GetAppDetailsActionSuccess
  | GetFilteredAppsMarketplaceAction
  | GetFilteredAppsMarketplaceActionSuccess
  | SetMarketplaceAppVisibilityAction
  | SetMarketplaceAppLabelsAction
  | SubscribeToMarketplaceAppAction
  | SubscribeToMarketplaceAppActionSuccess
  | UnsubscribeToMarketplaceAppAction
  | UnsubscribeToMarketplaceAppActionSuccess
