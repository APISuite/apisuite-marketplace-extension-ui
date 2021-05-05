import React, { useEffect } from 'react';
import { Avatar, Button, useTranslation } from '@apisuite/fe-base';
import HeightRoundedIcon from '@material-ui/icons/HeightRounded';
import Link from '../Link';
import useStyles from './styles';
const SubbedMarketplaceAppCards = ({ allSubbedMarketplaceApps, getAllSubbedMarketplaceAppsAction, retrievedAllSubbedMarketplaceApps, userProfile, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    function t(str) {
        return trans.t(`extensions.Marketplace.${str}`);
    }
    useEffect(() => {
        /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
        of all information we presently have on some user's marketplace app subscriptions. */
        if (userProfile) {
            const userID = parseInt(userProfile.id);
            getAllSubbedMarketplaceAppsAction(userID);
        }
    }, [userProfile]);
    const stringChecker = (providedString) => {
        return providedString.length ? providedString : false;
    };
    let allMarketplaceAppNames = [];
    /* Generates an 'app card' for every marketplace app a user has subscribed to. */
    const subbedMarketplaceAppCardGenerator = (subbedMarketplaceApps) => {
        if (!retrievedAllSubbedMarketplaceApps) {
            return (React.createElement("p", { className: classes.loadingMarketplaceApplicationCards }, "Retrieving all subscribed Marketplace apps..."));
        }
        if (subbedMarketplaceApps.length === 0) {
            return (React.createElement("p", { className: classes.loadingMarketplaceApplicationCards }, t('appListing.noMarketplaceAppSubscriptions')));
        }
        const allSubbedMarketplaceAppCardsArray = subbedMarketplaceApps.map((subbedMarketplaceApp, index) => {
            const appNameInitialsArray = subbedMarketplaceApp.name.split(' ');
            const appNameInitials = appNameInitialsArray.length >= 2
                ? `${appNameInitialsArray[0][0]}${appNameInitialsArray[1][0]}`
                : `${appNameInitialsArray[0][0]}${appNameInitialsArray[0][1]}`;
            allMarketplaceAppNames = [
                ...allMarketplaceAppNames,
                subbedMarketplaceApp.name,
            ];
            return (React.createElement(Link, { className: classes.marketplaceAppCardLink, key: `marketplaceAppCardLink${index}`, to: `/marketplace/app-details/${subbedMarketplaceApp.id}` },
                React.createElement("div", { className: classes.marketplaceAppCard },
                    React.createElement("div", { className: classes.marketplaceAppCardTopSection },
                        React.createElement(HeightRoundedIcon, { className: subbedMarketplaceApp.logo !== ''
                                ? classes.marketplaceAppCardWithImageIcon
                                : classes.marketplaceAppCardWithAvatarIcon }),
                        subbedMarketplaceApp.logo !== '' ? (React.createElement("img", { className: classes.marketplaceAppCardImage, src: subbedMarketplaceApp.logo })) : (React.createElement(Avatar, { className: classes.marketplaceAppCardAvatar }, appNameInitials))),
                    React.createElement("div", { className: classes.marketplaceAppCardBottomSection },
                        React.createElement("p", { className: classes.marketplaceAppCardTitle }, subbedMarketplaceApp.name),
                        React.createElement("p", { className: classes.marketplaceAppCardDescription }, 
                        //stringChecker(subbedMarketplaceApp.shortDescription) ||
                        stringChecker(subbedMarketplaceApp.description) ||
                            t('appListing.noAppDescriptionProvided'))))));
        });
        return allSubbedMarketplaceAppCardsArray;
    };
    return (React.createElement("div", null,
        React.createElement("p", { className: classes.applicationsContainerTitle }, t('appListing.marketplaceAppsSectionTitle')),
        React.createElement(Button, { className: classes.browseMarketplaceAppsButton, href: "/marketplace" }, t('appListing.browseMarketplaceApps')),
        React.createElement("div", { className: classes.allSubbedMarketplaceAppsContainer }, subbedMarketplaceAppCardGenerator(allSubbedMarketplaceApps))));
};
export default SubbedMarketplaceAppCards;
