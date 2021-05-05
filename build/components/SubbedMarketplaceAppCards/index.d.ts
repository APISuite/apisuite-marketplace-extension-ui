/// <reference types="react" />
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
declare const _default: import("react-redux").ConnectedComponent<import("react").FC<import("./types").SubbedMarketplaceAppCardsProps>, Pick<import("./types").SubbedMarketplaceAppCardsProps, never>>;
export default _default;
