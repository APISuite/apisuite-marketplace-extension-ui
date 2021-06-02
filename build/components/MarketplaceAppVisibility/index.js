import { connect } from 'react-redux';
import MarketplaceAppVisibility from './MarketplaceAppVisibility';
export const mapStateToProps = ({ profile }) => ({
    userRole: profile.profile.current_org.role.name,
});
export default connect(mapStateToProps, null)(MarketplaceAppVisibility);
