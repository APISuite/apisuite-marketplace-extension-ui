import { Extension, ExtensionParams } from '@apisuite/extension-ui-types/v1';
import { MarketplaceExtensionConfig } from './config';
import './translations';
declare type MarketplaceExtensionParams = ExtensionParams & {
    config?: MarketplaceExtensionConfig;
};
declare class MarketplaceExtension extends Extension {
    static info: {
        name: string;
        version: string;
        protocolVersion: string;
    };
    config: MarketplaceExtensionConfig;
    hooks: import("@apisuite/extension-ui-types").Hooks;
    constructor({ core, config }: MarketplaceExtensionParams);
}
export default MarketplaceExtension;
