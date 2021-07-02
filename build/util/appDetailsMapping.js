import { i18n } from '@apisuite/fe-base';
export default function appDetailsMapping(appDetails) {
    return {
        description: appDetails.shortDescription ||
            appDetails.description ||
            i18n.t('extensions.marketplace.appMarketplace.noDescriptionAvailableText'),
        id: appDetails.id,
        labels: appDetails.labels,
        logo: appDetails.logo,
        name: appDetails.name,
        publisher: appDetails.organization.name,
        updatedAt: appDetails.updatedAt,
    };
}
