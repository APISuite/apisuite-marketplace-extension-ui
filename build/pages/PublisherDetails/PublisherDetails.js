import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router';
import clsx from 'clsx';
import { Avatar, Box, Container, Grid, Paper, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import { Pagination } from '@material-ui/lab';
import AppCatalog from '../../components/AppCatalog';
import Link from '../../components/Link';
import useStyles from './styles';
import publisherDetailsSelector from './selector';
import { getFilteredMarketplaceAppsAction, getPublisherDetailsAction, } from '../Marketplace/ducks';
import { PUBLISHER_APPS_PER_PAGE } from '../../constants/globals';
const PublisherDetails = () => {
    const classes = useStyles();
    const { palette } = useTheme();
    const trans = useTranslation();
    const t = (string, ...args) => {
        return trans.t(`extensions.marketplace.${string}`, ...args);
    };
    const { allPublisherApps, pagination, publisherDetails, retrievedAllPublisherApps, retrievedPublisherDetails, retrievedPublisherDetailsError, } = useSelector(publisherDetailsSelector);
    const dispatch = useDispatch();
    // Retrieves the publisher's ID from the browser window's URL
    const { publisherID } = useParams();
    useEffect(() => {
        /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
        of all information we presently have on a particular publisher. */
        dispatch(getPublisherDetailsAction(publisherID));
    }, [publisherID]);
    const [publisherNameInitials, setPublisherNameInitials] = useState('...');
    useEffect(() => {
        const publisherNameInitialsArray = publisherDetails.name.split(' ');
        const publisherNameInitials = publisherNameInitialsArray.length >= 2
            ? `${publisherNameInitialsArray[0][0]}${publisherNameInitialsArray[1][0]}`
            : `${publisherNameInitialsArray[0][0]}${publisherNameInitialsArray[0][1]}`;
        setPublisherNameInitials(publisherNameInitials);
    }, [publisherDetails]);
    const generatePublisherLinks = (providedPublisherLinks) => {
        const publisherLinks = [];
        for (const link in providedPublisherLinks) {
            if (providedPublisherLinks[link]) {
                publisherLinks.push(React.createElement(Grid, { item: true, key: link },
                    React.createElement(Link, { to: providedPublisherLinks[link] },
                        React.createElement(Typography, { style: {
                                color: palette.text.secondary,
                                textDecoration: 'underline',
                            }, variant: "body1" }, t(`publisherDetails.${link}`)))));
            }
        }
        return (React.createElement(Grid, { alignItems: "flex-start", container: true, direction: "row", justify: "flex-start", spacing: 3 }, publisherLinks));
    };
    // Pagination logic
    const [currentPage, setCurrentPage] = useState(1);
    const handleChange = (event, value) => {
        setCurrentPage(value);
    };
    const generatePagination = () => {
        const amountOfPages = Math.ceil(pagination.rowCount / PUBLISHER_APPS_PER_PAGE);
        return (React.createElement(Pagination, { color: "primary", count: amountOfPages || 1, onChange: handleChange, page: currentPage, shape: "rounded" }));
    };
    useEffect(() => {
        /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
        of all apps a particular publisher has made available on the Marketplace.
        
        If the user changes pages by way of the pagination, we need to do this again. */
        if (retrievedPublisherDetails) {
            dispatch(getFilteredMarketplaceAppsAction({
                label: [],
                order: 'desc',
                org_id: [publisherID],
                page: 1,
                pageSize: 12,
                search: '',
                sort_by: 'app',
            }, 'publisher'));
        }
    }, [currentPage, retrievedPublisherDetails]);
    const generatePublisherDetails = () => {
        if (retrievedPublisherDetails && !retrievedPublisherDetailsError) {
            return (React.createElement(React.Fragment, null,
                React.createElement(Grid, { alignItems: "center", className: classes.publisherCard, component: Paper, container: true, direction: "row", justify: "flex-start" },
                    React.createElement(Grid, { item: true },
                        React.createElement(Avatar, { className: clsx(classes.publisherAvatar, { [classes.avatarWithImage]: publisherDetails.logo }, { [classes.avatarWithoutImage]: !publisherDetails.logo }), src: publisherDetails.logo },
                            React.createElement(Typography, { style: { color: palette.common.white }, variant: "h2" }, publisherNameInitials))),
                    React.createElement(Grid, { item: true },
                        React.createElement(Box, { mb: 1.25 },
                            React.createElement(Typography, { style: { color: palette.text.primary }, variant: "h1" }, publisherDetails.name)),
                        React.createElement(Box, { mb: 3 },
                            React.createElement(Typography, { style: { color: palette.text.secondary }, variant: "body1" }, publisherDetails.description)),
                        generatePublisherLinks({
                            websiteUrl: publisherDetails.websiteUrl,
                            supportUrl: publisherDetails.supportUrl,
                            tosUrl: publisherDetails.tosUrl,
                            privacyUrl: publisherDetails.privacyUrl,
                            youtubeUrl: publisherDetails.youtubeUrl,
                        }))),
                React.createElement(Grid, { alignItems: "flex-start", container: true, direction: "row", justify: "flex-start" },
                    React.createElement(Grid, { item: true },
                        React.createElement(Box, { mb: 4, mt: 5 },
                            React.createElement(Typography, { style: { color: palette.text.primary }, variant: "h6" }, t('publisherDetails.appsByPublisherTitle', {
                                publisher: publisherDetails && publisherDetails.name
                                    ? publisherDetails.name
                                    : '...',
                            }))),
                        retrievedAllPublisherApps && (React.createElement(React.Fragment, null,
                            React.createElement(Box, { mb: 3 },
                                React.createElement(AppCatalog, { appsToDisplay: allPublisherApps, catalogMode: "publisher" })),
                            React.createElement(Box, { mb: 10 }, generatePagination())))))));
        }
        else {
            return (React.createElement(Box, { alignItems: "center", display: "flex", flexDirection: "column", justifyContent: "center", py: 10 },
                React.createElement(Typography, { style: { color: palette.text.primary }, variant: "h6" }, t('publisherDetails.errorMessage'))));
        }
    };
    return (React.createElement(Container, { className: classes.pageContainer }, generatePublisherDetails()));
};
export default PublisherDetails;
