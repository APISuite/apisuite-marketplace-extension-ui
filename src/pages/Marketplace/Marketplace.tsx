import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
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
  useTranslation,
} from '@apisuite/fe-base'
import { Pagination } from '@material-ui/lab'
import AmpStoriesRoundedIcon from '@material-ui/icons/AmpStoriesRounded'
import ChevronLeftRoundedIcon from '@material-ui/icons/ChevronLeftRounded'
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded'
import FilterListRoundedIcon from '@material-ui/icons/FilterListRounded'
import SearchRoundedIcon from '@material-ui/icons/SearchRounded'
import SortRoundedIcon from '@material-ui/icons/SortRounded'

import { MarketplaceProps } from './types'
import AppCatalog from 'components/AppCatalog'
import marketplace from 'assets/marketplace.svg'
import useStyles from './styles'

const Marketplace: React.FC<MarketplaceProps> = ({
  allMarketplaceApps,
  allMarketplaceLabels,
  allMarketplacePublishers,

  filteredMarketplaceApps,

  getAllMarketplaceAppsAction,
  getAllMarketplaceLabelsAction,
  getAllMarketplacePublishersAction,
  getFilteredMarketplaceAppsAction,

  retrievedAllMarketplaceApps,
  retrievedAllMarketplaceLabels,
  retrievedAllMarketplacePublishers,
}) => {
  const classes = useStyles()

  const portalSettings = useConfig()

  const trans = useTranslation()

  const t = (string: string) => {
    return trans.t(`extensions.marketplace.${string}`)
  }

  useEffect(() => {
    /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
    of all information we presently have on public apps, and their respective labels & publishers. */
    getAllMarketplaceAppsAction()
    getAllMarketplaceLabelsAction()
    getAllMarketplacePublishersAction()
  }, [])

  const [allAppsList, setAllAppsList] = useState([])

  useEffect(() => {
    /* Once 'marketplace -> allMarketplaceApps' info is made available to us, we process it
    so as to later display it on our 'Apps catalog' section. */
    const allAvailableAppsArray = allMarketplaceApps

    if (allAvailableAppsArray.length) {
      const newAllAvailableAppsArray = allAvailableAppsArray.map((app) => {
        return {
          appDescription:
            app.shortDescription.length > 0
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
        }
      })

      setAllAppsList(newAllAvailableAppsArray)
    }
  }, [allMarketplaceApps])

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

  const [filteredAppsList, setFilteredAppsList] = useState([])

  useEffect(() => {
    /* Once 'marketplace -> filteredMarketplaceApps' info is made available to us, we process it
    so as to later display it on our 'Apps catalog' section. */
    const filteredAppsArray = filteredMarketplaceApps

    if (filteredAppsArray.length) {
      const newFilteredAppsArray = filteredAppsArray.map((filteredApp) => {
        return {
          appDescription:
            filteredApp.shortDescription.length > 0
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
        }
      })

      setFilteredAppsList(newFilteredAppsArray)
    }
  }, [filteredMarketplaceApps])

  const filterAndSortApps = () => {
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

    getFilteredMarketplaceAppsAction({
      org_id: publisherFiltersForFilterAction,
      label: labelFiltersForFilterAction,
      sort_by: sortModeForFilterAction,
      order: orderModeForFilterAction,
    })
  }

  useEffect(() => {
    filterAndSortApps()

    setFiltersHaveChanged(false)
  }, [filtersHaveChanged, labelFilters, publisherFilters, sortMode])

  useEffect(() => {
    if (searchTerm.length === 0) {
      filterAndSortApps()
    } else {
      const appsToFilter =
        filteredAppsList.length !== 0 ? [...filteredAppsList] : [...allAppsList]

      let newFilteredApps = []

      newFilteredApps = appsToFilter.filter((app) => {
        return app.appName.toLowerCase().includes(searchTerm.toLowerCase())
      })

      setFilteredAppsList(newFilteredApps)
    }
  }, [searchTerm])

  // Carousel of 'featured apps'

  const [currentSlide, setCurrentSlide] = useState(0)

  return (
    <main>
      {/* 1 - App Marketplace header */}
      <header className={classes.appMarketHeader}>
        <div className={classes.appMarketHeaderContentsContainer}>
          {/* 1.1 - Header's title & search field */}
          <div className={classes.appMarketHeaderTitleAndSearchField}>
            <h1 className={classes.appMarketHeaderTitle}>
              <>{t('appMarketplace.headerTitlePartOne')} </>
              <>{portalSettings.portalName} </>
              <>{t('appMarketplace.headerTitlePartTwo')}</>
            </h1>

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
          </div>

          {/* 1.2 - Header's image */}
          <div>
            <img className={classes.appMarketHeaderImage} src={marketplace} />
          </div>
        </div>
      </header>

      {/* 2 - App Markeplace's filters & apps */}
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
          <p className={classes.amountOfAppMarketAppsText}>
            <span>
              {filteredAppsList.length > 0
                ? filteredAppsList.length
                : searchTerm.length === 0 &&
                  Object.values(labelFilters).includes(false) &&
                  Object.values(publisherFilters).includes(false)
                ? allAppsList.length
                : '0'}
              <> {t('appMarketplace.amountOfAppsTextPartOne')} </>
            </span>
            <>{t('appMarketplace.amountOfAppsTextPartTwo')}</>
          </p>

          {retrievedAllMarketplaceApps &&
          retrievedAllMarketplaceLabels &&
          retrievedAllMarketplacePublishers ? (
            filteredAppsList.length > 0 ? (
              <>
                <div className={classes.appCatalogContainer}>
                  <AppCatalog appsToDisplay={filteredAppsList} />
                </div>

                <Pagination
                  count={5}
                  disabled
                  shape="rounded"
                  variant="outlined"
                />
              </>
            ) : Object.values(labelFilters).includes(false) &&
              Object.values(publisherFilters).includes(false) &&
              searchTerm.length === 0 ? (
              <>
                <div className={classes.appCatalogContainer}>
                  <AppCatalog appsToDisplay={allAppsList} />
                </div>

                <Pagination
                  count={5}
                  disabled
                  shape="rounded"
                  variant="outlined"
                />
              </>
            ) : (
              <p className={classes.noAppsToDisplay}>
                {t('appMarketplace.noAppsToDisplayText')}
              </p>
            )
          ) : (
            <p className={classes.noAppsToDisplay}>
              {t('appMarketplace.retrievingAppsToDisplayText')}
            </p>
          )}

          {allMarketplaceApps && (
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
          )}
        </div>
      </section>
    </main>
  )
}

export default Marketplace
