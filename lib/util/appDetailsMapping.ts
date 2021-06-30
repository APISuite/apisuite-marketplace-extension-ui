import { AppDetails } from '../pages/Marketplace/types'

export default function appDetailsMapping(
  appDetails: AppDetails,
  noDescriptionString: string
) {
  return {
    appDescription:
      appDetails.shortDescription ||
      appDetails.description ||
      noDescriptionString,
    appID: appDetails.id,
    appLabels: appDetails.labels,
    appLogo: appDetails.logo,
    appName: appDetails.name,
    appPublisher: appDetails.organization.name,
    appUpdatedAt: appDetails.updatedAt,
  }
}
