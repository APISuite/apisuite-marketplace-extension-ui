import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  getAllSubbedMarketplaceAppsAction,
  getAppDetailsAction,
  getFilteredMarketplaceAppsAction,
  subscribeToMarketplaceAppAction,
  unsubscribeToMarketplaceAppAction,
} from '../Marketplace/ducks'

import AppDetails from './AppDetails'

export const mapStateToProps = ({ marketplace, profile }: any) => ({
  allSubbedMarketplaceApps: marketplace.allSubbedMarketplaceApps,
  filteredMarketplaceApps: marketplace.filteredMarketplaceApps,
  retrievedFilteredMarketplaceApps:
    marketplace.retrievedFilteredMarketplaceApps,
  retrievedSelectedAppDetails: marketplace.retrievedSelectedAppDetails,
  selectedAppDetails: marketplace.selectedAppDetails,
  userProfile: profile.profile.user,
})

export const mapDispatchToProps = (dispatch: Dispatch): any =>
  bindActionCreators(
    {
      getAllSubbedMarketplaceAppsAction: getAllSubbedMarketplaceAppsAction,
      getAppDetailsAction: getAppDetailsAction,
      getFilteredMarketplaceAppsAction: getFilteredMarketplaceAppsAction,
      subscribeToMarketplaceAppAction: subscribeToMarketplaceAppAction,
      unsubscribeToMarketplaceAppAction: unsubscribeToMarketplaceAppAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(AppDetails)
