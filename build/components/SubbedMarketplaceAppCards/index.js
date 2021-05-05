import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllSubbedMarketplaceAppsAction } from '../../pages/Marketplace/ducks';
import SubbedMarketplaceAppCards from './SubbedMarketplaceAppCards';
export const mapStateToProps = ({ marketplace, profile }) => ({
    allSubbedMarketplaceApps: marketplace.allSubbedMarketplaceApps,
    retrievedAllSubbedMarketplaceApps: marketplace.retrievedAllSubbedMarketplaceApps,
    userProfile: profile.profile.user,
});
export const mapDispatchToProps = (dispatch) => bindActionCreators({
    getAllSubbedMarketplaceAppsAction: getAllSubbedMarketplaceAppsAction,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(SubbedMarketplaceAppCards);
