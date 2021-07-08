import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import clsx from 'clsx'

import {
  Avatar,
  Box,
  Container,
  Grid,
  Paper,
  Typography,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'
import { Pagination } from '@material-ui/lab'
import AppCatalog from '../../components/AppCatalog'
import Link from '../../components/Link'
import useStyles from './styles'
import publisherDetailsSelector from './selector'
import {
  getFilteredMarketplaceAppsAction,
  getPublisherDetailsAction,
} from '../Marketplace/ducks'
import { PUBLISHER_APPS_PER_PAGE } from '../../constants/globals'

const PublisherDetails: React.FC = () => {
  const classes = useStyles()

  const { palette } = useTheme()

  const trans = useTranslation()

  const t = (string: string, ...args) => {
    return trans.t(`extensions.marketplace.${string}`, ...args)
  }

  const {
    allPublisherApps,
    pagination,
    publisherDetails,
    retrievedAllPublisherApps,
    retrievedPublisherDetails,
    retrievedPublisherDetailsError,
  } = useSelector(publisherDetailsSelector)

  const dispatch = useDispatch()

  // Retrieves the publisher's ID from the browser window's URL
  const { publisherID } = useParams<any>()

  useEffect(() => {
    /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
    of all information we presently have on a particular publisher. */
    dispatch(getPublisherDetailsAction(publisherID))
  }, [publisherID])

  const [publisherNameInitials, setPublisherNameInitials] = useState('...')

  useEffect(() => {
    const publisherNameInitialsArray = publisherDetails.name.split(' ')
    const publisherNameInitials =
      publisherNameInitialsArray.length >= 2
        ? `${publisherNameInitialsArray[0][0]}${publisherNameInitialsArray[1][0]}`
        : `${publisherNameInitialsArray[0][0]}${publisherNameInitialsArray[0][1]}`

    setPublisherNameInitials(publisherNameInitials)
  }, [publisherDetails])

  const generatePublisherLinks = (providedPublisherLinks) => {
    const publisherLinks = []

    for (const link in providedPublisherLinks) {
      if (providedPublisherLinks[link]) {
        publisherLinks.push(
          <Grid item key={link}>
            <Link to={providedPublisherLinks[link]}>
              <Typography
                style={{
                  color: palette.text.secondary,
                  textDecoration: 'underline',
                }}
                variant="body1"
              >
                {t(`publisherDetails.${link}`)}
              </Typography>
            </Link>
          </Grid>
        )
      }
    }

    return (
      <Grid
        alignItems="flex-start"
        container
        direction="row"
        justify="flex-start"
        spacing={3}
      >
        {...publisherLinks}
      </Grid>
    )
  }

  // Pagination logic
  const [currentPage, setCurrentPage] = useState(1)

  const handleChange = (event, value) => {
    setCurrentPage(value)
  }

  const generatePagination = () => {
    const amountOfPages = Math.ceil(
      pagination.rowCount / PUBLISHER_APPS_PER_PAGE
    )

    return (
      <Pagination
        color="primary"
        count={amountOfPages || 1}
        onChange={handleChange}
        page={currentPage}
        shape="rounded"
      />
    )
  }

  useEffect(() => {
    /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
    of all apps a particular publisher has made available on the Marketplace.
    
    If the user changes pages by way of the pagination, we need to do this again. */
    if (retrievedPublisherDetails) {
      dispatch(
        getFilteredMarketplaceAppsAction(
          {
            label: [],
            order: 'desc',
            org_id: [publisherID],
            page: 1,
            pageSize: 12,
            search: '',
            sort_by: 'app',
          },
          'publisher'
        )
      )
    }
  }, [currentPage, retrievedPublisherDetails])

  const generatePublisherDetails = () => {
    if (retrievedPublisherDetails && !retrievedPublisherDetailsError) {
      return (
        <>
          {/* Publisher card */}
          <Grid
            alignItems="center"
            className={classes.publisherCard}
            component={Paper}
            container
            direction="row"
            justify="flex-start"
          >
            <Grid item>
              <Avatar
                className={clsx(
                  classes.publisherAvatar,
                  { [classes.avatarWithImage]: publisherDetails.logo },
                  { [classes.avatarWithoutImage]: !publisherDetails.logo }
                )}
                src={publisherDetails.logo}
              >
                <Typography
                  style={{ color: palette.common.white }}
                  variant="h2"
                >
                  {publisherNameInitials}
                </Typography>
              </Avatar>
            </Grid>

            <Grid item>
              <Box mb={1.25}>
                <Typography
                  style={{ color: palette.text.primary }}
                  variant="h1"
                >
                  {publisherDetails.name}
                </Typography>
              </Box>

              <Box mb={3}>
                <Typography
                  style={{ color: palette.text.secondary }}
                  variant="body1"
                >
                  {publisherDetails.description}
                </Typography>
              </Box>

              {generatePublisherLinks({
                websiteUrl: publisherDetails.websiteUrl,
                supportUrl: publisherDetails.supportUrl,
                tosUrl: publisherDetails.tosUrl,
                privacyUrl: publisherDetails.privacyUrl,
                youtubeUrl: publisherDetails.youtubeUrl,
              })}
            </Grid>
          </Grid>

          {/* Publisher apps */}
          <Grid
            alignItems="flex-start"
            container
            direction="row"
            justify="flex-start"
          >
            <Grid item>
              <Box mb={4} mt={5}>
                <Typography
                  style={{ color: palette.text.primary }}
                  variant="h6"
                >
                  {t('publisherDetails.appsByPublisherTitle', {
                    publisher:
                      publisherDetails && publisherDetails.name
                        ? publisherDetails.name
                        : '...',
                  })}
                </Typography>
              </Box>

              {retrievedAllPublisherApps && (
                <>
                  <Box mb={3}>
                    <AppCatalog
                      appsToDisplay={allPublisherApps}
                      catalogMode="publisher"
                    />
                  </Box>

                  <Box mb={10}>{generatePagination()}</Box>
                </>
              )}
            </Grid>
          </Grid>
        </>
      )
    } else {
      return (
        <Box
          alignItems="center"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          py={10}
        >
          <Typography style={{ color: palette.text.primary }} variant="h6">
            {t('publisherDetails.errorMessage')}
          </Typography>
        </Box>
      )
    }
  }

  return (
    <Container className={classes.pageContainer}>
      {generatePublisherDetails()}
    </Container>
  )
}

export default PublisherDetails
