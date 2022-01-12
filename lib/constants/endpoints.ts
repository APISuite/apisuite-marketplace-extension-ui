import core from '../helpers/core'

function getApiUrl() {
  if (core().IS_CLOUD) return core().buildCloudBackendUrl()
  return process.env.API_URL || ''
}

function getMarketplaceApiUrl() {
  if (core().IS_CLOUD) return core().buildCloudBackendUrl('ext-marketplace')
  return process.env.MARKETPLACE_API_URL || ''
}

export const API_URL = getApiUrl()
export const MARKETPLACE_API_URL = getMarketplaceApiUrl()
export const INFORM_URL = process.env.INFORM_URL || ''
