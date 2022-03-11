import { createSelector } from 'reselect'
import { MarketplaceStore } from '../Marketplace/types'

const appConnectorConfigSelector = createSelector(
  ({ marketplace }: any) => marketplace,
  (marketplace: MarketplaceStore) => {
    return {
      selectedAppDetails: marketplace.selectedAppDetails,
      appConnectorConfigDetails: marketplace.appConnectorConfigDetails,
    }
  }
)

export default appConnectorConfigSelector
