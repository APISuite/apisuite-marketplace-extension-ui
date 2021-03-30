import { bindActionCreators, Dispatch } from 'redux'

import { connect } from 'react-redux'

import { getAppDetailsAction } from 'pages/Marketplace/ducks'

import AppDetails from './AppDetails'

export const mapStateToProps = ({ marketplace }: any) => ({
  retrievedSelectedAppDetails: marketplace.retrievedSelectedAppDetails,
  selectedAppDetails: marketplace.selectedAppDetails,
})

export const mapDispatchToProps = (dispatch: Dispatch): any =>
  bindActionCreators(
    {
      getAppDetailsAction: getAppDetailsAction,
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(AppDetails)
