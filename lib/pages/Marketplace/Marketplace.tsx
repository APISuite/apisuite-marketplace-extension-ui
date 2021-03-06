import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputAdornment,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useConfig,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'
// import AmpStoriesRoundedIcon from '@material-ui/icons/AmpStoriesRounded'
// import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'
// import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded'
import { Pagination } from '@material-ui/lab'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SortRoundedIcon from '@material-ui/icons/SortRounded'
import clsx from 'clsx'

import { MARKETPLACE_APPS_PER_PAGE, ROLES } from '../../constants/globals'
import { debounce } from '../../util/debounce'
import AppCatalog from '../../components/AppCatalog'
import Link from '../../components/Link'
import useStyles from './styles'
import marketplaceSelector from './selector'
import {
  getAllMarketplaceAppsAction,
  getAllMarketplaceLabelsAction,
  getAllMarketplacePublishersAction,
  getFilteredMarketplaceAppsAction,
} from './ducks'
import { CTACard } from '../../components/CTACard'
import { getApiUrl } from '../../constants/endpoints'

const Marketplace: React.FC = () => {
  const classes = useStyles()

  const { custom, palette } = useTheme()

  const { clientName, portalName } = useConfig()

  const {
    allMarketplaceApps,
    allMarketplaceLabels,
    allMarketplacePublishers,
    filteredMarketplaceApps,
    retrievedAllMarketplaceApps,
    retrievedAllMarketplaceLabels,
    retrievedAllMarketplacePublishers,
    pagination,
    userCurrentOrg,
    userProfile,
  } = useSelector(marketplaceSelector)

  const dispatch = useDispatch()

  const trans = useTranslation()

  const t = (string: string, ...args) => {
    return trans.t(`extensions.marketplace.${string}`, ...args)
  }

  const marketplace = `${getApiUrl()}/resources/marketplace.hero?language=${
    trans.i18n.language
  }`
  const marketplaceApps = `${getApiUrl()}/resources/marketplace.apps?language=${
    trans.i18n.language
  }`
  const spaceBackground = `${getApiUrl()}/resources/marketplace.background?language=${
    trans.i18n.language
  }`

  useEffect(() => {
    /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
    of all information we presently have on public apps, and their respective labels & publishers. */
    dispatch(
      getAllMarketplaceAppsAction({ page, pageSize: MARKETPLACE_APPS_PER_PAGE })
    )
    dispatch(getAllMarketplaceLabelsAction())
    dispatch(getAllMarketplacePublishersAction())
  }, [])

  /* App filtering & sorting set-up */

  // 1 - Search term filter

  const [searchTerm, setSearchTerm] = useState('')

  const handleSearchTermChanges = (
    changeEvent?: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const newSearchTerm = changeEvent?.target.value.toLowerCase()

    setSearchTerm(newSearchTerm)
  }

  // 2 - Label & publisher filters

  const [filtersHaveChanged, setFiltersHaveChanged] = useState(false)

  const [labelFilters, setLabelFilters] = useState({})
  const [labelFilterElements, setLabelFilterElements] = useState([])

  const [publisherNames, setPublisherNames] = useState([])
  const [publisherFilters, setPublisherFilters] = useState({})
  const [publisherFilterElements, setPublisherFilterElements] = useState([])

  const filterSelection = (labelOrPublisherString, filterType) => {
    if (filterType === 'labels') {
      const newLabelFilters = { ...labelFilters }

      newLabelFilters[labelOrPublisherString] = !newLabelFilters[
        labelOrPublisherString
      ]

      setLabelFilters(newLabelFilters)
      setFiltersHaveChanged(true)
    } else {
      const newPublisherFilters = { ...publisherFilters }

      newPublisherFilters[labelOrPublisherString] = !newPublisherFilters[
        labelOrPublisherString
      ]

      setPublisherFilters(newPublisherFilters)
      setFiltersHaveChanged(true)
    }
  }

  useEffect(() => {
    const newLabelFilters = {}

    allMarketplaceLabels.map((label) => {
      newLabelFilters[label] = false
    })

    setLabelFilters(newLabelFilters)
  }, [allMarketplaceLabels])

  useEffect(() => {
    const newLabelFilterElements = allMarketplaceLabels.map((label, index) => {
      return (
        <FormControlLabel
          className={
            labelFilters[label]
              ? classes.selectedFilter
              : classes.notSelectedFilter
          }
          control={
            <Checkbox
              checked={labelFilters[label]}
              name={label}
              onClick={() => filterSelection(label, 'labels')}
            />
          }
          key={`labelFilterElement${index}`}
          label={label}
        />
      )
    })

    setLabelFilterElements(newLabelFilterElements)
  }, [labelFilters])

  useEffect(() => {
    const newPublisherNames = []

    const newPublisherFilters = {}

    allMarketplacePublishers.map((publisher) => {
      const publisherName = publisher['name']

      newPublisherNames.push(publisherName)

      newPublisherFilters[publisherName] = false
    })

    setPublisherNames(newPublisherNames)
    setPublisherFilters(newPublisherFilters)
  }, [allMarketplacePublishers])

  useEffect(() => {
    const newPublisherFilterElements = publisherNames.map(
      (publisherName, index) => {
        return (
          <FormControlLabel
            className={
              publisherFilters[publisherName]
                ? classes.selectedFilter
                : classes.notSelectedFilter
            }
            control={
              <Checkbox
                checked={publisherFilters[publisherName]}
                name={publisherName}
                onClick={() => filterSelection(publisherName, 'publishers')}
              />
            }
            key={`publisherFilterElement${index}`}
            label={publisherName}
          />
        )
      }
    )

    setPublisherFilterElements(newPublisherFilterElements)
  }, [publisherFilters])

  // 3 - Sort mode

  const [sortMode, setSortMode] = useState('appName') // Either 'appName', 'publisherName', or 'lastUpdated'

  const sortModeSelection = (clickEvent) => {
    const selectedSortMode = clickEvent.target.value

    setSortMode(selectedSortMode)
  }

  /* App filtering & sorting process */

  const filterAndSortApps = ({
    page = 1,
    pageSize = MARKETPLACE_APPS_PER_PAGE,
  }: {
    page: number
    pageSize: number
  }) => {
    if (
      !(
        retrievedAllMarketplaceApps &&
        retrievedAllMarketplaceLabels &&
        retrievedAllMarketplacePublishers
      )
    ) {
      return
    }

    const labelFiltersForFilterAction = []
    const publisherFiltersForFilterAction = []
    const sortModeForFilterAction =
      sortMode === 'appName'
        ? 'app'
        : sortMode === 'publisherName'
        ? 'org'
        : 'updated'
    const orderModeForFilterAction = 'asc' // TODO: Eventually create something that allows us to set the order mode

    allMarketplaceLabels.map((label) => {
      if (labelFilters[label]) {
        labelFiltersForFilterAction.push(label)
      }
    })

    allMarketplacePublishers.map((publisher) => {
      if (publisherFilters[publisher.name]) {
        publisherFiltersForFilterAction.push(publisher.id)
      }
    })

    const hasFilters = [
      publisherFiltersForFilterAction,
      labelFiltersForFilterAction,
    ].some((f) => f.length)

    dispatch(
      getFilteredMarketplaceAppsAction(
        {
          org_id: publisherFiltersForFilterAction,
          label: labelFiltersForFilterAction,
          sort_by: sortModeForFilterAction,
          order: orderModeForFilterAction,
          // if filter changed reset page to 1
          page: hasFilters ? 1 : page,
          pageSize,
          search: searchTerm.toLowerCase(),
        },
        'marketplace'
      )
    )
  }

  useEffect(() => {
    filterAndSortApps({ page, pageSize: MARKETPLACE_APPS_PER_PAGE })

    setFiltersHaveChanged(false)
  }, [filtersHaveChanged, labelFilters, publisherFilters, sortMode])

  const [debounceCalled, setDebounceCalled] = useState(false)

  useEffect(() => {
    if (searchTerm.length === 0) {
      if (debounceCalled) {
        debounce(
          'MARKETPLACE_FILTER_BY_SEARCH',
          () => {
            // cancel the previous debounce it there was any
          },
          100
        )
        setDebounceCalled(false)
      }
      filterAndSortApps({ page, pageSize: MARKETPLACE_APPS_PER_PAGE })
    } else {
      debounce(
        'MARKETPLACE_FILTER_BY_SEARCH',
        // if search is being used set page to 1
        () =>
          filterAndSortApps({ page: 1, pageSize: MARKETPLACE_APPS_PER_PAGE }),
        1000
      )
      setDebounceCalled(true)
    }
  }, [searchTerm])

  // App's pagination

  const [page, setPage] = useState(1)

  const handleChange = (event, value) => {
    setPage(value)

    filterAndSortApps({
      page: value,
      pageSize: MARKETPLACE_APPS_PER_PAGE,
    })
  }

  const setPagination = () => {
    const pageCount = Math.ceil(pagination.rowCount / MARKETPLACE_APPS_PER_PAGE)

    return (
      <Pagination
        count={pageCount || 1}
        onChange={handleChange}
        page={page}
        shape="rounded"
        color="primary"
      />
    )
  }

  // CTA card

  const generateCTACard = (roleName: string) => {
    let cardTitle = t('appMarketplace.ctaCard.unauthorisedUser.title')
    let cardText = t('appMarketplace.ctaCard.unauthorisedUser.text', {
      portalOwner: clientName || '...',
    })
    let cardButtonLabel = t(
      'appMarketplace.ctaCard.unauthorisedUser.buttonLabel'
    )
    let cardLink = '/home'

    if (
      roleName === ROLES.admin.value ||
      roleName === ROLES.organizationOwner.value ||
      roleName === ROLES.developer.value
    ) {
      cardTitle = t('appMarketplace.ctaCard.nonBaseUser.title')
      cardText = t('appMarketplace.ctaCard.nonBaseUser.text', {
        portalOwner: clientName || '...',
      })
      cardButtonLabel = t('appMarketplace.ctaCard.nonBaseUser.buttonLabel')
      cardLink = '/dashboard/apps'
    }

    if (roleName === ROLES.baseUser.value) {
      cardTitle = t('appMarketplace.ctaCard.baseUser.title')
      cardText = t('appMarketplace.ctaCard.baseUser.text')
      cardButtonLabel = t('appMarketplace.ctaCard.baseUser.buttonLabel')
    }

    return (
      <Box mt={5}>
        <CTACard
          actions={[
            <Button
              color="primary"
              disableElevation
              key="createAppButtonKey"
              size="large"
              variant="contained"
            >
              <Link
                style={{
                  color: palette.common.white,
                  textDecoration: 'none',
                }}
                to={cardLink}
              >
                {cardButtonLabel}
              </Link>
            </Button>,
          ]}
          textArray={[cardText]}
          title={cardTitle}
        />
      </Box>
    )
  }

  // Carousel of 'featured apps'

  // const [currentSlide, setCurrentSlide] = useState(0)

  // Displaying of apps

  const displayMarketplaceApps = () => {
    return (
      /* 2 - App Markeplace's filters & apps */
      <section className={classes.appMarketFiltersAndAppsSection}>
        {/* 2.1 - App Markeplace's filters */}
        <div className={classes.appMarketFilters}>
          {/* 2.1.1 - Sorting mechanism */}
          <FormControl>
            <FormLabel>
              <div className={classes.filterTitleContainer}>
                <SortRoundedIcon className={classes.filterTitleIcon} />

                <p className={classes.filterTitleText}>
                  {t('appMarketplace.sortByTitle')}
                </p>
              </div>
            </FormLabel>

            <RadioGroup
              name="sortMode"
              onChange={sortModeSelection}
              value={sortMode}
            >
              <FormControlLabel
                className={
                  sortMode === 'appName'
                    ? classes.selectedFilter
                    : classes.notSelectedFilter
                }
                control={<Radio />}
                label={t('appMarketplace.sortModes.appName')}
                value="appName"
              />

              <FormControlLabel
                className={
                  sortMode === 'publisherName'
                    ? classes.selectedFilter
                    : classes.notSelectedFilter
                }
                control={<Radio />}
                label={t('appMarketplace.sortModes.publisherName')}
                value="publisherName"
              />

              <FormControlLabel
                className={
                  sortMode === 'lastUpdated'
                    ? classes.selectedFilter
                    : classes.notSelectedFilter
                }
                control={<Radio />}
                label={t('appMarketplace.sortModes.lastUpdated')}
                value="lastUpdated"
              />
            </RadioGroup>
          </FormControl>

          <hr className={classes.filterSeparator} />

          {/* 2.1.2 - Filtering mechanism */}
          <FormControl>
            <FormLabel>
              <div className={classes.filterTitleContainer}>
                <FilterListRoundedIcon className={classes.filterTitleIcon} />

                <p className={classes.filterTitleText}>
                  {t('appMarketplace.filterByTitle')}
                </p>
              </div>
            </FormLabel>

            {/* 2.1.2.a - Filtering by 'Labels' */}
            <Accordion className={classes.filterAccordionContainer}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreRoundedIcon
                    className={classes.filterAccordionIcon}
                  />
                }
              >
                <Typography className={classes.filterAccordionTitle}>
                  {t('appMarketplace.filterByModes.labels')}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FormGroup>
                  {labelFilterElements.length !== 0 ? (
                    labelFilterElements
                  ) : (
                    <p className={classes.noFiltersAvailable}>
                      {t('appMarketplace.filterByModes.noLabels')}
                    </p>
                  )}
                </FormGroup>
              </AccordionDetails>
            </Accordion>

            {/* 2.1.2.b - Filtering by 'Publishers' */}
            <Accordion className={classes.filterAccordionContainer}>
              <AccordionSummary
                expandIcon={
                  <ExpandMoreRoundedIcon
                    className={classes.filterAccordionIcon}
                  />
                }
              >
                <Typography className={classes.filterAccordionTitle}>
                  {t('appMarketplace.filterByModes.publishers')}
                </Typography>
              </AccordionSummary>

              <AccordionDetails>
                <FormGroup>
                  {publisherFilterElements.length !== 0 ? (
                    publisherFilterElements
                  ) : (
                    <p className={classes.noFiltersAvailable}>
                      {t('appMarketplace.filterByModes.noPublishers')}
                    </p>
                  )}
                </FormGroup>
              </AccordionDetails>
            </Accordion>
          </FormControl>
        </div>

        {/* 2.2 - App Markeplace's apps */}
        <div className={classes.appMarketApps}>
          <Box mb={3}>
            <Typography variant="h6">
              <span>
                <strong>
                  {pagination.rowCount || '0'}
                  <> {t('appMarketplace.amountOfAppsTextPartOne')} </>
                </strong>
              </span>
              <>{t('appMarketplace.amountOfAppsTextPartTwo')}</>
            </Typography>
          </Box>

          {retrievedAllMarketplaceApps &&
          retrievedAllMarketplaceLabels &&
          retrievedAllMarketplacePublishers ? (
            filteredMarketplaceApps.length > 0 ? (
              <>
                <div className={classes.appCatalogContainer}>
                  <AppCatalog appsToDisplay={filteredMarketplaceApps} />
                </div>

                {setPagination()}
              </>
            ) : searchTerm.length === 0 &&
              !Object.values(labelFilters).includes(true) &&
              !Object.values(publisherFilters).includes(true) ? (
              <>
                <div className={classes.appCatalogContainer}>
                  <AppCatalog appsToDisplay={allMarketplaceApps} />
                </div>

                {setPagination()}
              </>
            ) : (
              <Box pt={5}>
                <Typography variant="body1" className={classes.noAppsToDisplay}>
                  {t('appMarketplace.noAppsToDisplayText')}
                </Typography>
              </Box>
            )
          ) : (
            <Box pt={5}>
              <Typography variant="body1" className={classes.noAppsToDisplay}>
                {t('appMarketplace.retrievingAppsToDisplayText')}
              </Typography>
            </Box>
          )}

          {/* Unauthorised user */}
          {userProfile.id <= 0 && generateCTACard('')}

          {/* Base user */}
          {userProfile.id > 0 &&
            (Object.keys(userCurrentOrg).length === 0 ||
              userCurrentOrg.role.name === ROLES.baseUser.value) &&
            generateCTACard(ROLES.baseUser.value)}

          {/* Admin, org owner, or developer */}
          {userProfile.id > 0 &&
            Object.keys(userCurrentOrg).length !== 0 &&
            userCurrentOrg.role.name !== ROLES.baseUser.value &&
            generateCTACard(userCurrentOrg.role.name)}

          {/* FIXME: Code is not needed for now, and should be replaced whenever feature flags are ready.
          allMarketplaceApps && (
            <div className={classes.featuredAppsOuterContainer}>
              <div className={classes.featuredAppsInnerContainer}>
                <p className={classes.featuredAppsTitle}>
                  {t('appMarketplace.featuredAppsTitle')}
                </p>

                <p className={classes.featuredAppsSubtitle}>
                  {t('appMarketplace.featuredAppsSubtitle')}
                </p>

                <div className={classes.featuredAppCardsSlider}>
                  <div
                    className={
                      currentSlide === 1 || currentSlide === 2
                        ? classes.visibleFeaturedAppCardsSliderButton
                        : classes.invisibleFeaturedAppCardsSliderButton
                    }
                  >
                    <ChevronLeftRoundedIcon />
                  </div>

                  <div className={classes.featuredAppCard}>
                    <AmpStoriesRoundedIcon
                      className={classes.featuredAppCardLogo}
                    />

                    <div className={classes.featuredAppCardInfo}>
                      <p>Featured app 1</p>
                      <p>Publisher A</p>
                    </div>
                  </div>

                  <div className={classes.featuredAppCard}>
                    <AmpStoriesRoundedIcon
                      className={classes.featuredAppCardLogo}
                    />

                    <div className={classes.featuredAppCardInfo}>
                      <p>Featured app 2</p>
                      <p>Publisher B</p>
                    </div>
                  </div>

                  <div className={classes.featuredAppCard}>
                    <AmpStoriesRoundedIcon
                      className={classes.featuredAppCardLogo}
                    />

                    <div className={classes.featuredAppCardInfo}>
                      <p>Featured app 3</p>
                      <p>Publisher C</p>
                    </div>
                  </div>

                  <div
                    className={
                      currentSlide === 0 || currentSlide === 1
                        ? classes.visibleFeaturedAppCardsSliderButton
                        : classes.invisibleFeaturedAppCardsSliderButton
                    }
                  >
                    <ChevronRightRoundedIcon />
                  </div>
                </div>
              </div>
            </div>
          )*/}
        </div>
      </section>
    )
  }

  const displayNoMarketplaceApps = () => {
    return (
      /* 2 - No Markeplace apps to display */
      <section className={classes.noMarketplaceAppsSection}>
        <img className={classes.noMarketplaceAppsImage} src={marketplaceApps} />

        <Typography className={classes.noMarketplaceAppsTitle}>
          {t('appMarketplace.noAppsTitle')}
        </Typography>

        <Typography className={classes.noMarketplaceAppsSubtitle}>
          {t('appMarketplace.noAppsSubtitlePartOne')}
          <span>{t('appMarketplace.noAppsSubtitlePartTwo')}</span>
        </Typography>

        <Typography className={classes.noMarketplaceAppsSubtitle}>
          <Link
            className={classes.createAppButtonStyling}
            to={'/dashboard/apps/'}
          >
            {t('appMarketplace.createAppButtonLabel')}
          </Link>
        </Typography>
      </section>
    )
  }

  return (
    <main>
      {/* 1 - App Marketplace header */}
      <header
        className={classes.appMarketHeader}
        style={{
          backgroundImage: `url('${
            custom?.images?.marketplace?.background || spaceBackground
          }')`,
        }}
      >
        <div className={classes.appMarketHeaderContentsContainer}>
          {/* 1.1 - Header's title & search field */}
          <div className={classes.appMarketHeaderTitleAndSearchField}>
            <Typography variant="h1" className={classes.appMarketHeaderTitle}>
              <>
                {t('appMarketplace.headerTitle', {
                  portalName,
                })}
              </>
            </Typography>

            {!!allMarketplaceApps.length && (
              <TextField
                className={classes.appMarketHeaderSearchField}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <SearchRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                onChange={handleSearchTermChanges}
                placeholder={t('appMarketplace.searchForAppsTextField')}
                variant="outlined"
              />
            )}
          </div>

          {/* 1.2 - Header's image */}
          <div style={{ display: 'flex' }}>
            <img
              className={clsx({
                [classes.appMarketHeaderImage]: !custom?.images?.marketplace
                  ?.hero,
              })}
              src={custom?.images?.marketplace?.hero || marketplace}
            />
          </div>
        </div>
      </header>

      {/* FIXME commented as logic needs change
      {allMarketplaceApps.length > 0
        ? displayNoMarketplaceApps()
        : displayMarketplaceApps()}
      */}
      {displayMarketplaceApps()}
    </main>
  )
}

export default Marketplace
