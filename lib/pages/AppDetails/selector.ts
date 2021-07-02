import { createSelector } from 'reselect'
import { MarketplaceStore } from '../Marketplace/types'

const appDetailsSelector = createSelector(
  ({ marketplace }: any) => marketplace,
  ({ profile }: any) => profile,
  (marketplace: MarketplaceStore, profile) => {
    return {
      allSubbedMarketplaceApps: marketplace.allSubbedMarketplaceApps,
      publisherAppsSample: marketplace.publisherAppsSample,
      retrievedPublisherAppsSample: marketplace.retrievedPublisherAppsSample,
      retrievedSelectedAppDetails: marketplace.retrievedSelectedAppDetails,
      selectedAppDetails: marketplace.selectedAppDetails,
      userProfile: profile.profile.user,
    }
  }
)

export default appDetailsSelector
