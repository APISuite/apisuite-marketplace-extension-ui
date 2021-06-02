import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Checkbox, FormControl, FormControlLabel, FormGroup, FormLabel, InputAdornment, Radio, RadioGroup, TextField, Typography, useConfig, useTranslation, } from '@apisuite/fe-base';
// import AmpStoriesRoundedIcon from '@material-ui/icons/AmpStoriesRounded'
// import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'
// import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded'
import { Pagination } from '@material-ui/lab';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import SortRoundedIcon from '@material-ui/icons/SortRounded';
import { APPS_PER_PAGE } from '../../constants/globals';
import { debounce } from '../../util/debounce';
import AppCatalog from '../../components/AppCatalog';
import Link from '../../components/Link';
import marketplace from 'assets/marketplace.svg';
import marketplaceApps from 'assets/marketplaceApps.svg';
import useStyles from './styles';
const Marketplace = ({ allMarketplaceApps, allMarketplaceLabels, allMarketplacePublishers, filteredMarketplaceApps, getAllMarketplaceAppsAction, getAllMarketplaceLabelsAction, getAllMarketplacePublishersAction, getFilteredMarketplaceAppsAction, pagination, retrievedAllMarketplaceApps, retrievedAllMarketplaceLabels, retrievedAllMarketplacePublishers, }) => {
    const classes = useStyles();
    const { portalName } = useConfig();
    const trans = useTranslation();
    const t = (string) => {
        return trans.t(`extensions.marketplace.${string}`);
    };
    useEffect(() => {
        /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
        of all information we presently have on public apps, and their respective labels & publishers. */
        getAllMarketplaceAppsAction({ page, pageSize: APPS_PER_PAGE });
        getAllMarketplaceLabelsAction();
        getAllMarketplacePublishersAction();
    }, []);
    const [allAppsList, setAllAppsList] = useState([]);
    useEffect(() => {
        /* Once 'marketplace -> allMarketplaceApps' info is made available to us, we process it
        so as to later display it on our 'Apps catalog' section. */
        const allAvailableAppsArray = allMarketplaceApps;
        if (allAvailableAppsArray.length) {
            const newAllAvailableAppsArray = allAvailableAppsArray.map((app) => {
                return {
                    appDescription: app.shortDescription.length > 0
                        ? app.shortDescription
                        : app.description.length > 0
                            ? app.description
                            : t('appMarketplace.noDescriptionAvailableText'),
                    appID: app.id,
                    appLabels: app.labels,
                    appLogo: app.logo,
                    appName: app.name,
                    appPublisher: app.organization.name,
                    appUpdatedAt: app.updatedAt,
                };
            });
            setAllAppsList(newAllAvailableAppsArray);
        }
    }, [allMarketplaceApps]);
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
    const [filteredAppsList, setFilteredAppsList] = useState([]);
    useEffect(() => {
        /* Once 'marketplace -> filteredMarketplaceApps' info is made available to us, we process it
        so as to later display it on our 'Apps catalog' section. */
        const filteredAppsArray = filteredMarketplaceApps;
        if (filteredAppsArray.length) {
            const newFilteredAppsArray = filteredAppsArray.map((filteredApp) => {
                return {
                    appDescription: filteredApp.shortDescription.length > 0
                        ? filteredApp.shortDescription
                        : filteredApp.description.length > 0
                            ? filteredApp.description
                            : t('appMarketplace.noDescriptionAvailableText'),
                    appID: filteredApp.id,
                    appLabels: filteredApp.labels,
                    appLogo: filteredApp.logo,
                    appName: filteredApp.name,
                    appPublisher: filteredApp.organization.name,
                    appUpdatedAt: filteredApp.updatedAt,
                };
            });
            setFilteredAppsList(newFilteredAppsArray);
        }
        else {
            setFilteredAppsList([]);
        }
    }, [filteredMarketplaceApps]);
    const filterAndSortApps = ({ page = 1, pageSize = APPS_PER_PAGE, }) => {
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
        getFilteredMarketplaceAppsAction({
            org_id: publisherFiltersForFilterAction,
            label: labelFiltersForFilterAction,
            sort_by: sortModeForFilterAction,
            order: orderModeForFilterAction,
            page,
            pageSize,
            search: searchTerm.toLowerCase(),
        });
    };
    useEffect(() => {
        filterAndSortApps({ page, pageSize: APPS_PER_PAGE });
        setFiltersHaveChanged(false);
    }, [filtersHaveChanged, labelFilters, publisherFilters, sortMode]);
    useEffect(() => {
        if (searchTerm.length === 0) {
            filterAndSortApps({ page, pageSize: APPS_PER_PAGE });
        }
        else {
            debounce('MARKETPLACE_FILTER_BY_SEARCH', () => filterAndSortApps({ page, pageSize: APPS_PER_PAGE }), 1000);
        }
    }, [searchTerm]);
    // App's pagination
    const setPagination = () => {
        const pageCount = Math.ceil(pagination.rowCount / APPS_PER_PAGE);
        return (React.createElement(Pagination, { count: pageCount || 1, onChange: handleChange, page: page, shape: "rounded", variant: "outlined" }));
    };
    // Carousel of 'featured apps'
    // const [currentSlide, setCurrentSlide] = useState(0)
    const [page, setPage] = useState(1);
    const handleChange = (event, value) => {
        setPage(value);
        filterAndSortApps({
            page: value,
            pageSize: APPS_PER_PAGE,
        });
    };
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
                React.createElement("p", { className: classes.amountOfAppMarketAppsText },
                    React.createElement("span", null,
                        pagination.rowCount || '0',
                        React.createElement(React.Fragment, null,
                            " ",
                            t('appMarketplace.amountOfAppsTextPartOne'),
                            " ")),
                    React.createElement(React.Fragment, null, t('appMarketplace.amountOfAppsTextPartTwo'))),
                retrievedAllMarketplaceApps &&
                    retrievedAllMarketplaceLabels &&
                    retrievedAllMarketplacePublishers ? (filteredAppsList.length > 0 ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: classes.appCatalogContainer },
                        React.createElement(AppCatalog, { appsToDisplay: filteredAppsList })),
                    setPagination())) : searchTerm.length === 0 &&
                    !Object.values(labelFilters).includes(true) &&
                    !Object.values(publisherFilters).includes(true) ? (React.createElement(React.Fragment, null,
                    React.createElement("div", { className: classes.appCatalogContainer },
                        React.createElement(AppCatalog, { appsToDisplay: allAppsList })),
                    setPagination())) : (React.createElement("p", { className: classes.noAppsToDisplay }, t('appMarketplace.noAppsToDisplayText')))) : (React.createElement("p", { className: classes.noAppsToDisplay }, t('appMarketplace.retrievingAppsToDisplayText'))))));
    };
    const displayNoMarketplaceApps = () => {
        return (
        /* 2 - No Markeplace apps to display */
        React.createElement("section", { className: classes.noMarketplaceAppsSection },
            React.createElement("img", { className: classes.noMarketplaceAppsImage, src: marketplaceApps }),
            React.createElement("p", { className: classes.noMarketplaceAppsTitle }, t('appMarketplace.noAppsTitle')),
            React.createElement("p", { className: classes.noMarketplaceAppsSubtitle },
                t('appMarketplace.noAppsSubtitlePartOne'),
                React.createElement("span", null, t('appMarketplace.noAppsSubtitlePartTwo'))),
            React.createElement(Link, { className: classes.createAppButtonStyling, to: '/dashboard/apps/' }, t('appMarketplace.createAppButtonLabel'))));
    };
    return (React.createElement("main", null,
        React.createElement("header", { className: classes.appMarketHeader },
            React.createElement("div", { className: classes.appMarketHeaderContentsContainer },
                React.createElement("div", { className: classes.appMarketHeaderTitleAndSearchField },
                    React.createElement("h1", { className: classes.appMarketHeaderTitle },
                        React.createElement(React.Fragment, null,
                            t('appMarketplace.headerTitlePartOne'),
                            " "),
                        React.createElement(React.Fragment, null,
                            portalName,
                            " "),
                        React.createElement(React.Fragment, null, t('appMarketplace.headerTitlePartTwo'))),
                    allAppsList.length && (React.createElement(TextField, { className: classes.appMarketHeaderSearchField, InputProps: {
                            endAdornment: (React.createElement(InputAdornment, { position: "end" },
                                React.createElement(SearchRoundedIcon, null))),
                        }, onChange: handleSearchTermChanges, placeholder: t('appMarketplace.searchForAppsTextField'), variant: "outlined" }))),
                React.createElement("div", null,
                    React.createElement("img", { className: classes.appMarketHeaderImage, src: marketplace })))),
        allAppsList.length
            ? displayMarketplaceApps()
            : displayNoMarketplaceApps()));
};
export default Marketplace;
