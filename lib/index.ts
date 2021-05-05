import {
  Extension,
  ExtensionParams,
  protocolVersion,
} from '@apisuite/extension-ui-types/v1'
import { MarketplaceExtensionConfig } from './config'
import './translations'
import hooks from './hooks'
import configHelper from './helpers/config'
import coreHelper from './helpers/core'
import { injectStuffIntoStore } from './helpers/store'
import { name, version } from './constants/info'

type MarketplaceExtensionParams = ExtensionParams & {
  config?: MarketplaceExtensionConfig
}

class MarketplaceExtension extends Extension {
  static info = {
    name,
    version,
    protocolVersion,
  }

  public config: MarketplaceExtensionConfig

  hooks = hooks

  constructor({ core, config }: MarketplaceExtensionParams) {
    super({ core, config })

    configHelper.set(config)
    coreHelper.set(core)

    injectStuffIntoStore(core.store)
  }
}

export default MarketplaceExtension
