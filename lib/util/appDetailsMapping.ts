import { i18n } from '@apisuite/fe-base'
import { AppDetails } from '../pages/Marketplace/types'

export default function appDetailsMapping(appDetails: AppDetails) {
  return {
    description:
      appDetails.shortDescription ||
      appDetails.description ||
      i18n.t(
        'extensions.marketplace.appMarketplace.noDescriptionAvailableText'
      ),
    id: appDetails.id,
    labels: appDetails.labels,
    logo: appDetails.logo,
    name: appDetails.name,
    publisher: appDetails.organization.name,
    updatedAt: appDetails.updatedAt,
  }
}
