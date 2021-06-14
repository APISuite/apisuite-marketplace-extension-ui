import React from 'react';
import { Avatar, Box, Chip, Grid, Typography, useTranslation, } from '@apisuite/fe-base';
import Link from '../Link';
import { AppCard } from '../AppCard/AppCard';
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
        return (React.createElement(AppCard, { cardContent: React.createElement(React.Fragment, null,
                React.createElement("div", { className: classes.appCatalogEntryTopDetails },
                    appDetails.appLogo !== '' ? (React.createElement("img", { className: classes.appCatalogEntryImage, src: appDetails.appLogo })) : (React.createElement(Avatar, { className: classes.appCatalogEntryAvatar },
                        React.createElement(Typography, { variant: "body1" }, appInitials))),
                    React.createElement("div", { className: classes.appCatalogEntryNameAndOwnerContainer },
                        React.createElement(Typography, { variant: "body1", className: classes.appCatalogEntryName }, appDetails.appName),
                        React.createElement(Typography, { variant: "subtitle2", className: classes.appCatalogEntryOwner }, appDetails.appPublisher))),
                React.createElement("div", { className: classes.appCatalogEntryBottomDetails },
                    React.createElement(Typography, { variant: "body2", className: classes.appCatalogEntryDescription }, appDetails.appDescription),
                    React.createElement("div", { className: classes.appCatalogEntryLabelsContainer }, appDetails.appLabels.length ? (appDetails.appLabels.map((appLabel, index) => {
                        return (React.createElement(Box, { mr: 1, key: `appLabel${index}` },
                            React.createElement(Chip, { className: classes.appCatalogEntryLabels, label: `${appLabel}` })));
                    })) : (React.createElement(Box, { mr: 1 },
                        React.createElement(Chip, { className: classes.appCatalogEntryLabels, label: `${t('appMarketplace.noLabelsProvidedText')}` })))))), key: `appCatalogEntry${index}` }));
    };
    const appCatalogEntries = appsToDisplay.map((appDetails, index) => {
        return (React.createElement(Grid, { item: true, key: `linkToApp${index}`, md: 4 },
            React.createElement(Link, { className: classes.appCatalogEntryLink, to: `marketplace/app-details/${appDetails.appID}` }, generateAppCatalogEntry(appDetails, index))));
    });
    return (React.createElement(Grid, { container: true, spacing: 2 }, appCatalogEntries));
};
export default AppCatalog;
