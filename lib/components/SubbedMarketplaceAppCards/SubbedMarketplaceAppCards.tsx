import React, { useEffect, useState } from 'react'
import {
  Avatar,
  Box,
  Grid,
  Typography,
  useTranslation,
  useTheme,
} from '@apisuite/fe-base'

import { BASE_URI } from '../../helpers/constants'
import { SubbedMarketplaceApp } from '../../pages/Marketplace/types'
import { SubbedMarketplaceAppCardsProps } from './types'
import Link from '../Link'
import { AppCard } from '../AppCard/AppCard'
import useStyles from './styles'

const SubbedMarketplaceAppCards: React.FC<SubbedMarketplaceAppCardsProps> = ({
  allSubbedMarketplaceApps,
  getAllSubbedMarketplaceAppsAction,
  retrievedAllSubbedMarketplaceApps,
  userProfile,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  const { palette } = useTheme()

  const t = (string: string) => {
    return trans.t(`extensions.marketplace.${string}`)
  }

  const [isLoading, setLoading] = useState(true)

  useEffect(() => {
    /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
    of all information we presently have on some user's marketplace app subscriptions. */
    if (userProfile) {
      const userID = parseInt(userProfile.id)

      getAllSubbedMarketplaceAppsAction(userID)
    }
  }, [userProfile])

  useEffect(() => {
    setLoading(!retrievedAllSubbedMarketplaceApps)
  }, [retrievedAllSubbedMarketplaceApps])

  const stringChecker = (providedString: string) => {
    return providedString.length ? providedString : false
  }

  let allMarketplaceAppNames: string[] = []

  /* Generates an 'app card' for every marketplace app a user has subscribed to. */
  const subbedMarketplaceAppCardGenerator = (
    subbedMarketplaceApps: SubbedMarketplaceApp[]
  ) => {
    if (isLoading) {
      return (
        <Box py={5}>
          <Typography
            variant="body1"
            display="block"
            gutterBottom
            style={{ color: palette.text.secondary }}
          >
            {t('appListing.retrievingMarketplaceAppSubscriptions')}
          </Typography>
        </Box>
      )
    }

    if (subbedMarketplaceApps.length === 0) {
      return (
        <Box py={5}>
          <Typography
            variant="body1"
            display="block"
            gutterBottom
            style={{ color: palette.text.secondary }}
          >
            {t('appListing.noMarketplaceAppSubscriptions')}
          </Typography>
        </Box>
      )
    }

    const allSubbedMarketplaceAppCardsArray = subbedMarketplaceApps.map(
      (subbedMarketplaceApp, index) => {
        const appNameInitialsArray = subbedMarketplaceApp.name.split(' ')
        const appNameInitials =
          appNameInitialsArray.length >= 2
            ? `${appNameInitialsArray[0][0]}${appNameInitialsArray[1][0]}`
            : `${appNameInitialsArray[0][0]}${appNameInitialsArray[0][1]}`

        allMarketplaceAppNames = [
          ...allMarketplaceAppNames,
          subbedMarketplaceApp.name,
        ]

        return (
          <Grid item key={`marketplaceAppCardLink${index}`} xs={4}>
            <Link
              className={classes.marketplaceAppCardLink}
              to={`${BASE_URI}/app-details/${subbedMarketplaceApp.id}`}
            >
              <AppCard
                media={
                  <Box textAlign="center">
                    {subbedMarketplaceApp.logo !== '' ? (
                      <Avatar
                        className={classes.marketplaceAppCardImage}
                        src={subbedMarketplaceApp.logo}
                      />
                    ) : (
                      <Avatar className={classes.marketplaceAppCardAvatar}>
                        {appNameInitials}
                      </Avatar>
                    )}
                  </Box>
                }
                cardContent={
                  <>
                    <Typography
                      className={classes.marketplaceAppCardTitle}
                      variant="h4"
                      display="block"
                      gutterBottom
                    >
                      {subbedMarketplaceApp.name}
                    </Typography>

                    <Typography
                      variant="body1"
                      className={classes.marketplaceAppCardSummary}
                    >
                      {stringChecker(subbedMarketplaceApp.summary) ||
                        t('appListing.noAppSummaryProvided')}
                    </Typography>
                  </>
                }
                contentStyle={classes.marketplaceAppCardBottomSection}
                icon="open_in_full"
              />
            </Link>
          </Grid>
        )
      }
    )

    return allSubbedMarketplaceAppCardsArray
  }

  return (
    <div>
      <Box pb={5} pt={3}>
        <Typography
          variant="h2"
          display="block"
          gutterBottom
          style={{ color: palette.text.primary }}
        >
          {t('appListing.marketplaceAppsSectionTitle')}
        </Typography>
      </Box>

      <Typography variant="body1">
        <Link className={classes.browseMarketplaceAppsButton} to={BASE_URI}>
          {t('appListing.browseMarketplaceApps')}
        </Link>
      </Typography>

      <Box mt={5}>
        <Grid container spacing={3}>
          {subbedMarketplaceAppCardGenerator(allSubbedMarketplaceApps)}
        </Grid>
      </Box>
    </div>
  )
}

export default SubbedMarketplaceAppCards
