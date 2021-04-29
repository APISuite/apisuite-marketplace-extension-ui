/// <reference types="react" />
import { Dispatch } from 'redux';
export declare const mapStateToProps: ({ marketplace }: any) => {
    allMarketplaceApps: any;
    allMarketplaceLabels: any;
    allMarketplacePublishers: any;
    filteredMarketplaceApps: any;
    retrievedAllMarketplaceApps: any;
    retrievedAllMarketplaceLabels: any;
    retrievedAllMarketplacePublishers: any;
};
export declare const mapDispatchToProps: (dispatch: Dispatch) => any;
declare const _default: import("react-redux").ConnectedComponent<import("react").FC<import("./types").MarketplaceProps>, import("react-redux").Omit<import("./types").MarketplaceProps, never>>;
export default _default;
