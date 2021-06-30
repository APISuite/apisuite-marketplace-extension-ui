import { AppDetails } from '../pages/Marketplace/types'

export default function appDetailsMapping(
  appDetails: AppDetails,
  noDescriptionString: string
) {
  return {
    description:
      appDetails.shortDescription ||
      appDetails.description ||
      noDescriptionString,
    id: appDetails.id,
    labels: appDetails.labels,
    logo: appDetails.logo,
    name: appDetails.name,
    publisher: appDetails.organization.name,
    updatedAt: appDetails.updatedAt,
  }
}
