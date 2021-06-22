import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import clsx from 'clsx';
import { Avatar, Box, Button, Chip, Typography, useTranslation, } from '@apisuite/fe-base';
import LaunchRoundedIcon from '@material-ui/icons/LaunchRounded';
import Link from '../../components/Link';
import useStyles from './styles';
const AppDetails = ({ allSubbedMarketplaceApps, getAllSubbedMarketplaceAppsAction, getAppDetailsAction, retrievedSelectedAppDetails, selectedAppDetails, subscribeToMarketplaceAppAction, unsubscribeToMarketplaceAppAction, userProfile, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const t = (string) => {
        return trans.t(`extensions.marketplace.${string}`);
    };
    // 1. All subbed Marketplace apps' retrieval
    /* Triggers the retrieval and storage (on the app's Store, under 'marketplace > allSubbedMarketplaceApps')
    of all information we presently have on a user's marketplace app subscriptions. This will come in handy when
    we want to check if the currently selected app is one that the user's already subscribed to. */
    useEffect(() => {
        if (userProfile && userProfile.id) {
            const userID = parseInt(userProfile.id);
            getAllSubbedMarketplaceAppsAction(userID);
        }
    }, [userProfile]);
    // 2. Subscription logic for the currently selected Marketplace app
    // Retrieves the app's ID from the browser window's URL
    const { appID } = useParams();
    /* Triggers the retrieval and storage (on the app's Store, under 'marketplace > selectedAppDetails')
    of all information we presently have on the currently selected marketplace app. */
    useEffect(() => {
        if (appID !== '')
            getAppDetailsAction(appID);
    }, [appID]);
    const [isUserSubbedToApp, setIsUserSubbedToApp] = useState(false);
    /* The following effect code will check if the currently selected app is one that
    the user's already subscribed to. */
    useEffect(() => {
        const currentAppIsInSubs = allSubbedMarketplaceApps.find((marketplaceApp) => {
            return marketplaceApp.id.toString() === appID;
        });
        if (currentAppIsInSubs) {
            setIsUserSubbedToApp(true);
        }
    }, [allSubbedMarketplaceApps]);
    const handleMarketplaceAppSubscription = () => {
        const userID = parseInt(userProfile.id);
        const selectedAppID = selectedAppDetails.id;
        if (isUserSubbedToApp) {
            unsubscribeToMarketplaceAppAction(userID, selectedAppID);
            setIsUserSubbedToApp(false);
        }
        else {
            subscribeToMarketplaceAppAction(userID, selectedAppID);
            setIsUserSubbedToApp(true);
        }
    };
    // 3. Currently selected Marketplace app's details logic
    const [appNameInitials, setAppNameInitials] = useState('...');
    useEffect(() => {
        const appNameInitialsArray = selectedAppDetails.name.split(' ');
        const appNameInitials = appNameInitialsArray.length >= 2
            ? `${appNameInitialsArray[0][0]}${appNameInitialsArray[1][0]}`
            : `${appNameInitialsArray[0][0]}${appNameInitialsArray[0][1]}`;
        setAppNameInitials(appNameInitials);
    }, [selectedAppDetails]);
    const isURLEmpty = (providedURL) => {
        return providedURL === null || providedURL === '';
    };
    // All images - as well as all thumbnails - must be of the same size
    const imagesArray = selectedAppDetails
        ? selectedAppDetails?.images?.map((image) => {
            return {
                original: image,
                thumbnail: image,
            };
        })
        : [];
    return (React.createElement("main", null,
        React.createElement("section", { className: classes.appDetailsContainer }, retrievedSelectedAppDetails ? (React.createElement(React.Fragment, null,
            React.createElement("section", { className: classes.leftAppDetailsContainer },
                React.createElement("div", { className: classes.topMostSubSection },
                    selectedAppDetails && selectedAppDetails.logo !== '' ? (React.createElement("img", { className: classes.appImage, src: selectedAppDetails.logo })) : (React.createElement(Avatar, { className: classes.appAvatar }, appNameInitials ? appNameInitials : '...')),
                    React.createElement(Button, { className: isUserSubbedToApp
                            ? classes.appAlreadySubscribedButton
                            : classes.appSubscribeButton, onClick: handleMarketplaceAppSubscription }, isUserSubbedToApp
                        ? t('appMarketplace.appDetails.appAlreadySubscribedButton')
                        : t('appMarketplace.appDetails.appSubscribeButton')),
                    selectedAppDetails && selectedAppDetails.directUrl && (React.createElement(Box, { mt: 2 },
                        React.createElement(Link, { className: classes.accessAppButton, to: selectedAppDetails.directUrl },
                            React.createElement(Button, { color: "primary", fullWidth: true, variant: "outlined" },
                                t('appMarketplace.appDetails.accessAppButtonLabel'),
                                React.createElement(LaunchRoundedIcon, null)))))),
                React.createElement("hr", { className: clsx(classes.subSectionSeparator, {
                        [classes.addedSpacing]: selectedAppDetails && selectedAppDetails.directUrl,
                    }) }),
                React.createElement("div", null,
                    React.createElement(Box, { pb: 1 },
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("strong", null, t('appMarketplace.appDetails.subSectionTitleOne')))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.websiteUrl) && (React.createElement(Typography, { variant: "body1" },
                        React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.websiteUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.websiteURL')))),
                    selectedAppDetails && !isURLEmpty(selectedAppDetails.tosUrl) && (React.createElement(Typography, { variant: "body1" },
                        React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.tosUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.tosURL')))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.privacyUrl) && (React.createElement(Typography, { variant: "body1" },
                        React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.privacyUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.privacyPolicyURL')))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.youtubeUrl) && (React.createElement(Typography, { variant: "body1" },
                        React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.youtubeUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.youTubeURL')))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.supportUrl) && (React.createElement(Typography, { variant: "body1" },
                        React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.supportUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.supportURL')))),
                    selectedAppDetails &&
                        isURLEmpty(selectedAppDetails.privacyUrl) &&
                        isURLEmpty(selectedAppDetails.supportUrl) &&
                        isURLEmpty(selectedAppDetails.tosUrl) &&
                        isURLEmpty(selectedAppDetails.websiteUrl) &&
                        isURLEmpty(selectedAppDetails.youtubeUrl) && (React.createElement(Typography, { variant: "body1" }, t('appMarketplace.appDetails.appLinks.noAppLinks')))),
                React.createElement("hr", { className: classes.subSectionSeparator }),
                React.createElement("div", null,
                    React.createElement(Box, { pb: 1 },
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("strong", null, t('appMarketplace.appDetails.subSectionTitleTwo')))),
                    React.createElement(Typography, { variant: "body1" }, selectedAppDetails && selectedAppDetails.organization.name
                        ? selectedAppDetails.organization.name
                        : '...')),
                React.createElement("hr", { className: classes.subSectionSeparator }),
                React.createElement("div", null,
                    React.createElement(Box, { pb: 1 },
                        React.createElement(Typography, { variant: "body1" },
                            React.createElement("strong", null, t('appMarketplace.appDetails.subSectionTitleThree')))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.organization.tosUrl) && (React.createElement(Typography, { variant: "body1" },
                        React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.organization.tosUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.publisherLinks.tosURL')))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.organization.privacyUrl) && (React.createElement(Typography, { variant: "body1" },
                        React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.organization.privacyUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.publisherLinks.privacyPolicyURL')))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.organization.supportUrl) && (React.createElement(Typography, { variant: "body1" },
                        React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.organization.supportUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.publisherLinks.supportURL')))),
                    selectedAppDetails &&
                        isURLEmpty(selectedAppDetails.organization.privacyUrl) &&
                        isURLEmpty(selectedAppDetails.organization.supportUrl) &&
                        isURLEmpty(selectedAppDetails.organization.tosUrl) && (React.createElement(Typography, { variant: "body1" }, t('appMarketplace.appDetails.publisherLinks.noPublisherLinks'))))),
            React.createElement("section", { className: classes.rightAppDetailsContainer },
                React.createElement(Box, { pb: 1.5 },
                    React.createElement(Typography, { variant: "h1" }, selectedAppDetails && selectedAppDetails.name
                        ? selectedAppDetails.name
                        : '...')),
                selectedAppDetails && selectedAppDetails.shortDescription && (React.createElement(Box, { pb: 1.5 },
                    React.createElement(Typography, { variant: "h5" }, selectedAppDetails.shortDescription))),
                React.createElement(Box, { display: "flex", flexWrap: "wrap" }, selectedAppDetails && selectedAppDetails.labels.length ? (selectedAppDetails.labels.map((label, index) => {
                    return (React.createElement(Box, { mr: 1, key: `appLabel${index}` },
                        React.createElement(Chip, { className: classes.appChip, label: `${label}` })));
                })) : (React.createElement(Box, { mr: 1 },
                    React.createElement(Chip, { className: classes.appChip, label: `${t('appMarketplace.appDetails.noLabels')}` })))),
                imagesArray.length !== 0 && (React.createElement(Box, { pt: 5 },
                    React.createElement(ImageGallery, { additionalClass: classes.appImageGallery, items: imagesArray, showNav: false, showPlayButton: false }))),
                React.createElement(Box, { pt: 5, pb: 3 },
                    React.createElement(Typography, { variant: "h3" }, t('appMarketplace.appDetails.partOfAppOverviewTitle'))),
                React.createElement(Box, { pb: 1 },
                    React.createElement(Typography, { variant: "body1" }, selectedAppDetails && selectedAppDetails.description
                        ? selectedAppDetails.description
                        : t('appMarketplace.appDetails.noAppOverview')))))) : (React.createElement(Box, { py: 3, display: "flex", justifyContent: "center", width: 1 },
            React.createElement(Typography, { variant: "body1" }, t('appMarketplace.appDetails.loadingAppDetails')))))));
};
export default AppDetails;
