import { MarketplaceExtensionConfig } from 'config';
interface Config {
    (): MarketplaceExtensionConfig;
    set: (conf: Record<string, unknown>) => void;
}
declare const config: Config;
export default config;
