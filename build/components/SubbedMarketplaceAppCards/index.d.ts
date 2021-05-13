import { Dispatch } from 'redux';
import { getAllSubbedMarketplaceAppsAction } from '../../pages/Marketplace/ducks';
export declare const mapStateToProps: ({ marketplace, profile }: {
    marketplace: any;
    profile: any;
}) => {
    allSubbedMarketplaceApps: any;
    retrievedAllSubbedMarketplaceApps: any;
    userProfile: any;
};
export declare const mapDispatchToProps: (dispatch: Dispatch) => {
    getAllSubbedMarketplaceAppsAction: typeof getAllSubbedMarketplaceAppsAction;
};
declare const _default: any;
export default _default;
