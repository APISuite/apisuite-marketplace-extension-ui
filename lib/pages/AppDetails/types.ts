import { AppDetails, Filters, UserProfile } from '../Marketplace/types'

export interface AppDetailsProps {
  allSubbedMarketplaceApps: AppDetails[]
  filteredMarketplaceApps: AppDetails[]
  getAllSubbedMarketplaceAppsAction: (userID: number) => void
  getAppDetailsAction: (appID: string) => void
  getFilteredMarketplaceAppsAction: (filters: Filters) => void
  retrievedFilteredMarketplaceApps: boolean
  retrievedSelectedAppDetails: boolean
  selectedAppDetails: AppDetails
  subscribeToMarketplaceAppAction: (userID: number, appID: number) => void
  unsubscribeToMarketplaceAppAction: (userID: number, appID: number) => void
  userProfile: UserProfile
}
