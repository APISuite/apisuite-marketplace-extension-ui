import { bindActionCreators, Dispatch } from 'redux'
import { connect } from 'react-redux'

import {
  setMarketplaceAppLabelsAction,
  setMarketplaceAppVisibilityAction,
} from '../../pages/Marketplace/ducks'
import MarketplaceAppVisibility from './MarketplaceAppVisibility'

export const mapDispatchToProps = (dispatch: Dispatch) =>
  bindActionCreators(
    {
      setMarketplaceAppVisibilityAction: setMarketplaceAppVisibilityAction,
      setMarketplaceAppLabelsAction: setMarketplaceAppLabelsAction,
    },
    dispatch
  )

export default connect(null, mapDispatchToProps)(MarketplaceAppVisibility)
