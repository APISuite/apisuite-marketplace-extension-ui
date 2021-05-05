import { Extension, protocolVersion, } from '@apisuite/extension-ui-types/v1';
import './translations';
import hooks from './hooks';
import configHelper from './helpers/config';
import coreHelper from './helpers/core';
import { injectStuffIntoStore } from './helpers/store';
import { name, version } from './constants/info';
class MarketplaceExtension extends Extension {
    constructor({ core, config }) {
        super({ core, config });
        this.hooks = hooks;
        configHelper.set(config);
        coreHelper.set(core);
        injectStuffIntoStore(core.store);
    }
}
MarketplaceExtension.info = {
    name,
    version,
    protocolVersion,
};
export default MarketplaceExtension;
