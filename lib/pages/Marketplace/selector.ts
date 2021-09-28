import { createSelector } from 'reselect'
import { MarketplaceStore } from './types'

const marketplaceSelector = createSelector(
  ({ marketplace }: any) => marketplace,
  ({ profile }: any) => profile,
  (marketplace: MarketplaceStore, profile) => {
    return {
      allMarketplaceApps: marketplace.allMarketplaceApps,
      allMarketplaceLabels: marketplace.allMarketplaceLabels,
      allMarketplacePublishers: marketplace.allMarketplacePublishers,

      filteredMarketplaceApps: marketplace.filteredMarketplaceApps,

      retrievedAllMarketplaceApps: marketplace.retrievedAllMarketplaceApps,
      retrievedAllMarketplaceLabels: marketplace.retrievedAllMarketplaceLabels,
      retrievedAllMarketplacePublishers:
        marketplace.retrievedAllMarketplacePublishers,
      pagination: marketplace.pagination,
      userCurrentOrg: profile.profile.current_org,
      userProfile: profile.profile.user,
    }
  }
)

export default marketplaceSelector
