import { connect } from 'react-redux'

import MarketplaceAppVisibility from './MarketplaceAppVisibility'

export const mapStateToProps = ({ profile }) => ({
  userRoleID: profile.profile.current_org.role.id,
})

export default connect(mapStateToProps, null)(MarketplaceAppVisibility)
