import React from 'react';
import { Avatar, useTranslation } from '@apisuite/fe-base';
import Link from '../Link';
import useStyles from './styles';
const AppCatalog = ({ appsToDisplay }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const t = (string) => {
        return trans.t(`extensions.marketplace.${string}`);
    };
    const generateAppCatalogEntry = (appDetails, index) => {
        const appSplitName = appDetails.appName.split(' ');
        const appInitials = appSplitName[0].slice(0, 2);
        return (React.createElement("div", { className: classes.appCatalogEntry, key: `appCatalogEntry${index}` },
            React.createElement("div", { className: classes.appCatalogEntryTopDetails },
                appDetails.appLogo !== '' ? (React.createElement("img", { className: classes.appCatalogEntryImage, src: appDetails.appLogo })) : (React.createElement(Avatar, { className: classes.appCatalogEntryAvatar }, appInitials)),
                React.createElement("div", { className: classes.appCatalogEntryNameAndOwnerContainer },
                    React.createElement("p", { className: classes.appCatalogEntryName }, appDetails.appName),
                    React.createElement("p", { className: classes.appCatalogEntryOwner }, appDetails.appPublisher))),
            React.createElement("div", { className: classes.appCatalogEntryBottomDetails },
                React.createElement("p", { className: classes.appCatalogEntryDescription }, appDetails.appDescription),
                React.createElement("div", { className: classes.appCatalogEntryLabelsContainer }, appDetails.appLabels.length ? (appDetails.appLabels.map((appLabel, index) => {
                    return (React.createElement("p", { className: classes.appCatalogEntryLabel, key: `appLabel${index}` }, appLabel));
                })) : (React.createElement("p", { className: classes.appCatalogEntryLabel }, t('appMarketplace.noLabelsProvidedText')))))));
    };
    const appCatalogEntries = appsToDisplay.map((appDetails, index) => {
        return (React.createElement(Link, { className: classes.appCatalogEntryLink, key: `linkToApp${index}`, to: `marketplace/app-details/${appDetails.appID}` }, generateAppCatalogEntry(appDetails, index)));
    });
    return React.createElement(React.Fragment, null, appCatalogEntries);
};
export default AppCatalog;
