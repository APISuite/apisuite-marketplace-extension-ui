import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import { getAllSubbedMarketplaceAppsAction } from 'pages/Marketplace/ducks'
import SubbedMarketplaceAppCards from './SubbedMarketplaceAppCards'

export const mapStateToProps = ({ marketplace, profile }: any) => ({
  allSubbedMarketplaceApps: marketplace.allSubbedMarketplaceApps,
  retrievedAllSubbedMarketplaceApps: marketplace.retrievedAllSubbedMarketplaceApps,
  userProfile: profile.profile.user,
})

export const mapDispatchToProps = (dispatch: Dispatch): any =>
  bindActionCreators(
    {
      getAllSubbedMarketplaceAppsAction: getAllSubbedMarketplaceAppsAction,
    },
    dispatch
  )

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SubbedMarketplaceAppCards)
