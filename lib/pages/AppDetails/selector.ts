import { createSelector } from 'reselect'

const appDetailsSelector = createSelector(
  ({ marketplace }: any) => marketplace,
  ({ profile }: any) => profile,
  (marketplace, profile) => {
    return {
      allSubbedMarketplaceApps: marketplace.allSubbedMarketplaceApps,
      filteredMarketplaceApps: marketplace.filteredMarketplaceApps,
      retrievedFilteredMarketplaceApps:
        marketplace.retrievedFilteredMarketplaceApps,
      retrievedSelectedAppDetails: marketplace.retrievedSelectedAppDetails,
      selectedAppDetails: marketplace.selectedAppDetails,
      userProfile: profile.profile.user,
    }
  }
)

export default appDetailsSelector
