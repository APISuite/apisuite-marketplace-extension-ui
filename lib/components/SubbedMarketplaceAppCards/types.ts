import {
  SubbedMarketplaceApp,
  UserProfile,
} from '../../pages/Marketplace/types'

export interface SubbedMarketplaceAppCardsProps {
  allSubbedMarketplaceApps: SubbedMarketplaceApp[]
  getAllSubbedMarketplaceAppsAction: (userID: number) => void
  retrievedAllSubbedMarketplaceApps: boolean
  userProfile: UserProfile
}
