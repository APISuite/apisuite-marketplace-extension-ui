import {
  SubbedMarketplaceApp,
  UserProfile,
} from '../../pages/Marketplace/types'

export interface SubbedMarketplaceAppCardsProps {
  allSubbedMarketplaceApps: SubbedMarketplaceApp[]
  retrievedAllSubbedMarketplaceApps: boolean
  userProfile: UserProfile

  getAllSubbedMarketplaceAppsAction: (userID: number) => void
}
