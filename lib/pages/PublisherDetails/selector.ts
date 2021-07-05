import { createSelector } from 'reselect'
import { MarketplaceStore } from '../Marketplace/types'

const publisherDetailsSelector = createSelector(
  ({ marketplace }: any) => marketplace,
  (marketplace: MarketplaceStore) => {
    return {
      allPublisherApps: marketplace.allPublisherApps,
      pagination: marketplace.pagination,
      publisherDetails: marketplace.publisherDetails,
      retrievedAllPublisherApps: marketplace.retrievedAllPublisherApps,
      retrievedPublisherDetails: marketplace.retrievedPublisherDetails,
    }
  }
)

export default publisherDetailsSelector
