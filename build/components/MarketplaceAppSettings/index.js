import { connect } from 'react-redux';
import MarketplaceAppSettings from './MarketplaceAppSettings';
export const mapStateToProps = ({ profile }) => ({
    userRole: profile.profile.current_org.role.name,
});
export default connect(mapStateToProps, null)(MarketplaceAppSettings);
