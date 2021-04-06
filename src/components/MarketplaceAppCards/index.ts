import { connect } from 'react-redux'

import MarketplaceAppCards from './MarketplaceAppCards'

export const mapStateToProps = ({ marketplace }: any) => ({
  // TODO: Retrieve all subscribed marketplace apps, and map them to the component's props
  // allMarketplaceApps: marketplace.allMarketplaceApps,
})

export default connect(null, null)(MarketplaceAppCards)
