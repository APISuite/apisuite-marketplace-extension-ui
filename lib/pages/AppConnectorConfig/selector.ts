import { createSelector } from 'reselect'
import { MarketplaceStore } from '../Marketplace/types'

const appConnectorConfigSelector = createSelector(
  ({ marketplace }: any) => marketplace,
  ({ profile }: any) => profile,
  (marketplace: MarketplaceStore, profile) => {
    return {
      selectedAppDetails: marketplace.selectedAppDetails,
      userProfile: profile.profile.user,
    }
  }
)

export default appConnectorConfigSelector
