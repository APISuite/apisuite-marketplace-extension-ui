import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputAdornment, Radio, RadioGroup, TextField, Typography, useConfig, useTheme, useTranslation, } from '@apisuite/fe-base';
// import AmpStoriesRoundedIcon from '@material-ui/icons/AmpStoriesRounded'
// import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'
// import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded'
import { Pagination } from '@material-ui/lab';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SortRoundedIcon from '@material-ui/icons/SortRounded';
import { MARKETPLACE_APPS_PER_PAGE } from '../../constants/globals';
import { debounce } from '../../util/debounce';
import AppCatalog from '../../components/AppCatalog';
import Link from '../../components/Link';
import marketplace from 'assets/marketplace.svg';
import marketplaceApps from 'assets/marketplaceApps.svg';
import useStyles from './styles';
import marketplaceSelector from './selector';
import { getAllMarketplaceAppsAction, getAllMarketplaceLabelsAction, getAllMarketplacePublishersAction, getFilteredMarketplaceAppsAction, } from './ducks';
import CTACard from '../../components/CTACard';
const Marketplace = () => {
    const classes = useStyles();
    const { palette } = useTheme();
    const { clientName, navigation, portalName } = useConfig();
    const { allMarketplaceApps, allMarketplaceLabels, allMarketplacePublishers, filteredMarketplaceApps, retrievedAllMarketplaceApps, retrievedAllMarketplaceLabels, retrievedAllMarketplacePublishers, pagination, userProfile, } = useSelector(marketplaceSelector);
    const dispatch = useDispatch();
    const trans = useTranslation();
    const t = (string, ...args) => {
        return trans.t(`extensions.marketplace.${string}`, ...args);
    };
    useEffect(() => {
        /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
        of all information we presently have on public apps, and their respective labels & publishers. */
        dispatch(getAllMarketplaceAppsAction({ page, pageSize: MARKETPLACE_APPS_PER_PAGE }));
        dispatch(getAllMarketplaceLabelsAction());
        dispatch(getAllMarketplacePublishersAction());
    }, []);
    /* App filtering & sorting set-up */
    // 1 - Search term filter
    const [searchTerm, setSearchTerm] = useState('');
    const handleSearchTermChanges = (changeEvent) => {
        const newSearchTerm = changeEvent?.target.value.toLowerCase();
        setSearchTerm(newSearchTerm);
    };
    // 2 - Label & publisher filters
    const [filtersHaveChanged, setFiltersHaveChanged] = useState(false);
    const [labelFilters, setLabelFilters] = useState({});
    const [labelFilterElements, setLabelFilterElements] = useState([]);
    const [publisherNames, setPublisherNames] = useState([]);
    const [publisherFilters, setPublisherFilters] = useState({});
    const [publisherFilterElements, setPublisherFilterElements] = useState([]);
    const filterSelection = (labelOrPublisherString, filterType) => {
        if (filterType === 'labels') {
            const newLabelFilters = { ...labelFilters };
            newLabelFilters[labelOrPublisherString] = !newLabelFilters[labelOrPublisherString];
            setLabelFilters(newLabelFilters);
            setFiltersHaveChanged(true);
        }
        else {
            const newPublisherFilters = { ...publisherFilters };
            newPublisherFilters[labelOrPublisherString] = !newPublisherFilters[labelOrPublisherString];
            setPublisherFilters(newPublisherFilters);
            setFiltersHaveChanged(true);
        }
    };
    useEffect(() => {
        const newLabelFilters = {};
        allMarketplaceLabels.map((label) => {
            newLabelFilters[label] = false;
        });
        setLabelFilters(newLabelFilters);
    }, [allMarketplaceLabels]);
    useEffect(() => {
        const newLabelFilterElements = allMarketplaceLabels.map((label, index) => {
            return (React.createElement(FormControlLabel, { className: labelFilters[label]
                    ? classes.selectedFilter
                    : classes.notSelectedFilter, control: React.createElement(Checkbox, { checked: labelFilters[label], name: label, onClick: () => filterSelection(label, 'labels') }), key: `labelFilterElement${index}`, label: label }));
        });
        setLabelFilterElements(newLabelFilterElements);
    }, [labelFilters]);
    useEffect(() => {
        const newPublisherNames = [];
        const newPublisherFilters = {};
        allMarketplacePublishers.map((publisher) => {
            const publisherName = publisher['name'];
            newPublisherNames.push(publisherName);
            newPublisherFilters[publisherName] = false;
        });
        setPublisherNames(newPublisherNames);
        setPublisherFilters(newPublisherFilters);
    }, [allMarketplacePublishers]);
    useEffect(() => {
        const newPublisherFilterElements = publisherNames.map((publisherName, index) => {
            return (React.createElement(FormControlLabel, { className: publisherFilters[publisherName]
                    ? classes.selectedFilter
                    : classes.notSelectedFilter, control: React.createElement(Checkbox, { checked: publisherFilters[publisherName], name: publisherName, onClick: () => filterSelection(publisherName, 'publishers') }), key: `publisherFilterElement${index}`, label: publisherName }));
        });
        setPublisherFilterElements(newPublisherFilterElements);
    }, [publisherFilters]);
    // 3 - Sort mode
    const [sortMode, setSortMode] = useState('appName'); // Either 'appName', 'publisherName', or 'lastUpdated'
    const sortModeSelection = (clickEvent) => {
        const selectedSortMode = clickEvent.target.value;
        setSortMode(selectedSortMode);
    };
    /* App filtering & sorting process */
    const filterAndSortApps = ({ page = 1, pageSize = MARKETPLACE_APPS_PER_PAGE, }) => {
        if (!(retrievedAllMarketplaceApps &&
            retrievedAllMarketplaceLabels &&
            retrievedAllMarketplacePublishers)) {
            return;
        }
        const labelFiltersForFilterAction = [];
        const publisherFiltersForFilterAction = [];
        const sortModeForFilterAction = sortMode === 'appName'
            ? 'app'
            : sortMode === 'publisherName'
                ? 'org'
                : 'updated';
        const orderModeForFilterAction = 'asc'; // TODO: Eventually create something that allows us to set the order mode
        allMarketplaceLabels.map((label) => {
            if (labelFilters[label]) {
                labelFiltersForFilterAction.push(label);
            }
        });
        allMarketplacePublishers.map((publisher) => {
            if (publisherFilters[publisher.name]) {
                publisherFiltersForFilterAction.push(publisher.id);
            }
        });
        const hasFilters = [
            publisherFiltersForFilterAction,
            labelFiltersForFilterAction,
        ].some((f) => f.length);
        dispatch(getFilteredMarketplaceAppsAction({
            org_id: publisherFiltersForFilterAction,
            label: labelFiltersForFilterAction,
            sort_by: sortModeForFilterAction,
            order: orderModeForFilterAction,
            // if filter changed reset page to 1
            page: hasFilters ? 1 : page,
            pageSize,
            search: searchTerm.toLowerCase(),
        }, 'marketplace'));
    };
    useEffect(() => {
        filterAndSortApps({ page, pageSize: MARKETPLACE_APPS_PER_PAGE });
        setFiltersHaveChanged(false);
    }, [filtersHaveChanged, labelFilters, publisherFilters, sortMode]);
    const [debounceCalled, setDebounceCalled] = useState(false);
    useEffect(() => {
        if (searchTerm.length === 0) {
            if (debounceCalled) {
                debounce('MARKETPLACE_FILTER_BY_SEARCH', () => {
                    // cancel the previous debounce it there was any
                }, 100);
                setDebounceCalled(false);
            }
            filterAndSortApps({ page, pageSize: MARKETPLACE_APPS_PER_PAGE });
        }
        else {
            debounce('MARKETPLACE_FILTER_BY_SEARCH', 
            // if search is being used set page to 1
            () => filterAndSortApps({ page: 1, pageSize: MARKETPLACE_APPS_PER_PAGE }), 1000);
            setDebounceCalled(true);
        }
    }, [searchTerm]);
    // App's pagination
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        filterAndSortApps({
            page: value,
            pageSize: MARKETPLACE_APPS_PER_PAGE,
        });
    };
    const setPagination = () => {
        const pageCount = Math.ceil(pagination.rowCount / MARKETPLACE_APPS_PER_PAGE);
        return (React.createElement(Pagination, { count: pageCount || 1, onChange: handleChange, page: page, shape: "rounded", color: "primary" }));
    };
    // 'Are you a Developer' CTA card
    const generateCTACard = () => {
        let cardLink = '/auth/signin';
        /*
          Upon clicking the CTA's button:
          1. We check if 'Home' is hidden.
          1.a. If hidden, we direct the user to the 'Sign in' view.
          1.b. If not hidden, we direct the user to 'Home'.
        */
        navigation.anonymous.tabs.forEach((tab) => {
            if (tab.action === '/home')
                cardLink = '/home';
        });
        return (React.createElement(Box, { mt: 5 },
            React.createElement(CTACard, { actions: [
                    React.createElement(Button, { color: "primary", disableElevation: true, key: "createAppButtonKey", size: "large", variant: "contained" },
                        React.createElement(Link, { style: {
                                color: palette.common.white,
                                textDecoration: 'none',
                            }, to: cardLink }, t('appMarketplace.ctaCard.buttonLabel'))),
                ], textArray: [
                    t('appMarketplace.ctaCard.text', {
                        portalOwner: clientName || '...',
                    }),
                ], title: t('appMarketplace.ctaCard.title') })));
    };
    // Carousel of 'featured apps'
    // const [currentSlide, setCurrentSlide] = useState(0)
    // Displaying of apps
    const displayMarketplaceApps = () => {
        return (
        /* 2 - App Markeplace's filters & apps */
        React.createElement("section", { className: classes.appMarketFiltersAndAppsSection },
            React.createElement("div", { className: classes.appMarketFilters },
                React.createElement(FormControl, null,
                    React.createElement(FormLabel, null,
                        React.createElement("div", { className: classes.filterTitleContainer },
                            React.createElement(SortRoundedIcon, { className: classes.filterTitleIcon }),
                            React.createElement("p", { className: classes.filterTitleText }, t('appMarketplace.sortByTitle')))),
                    React.createElement(RadioGroup, { name: "sortMode", onChange: sortModeSelection, value: sortMode },
                        React.createElement(FormControlLabel, { className: sortMode === 'appName'
                                ? classes.selectedFilter
                                : classes.notSelectedFilter, control: React.createElement(Radio, null), label: t('appMarketplace.sortModes.appName'), value: "appName" }),
                        React.createElement(FormControlLabel, { className: sortMode === 'publisherName'
                                ? classes.selectedFilter
                                : classes.notSelectedFilter, control: React.createElement(Radio, null), label: t('appMarketplace.sortModes.publisherName'), value: "publisherName" }),
                        React.createElement(FormControlLabel, { className: sortMode === 'lastUpdated'
                                ? classes.selectedFilter
                                : classes.notSelectedFilter, control: React.createElement(Radio, null), label: t('appMarketplace.sortModes.lastUpdated'), value: "lastUpdated" }))),
                React.createElement("hr", { className: classes.filterSeparator }),
                React.createElement(FormControl, null,
                    React.createElement(FormLabel, null,
                        React.createElement("div", { className: classes.filterTitleContainer },
                            React.createElement(FilterListRoundedIcon, { className: classes.filterTitleIcon }),
                            React.createElement("p", { className: classes.filterTitleText }, t('appMarketplace.filterByTitle')))),
                    React.createElement(Accordion, { className: classes.filterAccordionContainer },
                        React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreRoundedIcon, { className: classes.filterAccordionIcon }) },
                            React.createElement(Typography, { className: classes.filterAccordionTitle }, t('appMarketplace.filterByModes.labels'))),
                        React.createElement(AccordionDetails, null,
                            React.createElement(FormGroup, null, labelFilterElements.length !== 0 ? (labelFilterElements) : (React.createElement("p", { className: classes.noFiltersAvailable }, t('appMarketplace.filterByModes.noLabels')))))),
                    React.createElement(Accordion, { className: classes.filterAccordionContainer },
                        React.createElement(AccordionSummary, { expandIcon: React.createElement(ExpandMoreRoundedIcon, { className: classes.filterAccordionIcon }) },
                            React.createElement(Typography, { className: classes.filterAccordionTitle }, t('appMarketplace.filterByModes.publishers'))),
                        React.createElement(AccordionDetails, null,
                            React.createElement(FormGroup, null, publisherFilterElements.length !== 0 ? (publisherFilterElements) : (React.createElement("p", { className: classes.noFiltersAvailable }, t('appMarketplace.filterByModes.noPublishers')))))))),
            React.createElement("div", { className: classes.appMarketApps },
                React.createElement(Box, { mb: 3 },
                    React.createElement(Typography, { variant: "h6" },
                        React.createElement("span", null,
                            React.createElement("strong", null,
                                pagination.rowCount || '0',
                                React.createElement(React.Fragment, null,
                                    " ",
                                    t('appMarketplace.amountOfAppsTextPartOne'),
                                    " "))),
                        React.createElement(React.Fragment, null, t('appMarketplace.amountOfAppsTextPartTwo')))),
                retrievedAllMarketplaceApps &&
                    retrievedAllMarketplaceLabels &&
                    retrievedAllMarketplacePublishers ? (filteredMarketplaceApps.length > 0 ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: classes.appCatalogContainer },
                        React.createElement(AppCatalog, { appsToDisplay: filteredMarketplaceApps })),
                    setPagination())) : searchTerm.length === 0 &&
                    !Object.values(labelFilters).includes(true) &&
                    !Object.values(publisherFilters).includes(true) ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: classes.appCatalogContainer },
                        React.createElement(AppCatalog, { appsToDisplay: allMarketplaceApps })),
                    setPagination())) : (React.createElement(Box, { pt: 5 },
                    React.createElement(Typography, { variant: "body1", className: classes.noAppsToDisplay }, t('appMarketplace.noAppsToDisplayText'))))) : (React.createElement(Box, { pt: 5 },
                    React.createElement(Typography, { variant: "body1", className: classes.noAppsToDisplay }, t('appMarketplace.retrievingAppsToDisplayText')))),
                userProfile.id === '' && generateCTACard())));
    };
    const displayNoMarketplaceApps = () => {
        return (
        /* 2 - No Markeplace apps to display */
        React.createElement("section", { className: classes.noMarketplaceAppsSection },
            React.createElement("img", { className: classes.noMarketplaceAppsImage, src: marketplaceApps }),
            React.createElement(Typography, { className: classes.noMarketplaceAppsTitle }, t('appMarketplace.noAppsTitle')),
            React.createElement(Typography, { className: classes.noMarketplaceAppsSubtitle },
                t('appMarketplace.noAppsSubtitlePartOne'),
                React.createElement("span", null, t('appMarketplace.noAppsSubtitlePartTwo'))),
            React.createElement(Typography, { className: classes.noMarketplaceAppsSubtitle },
                React.createElement(Link, { className: classes.createAppButtonStyling, to: '/dashboard/apps/' }, t('appMarketplace.createAppButtonLabel')))));
    };
    return (React.createElement("main", null,
        React.createElement("header", { className: classes.appMarketHeader },
            React.createElement("div", { className: classes.appMarketHeaderContentsContainer },
                React.createElement("div", { className: classes.appMarketHeaderTitleAndSearchField },
                    React.createElement(Typography, { variant: "h1", className: classes.appMarketHeaderTitle },
                        React.createElement(React.Fragment, null,
                            t('appMarketplace.headerTitlePartOne'),
                            " "),
                        React.createElement(React.Fragment, null,
                            portalName,
                            " "),
                        React.createElement(React.Fragment, null, t('appMarketplace.headerTitlePartTwo'))),
                    !!allMarketplaceApps.length && (React.createElement(TextField, { className: classes.appMarketHeaderSearchField, InputProps: {
                            endAdornment: (React.createElement(InputAdornment, { position: "end" },
                                React.createElement(SearchRoundedIcon, null))),
                        }, onChange: handleSearchTermChanges, placeholder: t('appMarketplace.searchForAppsTextField'), variant: "outlined" }))),
                React.createElement("div", null,
                    React.createElement("img", { className: classes.appMarketHeaderImage, src: marketplace })))),
        displayMarketplaceApps()));
};
export default Marketplace;
