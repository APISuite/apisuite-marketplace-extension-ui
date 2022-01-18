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
export const INFORM_URL = process.env.INFORM_URL || '';
