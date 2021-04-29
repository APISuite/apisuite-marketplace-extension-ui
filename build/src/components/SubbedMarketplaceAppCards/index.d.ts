/// <reference types="react" />
import { Dispatch } from 'redux';
export declare const mapStateToProps: ({ marketplace, profile }: any) => {
    allSubbedMarketplaceApps: any;
    retrievedAllSubbedMarketplaceApps: any;
    userProfile: any;
};
export declare const mapDispatchToProps: (dispatch: Dispatch) => any;
declare const _default: import("react-redux").ConnectedComponent<import("react").FC<import("./types").SubbedMarketplaceAppCardsProps>, import("react-redux").Omit<import("./types").SubbedMarketplaceAppCardsProps, never>>;
export default _default;
