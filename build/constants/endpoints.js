import core from '../helpers/core';
export function getApiUrl() {
    if (core().IS_CLOUD)
        return core().buildCloudBackendUrl();
    return process.env.API_URL || '';
}
export function getMarketplaceApiUrl() {
    if (core().IS_CLOUD)
        return core().buildCloudBackendUrl('ext-marketplace');
    return process.env.MARKETPLACE_API_URL || '';
}
export function getAppConnectorApiUrl() {
    if (core().IS_CLOUD)
        return core().buildCloudBackendUrl('ext-appconnector');
    return process.env.APP_CONNECTOR_API_URL || 'https://appconnector.proxy.apisuite.io';
}
export const INFORM_URL = process.env.INFORM_URL || '';
