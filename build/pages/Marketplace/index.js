import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getAllMarketplaceAppsAction, getAllMarketplaceLabelsAction, getAllMarketplacePublishersAction, getFilteredMarketplaceAppsAction, } from './ducks';
import Marketplace from './Marketplace';
export const mapStateToProps = ({ marketplace }) => ({
    allMarketplaceApps: marketplace.allMarketplaceApps,
    allMarketplaceLabels: marketplace.allMarketplaceLabels,
    allMarketplacePublishers: marketplace.allMarketplacePublishers,
    filteredMarketplaceApps: marketplace.filteredMarketplaceApps,
    retrievedAllMarketplaceApps: marketplace.retrievedAllMarketplaceApps,
    retrievedAllMarketplaceLabels: marketplace.retrievedAllMarketplaceLabels,
    retrievedAllMarketplacePublishers: marketplace.retrievedAllMarketplacePublishers,
});
export const mapDispatchToProps = (dispatch) => bindActionCreators({
    getAllMarketplaceAppsAction: getAllMarketplaceAppsAction,
    getAllMarketplaceLabelsAction: getAllMarketplaceLabelsAction,
    getAllMarketplacePublishersAction: getAllMarketplacePublishersAction,
    getFilteredMarketplaceAppsAction: getFilteredMarketplaceAppsAction,
}, dispatch);
export default connect(mapStateToProps, mapDispatchToProps)(Marketplace);