import { i18n } from '@apisuite/fe-base';
export default function appDetailsMapping(appDetails) {
    return {
        id: appDetails.id,
        labels: appDetails.labels,
        logo: appDetails.logo,
        name: appDetails.name,
        publisher: appDetails.organization.name,
        summary: appDetails.shortDescription ||
            i18n.t('extensions.marketplace.appMarketplace.noSummaryAvailableText'),
        updatedAt: appDetails.updatedAt,
    };
}
