import React, { useEffect, useState } from 'react';
import { Avatar, Box, Typography, useTranslation, useTheme, } from '@apisuite/fe-base';
import HeightRoundedIcon from '@material-ui/icons/HeightRounded';
import { BASE_URI } from '../../helpers/constants';
import Link from '../Link';
import useStyles from './styles';
const SubbedMarketplaceAppCards = ({ allSubbedMarketplaceApps, getAllSubbedMarketplaceAppsAction, retrievedAllSubbedMarketplaceApps, userProfile, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const { palette } = useTheme();
    const t = (string) => {
        return trans.t(`extensions.marketplace.${string}`);
    };
    const [isLoading, setLoading] = useState(true);
    useEffect(() => {
        /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
        of all information we presently have on some user's marketplace app subscriptions. */
        if (userProfile) {
            const userID = parseInt(userProfile.id);
            getAllSubbedMarketplaceAppsAction(userID);
        }
    }, [userProfile]);
    useEffect(() => {
        setLoading(!retrievedAllSubbedMarketplaceApps);
    }, [retrievedAllSubbedMarketplaceApps]);
    const stringChecker = (providedString) => {
        return providedString.length ? providedString : false;
    };
    let allMarketplaceAppNames = [];
    /* Generates an 'app card' for every marketplace app a user has subscribed to. */
    const subbedMarketplaceAppCardGenerator = (subbedMarketplaceApps) => {
        if (isLoading) {
            return (React.createElement(Box, { py: 5 },
                React.createElement(Typography, { variant: "body1", display: "block", gutterBottom: true, style: { color: palette.text.secondary } }, t('appListing.retrievingMarketplaceAppSubscriptions'))));
        }
        if (subbedMarketplaceApps.length === 0) {
            return (React.createElement(Box, { py: 5 },
                React.createElement(Typography, { variant: "body1", display: "block", gutterBottom: true, style: { color: palette.text.secondary } }, t('appListing.noMarketplaceAppSubscriptions'))));
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
            return (React.createElement(Link, { className: classes.marketplaceAppCardLink, key: `marketplaceAppCardLink${index}`, to: `${BASE_URI}/app-details/${subbedMarketplaceApp.id}` },
                React.createElement("div", { className: classes.marketplaceAppCard },
                    React.createElement("div", { className: classes.marketplaceAppCardTopSection },
                        React.createElement(HeightRoundedIcon, { className: subbedMarketplaceApp.logo !== ''
                                ? classes.marketplaceAppCardWithImageIcon
                                : classes.marketplaceAppCardWithAvatarIcon }),
                        subbedMarketplaceApp.logo !== '' ? (React.createElement("img", { className: classes.marketplaceAppCardImage, src: subbedMarketplaceApp.logo })) : (React.createElement(Avatar, { className: classes.marketplaceAppCardAvatar }, appNameInitials))),
                    React.createElement("div", { className: classes.marketplaceAppCardBottomSection },
                        React.createElement(Typography, { className: classes.marketplaceAppCardTitle, variant: "h4", display: "block", gutterBottom: true }, subbedMarketplaceApp.name),
                        React.createElement(Typography, { variant: "body1", className: classes.marketplaceAppCardDescription }, stringChecker(subbedMarketplaceApp.shortDescription) ||
                            stringChecker(subbedMarketplaceApp.description) ||
                            t('appListing.noAppDescriptionProvided'))))));
        });
        return allSubbedMarketplaceAppCardsArray;
    };
    return (React.createElement("div", null,
        React.createElement(Box, { pb: 5, pt: 3 },
            React.createElement(Typography, { variant: "h2", display: "block", gutterBottom: true, style: { color: palette.text.primary } }, t('appListing.marketplaceAppsSectionTitle'))),
        React.createElement(Typography, { variant: "body1" },
            React.createElement(Link, { className: classes.browseMarketplaceAppsButton, to: BASE_URI }, t('appListing.browseMarketplaceApps'))),
        React.createElement("div", { className: classes.allSubbedMarketplaceAppsContainer }, subbedMarketplaceAppCardGenerator(allSubbedMarketplaceApps))));
};
export default SubbedMarketplaceAppCards;
