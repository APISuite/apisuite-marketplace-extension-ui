import { Action } from 'redux'

import {
  GET_ALL_MARKETPLACE_APPS_ACTION_SUCCESS,
  GET_ALL_MARKETPLACE_APPS_ACTION,
  GET_ALL_MARKETPLACE_LABELS_ACTION_SUCCESS,
  GET_ALL_MARKETPLACE_LABELS_ACTION,
  GET_ALL_MARKETPLACE_PUBLISHERS_ACTION_SUCCESS,
  GET_ALL_MARKETPLACE_PUBLISHERS_ACTION,
  GET_APP_DETAILS_ACTION_SUCCESS,
  GET_APP_DETAILS_ACTION,
  GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS,
  GET_FILTERED_MARKETPLACE_APPS_ACTION,
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

export interface MarketplacePublishers {
  id: number
  name: string
}

export interface Filters {
  org_id: string[]
  label: string[]
  sort_by: 'app' | 'org' | 'updated'
  order: 'asc' | 'desc'
}

export interface MarketplaceStore {
  allMarketplaceApps: AppDetails[]
  allMarketplaceLabels: string[]
  allMarketplacePublishers: MarketplacePublishers[]
  filteredMarketplaceApps: AppDetails[]

  retrievedAllMarketplaceApps: boolean
  retrievedAllMarketplaceLabels: boolean
  retrievedAllMarketplacePublishers: boolean

  selectedAppDetails: AppDetails
  retrievedSelectedAppDetails: boolean
}

export interface AppDetails {
  createdAt: string
  description: string
  id: number
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
  allMarketplacePublishers: MarketplacePublishers[]

  filteredMarketplaceApps: AppDetails[]

  getAllMarketplaceAppsAction: () => void
  getAllMarketplaceLabelsAction: () => void
  getAllMarketplacePublishersAction: () => void
  getFilteredMarketplaceAppsAction: (filters: Filters) => void

  retrievedAllMarketplaceApps: boolean
  retrievedAllMarketplaceLabels: boolean
  retrievedAllMarketplacePublishers: boolean

  settings: SettingsStore
}

export interface GetAllMarketplaceAppsAction extends Action {
  type: typeof GET_ALL_MARKETPLACE_APPS_ACTION
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
  allMarketplacePublishers: MarketplacePublishers[]
}

export interface GetFilteredAppsMarketplaceAction extends Action {
  type: typeof GET_FILTERED_MARKETPLACE_APPS_ACTION
  filters: Filters
}

export interface GetFilteredAppsMarketplaceActionSuccess extends Action {
  type: typeof GET_FILTERED_MARKETPLACE_APPS_ACTION_SUCCESS
  filteredMarketplaceApps: AppDetails[]
}

export interface GetAppDetailsAction extends Action {
  type: typeof GET_APP_DETAILS_ACTION
  appID: string
}

export interface GetAppDetailsActionSuccess extends Action {
  type: typeof GET_APP_DETAILS_ACTION_SUCCESS
  appDetails: AppDetails
}

export type MarketplaceActions =
  | GetAllMarketplaceAppsAction
  | GetAllMarketplaceAppsActionSuccess
  | GetAllMarketplaceLabelsAction
  | GetAllMarketplaceLabelsActionSuccess
  | GetAllMarketplacePublishersAction
  | GetAllMarketplacePublishersActionSuccess
  | GetFilteredAppsMarketplaceAction
  | GetFilteredAppsMarketplaceActionSuccess
  | GetAppDetailsAction
  | GetAppDetailsActionSuccess
