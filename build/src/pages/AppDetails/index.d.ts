/// <reference types="react" />
import { Dispatch } from 'redux';
export declare const mapStateToProps: ({ marketplace, profile }: any) => {
    allSubbedMarketplaceApps: any;
    retrievedSelectedAppDetails: any;
    selectedAppDetails: any;
    userProfile: any;
};
export declare const mapDispatchToProps: (dispatch: Dispatch) => any;
declare const _default: import("react-redux").ConnectedComponent<import("react").FC<import("./types").AppDetailsProps>, import("react-redux").Omit<import("./types").AppDetailsProps, never>>;
export default _default;
