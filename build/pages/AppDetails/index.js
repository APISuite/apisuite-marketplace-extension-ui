import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllSubbedMarketplaceAppsAction, getAppDetailsAction, subscribeToMarketplaceAppAction, unsubscribeToMarketplaceAppAction, } from '../Marketplace/ducks';
import AppDetails from './AppDetails';
export const mapStateToProps = ({ marketplace, profile }) => ({
    allSubbedMarketplaceApps: marketplace.allSubbedMarketplaceApps,
    retrievedSelectedAppDetails: marketplace.retrievedSelectedAppDetails,
    selectedAppDetails: marketplace.selectedAppDetails,
    userProfile: profile.profile.user,
});
export const mapDispatchToProps = (dispatch) => bindActionCreators({
    getAllSubbedMarketplaceAppsAction: getAllSubbedMarketplaceAppsAction,
    getAppDetailsAction: getAppDetailsAction,
    subscribeToMarketplaceAppAction: subscribeToMarketplaceAppAction,
    unsubscribeToMarketplaceAppAction: unsubscribeToMarketplaceAppAction,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(AppDetails);
