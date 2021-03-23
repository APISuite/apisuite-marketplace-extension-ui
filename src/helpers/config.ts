import baseConfig, { MarketplaceExtensionConfig } from 'config'

let values = {
  ...baseConfig,
}

interface Config {
  (): MarketplaceExtensionConfig
  set: (conf: Record<string, unknown>) => void
}

const config: Config = () => values

config.set = (conf: Record<string, unknown>) => {
  values = {
    ...values,
    ...conf,
  }
}

export default config
