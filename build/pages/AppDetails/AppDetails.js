import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/scss/image-gallery.scss';
import { Avatar, Button, useTranslation } from '@apisuite/fe-base';
import useStyles from './styles';
const AppDetails = ({ allSubbedMarketplaceApps, getAllSubbedMarketplaceAppsAction, getAppDetailsAction, retrievedSelectedAppDetails, selectedAppDetails, subscribeToMarketplaceAppAction, unsubscribeToMarketplaceAppAction, userProfile, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    function t(str) {
        return trans.t(`extensions.Marketplace.${str}`);
    }
    // 1. All subbed Marketplace app's retrieval
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
    const imagesArray = [
        {
            original: 'https://picsum.photos/id/1018/1000/600/',
            thumbnail: 'https://picsum.photos/id/1018/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1015/1000/600/',
            thumbnail: 'https://picsum.photos/id/1015/250/150/',
        },
        {
            original: 'https://picsum.photos/id/1019/1000/600/',
            thumbnail: 'https://picsum.photos/id/1019/250/150/',
        },
    ];
    return (React.createElement("main", null,
        React.createElement("section", { className: classes.appDetailsContainer }, retrievedSelectedAppDetails ? (React.createElement(React.Fragment, null,
            React.createElement("section", { className: classes.leftAppDetailsContainer },
                React.createElement("div", { className: classes.topMostSubSection },
                    selectedAppDetails && selectedAppDetails.logo !== '' ? (React.createElement("img", { className: classes.appImage, src: selectedAppDetails.logo })) : (React.createElement(Avatar, { className: classes.appAvatar }, appNameInitials ? appNameInitials : '...')),
                    React.createElement(Button, { className: isUserSubbedToApp
                            ? classes.appAlreadySubscribedButton
                            : classes.appSubscribeButton, onClick: handleMarketplaceAppSubscription }, isUserSubbedToApp
                        ? t('appMarketplace.appDetails.appAlreadySubscribedButton')
                        : t('appMarketplace.appDetails.appSubscribeButton'))),
                React.createElement("hr", { className: classes.subSectionSeparator }),
                React.createElement("div", null,
                    React.createElement("p", { className: classes.subSectionTitle }, t('appMarketplace.appDetails.subSectionTitleOne')),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.websiteUrl) && (React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.websiteUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.websiteURL'))),
                    selectedAppDetails && !isURLEmpty(selectedAppDetails.tosUrl) && (React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.tosUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.tosURL'))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.privacyUrl) && (React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.privacyUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.privacyPolicyURL'))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.youtubeUrl) && (React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.youtubeUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.youTubeURL'))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.supportUrl) && (React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.supportUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.appLinks.supportURL'))),
                    selectedAppDetails &&
                        isURLEmpty(selectedAppDetails.privacyUrl) &&
                        isURLEmpty(selectedAppDetails.supportUrl) &&
                        isURLEmpty(selectedAppDetails.tosUrl) &&
                        isURLEmpty(selectedAppDetails.websiteUrl) &&
                        isURLEmpty(selectedAppDetails.youtubeUrl) && (React.createElement("p", { className: classes.subSectionText }, t('appMarketplace.appDetails.appLinks.noAppLinks')))),
                React.createElement("hr", { className: classes.subSectionSeparator }),
                React.createElement("div", null,
                    React.createElement("p", { className: classes.subSectionTitle }, t('appMarketplace.appDetails.subSectionTitleTwo')),
                    React.createElement("p", { className: classes.subSectionText }, selectedAppDetails && selectedAppDetails.organization.name
                        ? selectedAppDetails.organization.name
                        : '...')),
                React.createElement("hr", { className: classes.subSectionSeparator }),
                React.createElement("div", null,
                    React.createElement("p", { className: classes.subSectionTitle }, t('appMarketplace.appDetails.subSectionTitleThree')),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.organization.tosUrl) && (React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.organization.tosUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.publisherLinks.tosURL'))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.organization.privacyUrl) && (React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.organization.privacyUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.publisherLinks.privacyPolicyURL'))),
                    selectedAppDetails &&
                        !isURLEmpty(selectedAppDetails.organization.supportUrl) && (React.createElement("a", { className: classes.providedLink, href: selectedAppDetails.organization.supportUrl, rel: "noopener noreferrer", target: "_blank" }, t('appMarketplace.appDetails.publisherLinks.supportURL'))),
                    selectedAppDetails &&
                        isURLEmpty(selectedAppDetails.organization.privacyUrl) &&
                        isURLEmpty(selectedAppDetails.organization.supportUrl) &&
                        isURLEmpty(selectedAppDetails.organization.tosUrl) && (React.createElement("p", { className: classes.subSectionText }, t('appMarketplace.appDetails.publisherLinks.noPublisherLinks'))))),
            React.createElement("section", { className: classes.rightAppDetailsContainer },
                React.createElement("h1", { className: classes.appTitle }, selectedAppDetails && selectedAppDetails.name
                    ? selectedAppDetails.name
                    : '...'),
                React.createElement("p", { className: classes.appDescription }, selectedAppDetails && selectedAppDetails.shortDescription
                    ? selectedAppDetails.shortDescription
                    : t('appMarketplace.appDetails.noShortDescription')),
                React.createElement("div", { className: classes.appLabelsContainer }, selectedAppDetails && selectedAppDetails.labels.length ? (selectedAppDetails.labels.map((label, index) => {
                    return (React.createElement("p", { className: classes.appLabel, key: `appLabel${index}` }, label));
                })) : (React.createElement("p", { className: classes.appLabel }, t('appMarketplace.appDetails.noLabels')))),
                React.createElement(ImageGallery, { additionalClass: classes.appImageGallery, items: imagesArray, showNav: false, showPlayButton: false }),
                React.createElement("h1", { className: classes.appOverviewTitle }, t('appMarketplace.appDetails.partOfAppOverviewTitle')),
                React.createElement("p", { className: classes.appOverviewDescription }, selectedAppDetails && selectedAppDetails.description
                    ? selectedAppDetails.description
                    : t('appMarketplace.appDetails.noAppOverview'))))) : (React.createElement("p", { className: classes.loadingAppDetails }, t('appMarketplace.appDetails.loadingAppDetails'))))));
};
export default AppDetails;
