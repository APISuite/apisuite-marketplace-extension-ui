import React from 'react'
import {
  Avatar,
  Box,
  Chip,
  Grid,
  Typography,
  useTranslation,
} from '@apisuite/fe-base'

import { AppCatalogProps, AppDetails } from './types'
import Link from '../Link'
import { AppCard } from '../AppCard/AppCard'
import useStyles from './styles'

const AppCatalog: React.FC<AppCatalogProps> = ({ appsToDisplay }) => {
  const classes = useStyles()

  const trans = useTranslation()

  const t = (string: string) => {
    return trans.t(`extensions.marketplace.${string}`)
  }

  const generateAppCatalogEntry = (appDetails: AppDetails, index: number) => {
    const appSplitName = appDetails.appName.split(' ')
    const appInitials = appSplitName[0].slice(0, 2)

    return (
      <AppCard
        cardContent={
          <>
            <div className={classes.appCatalogEntryTopDetails}>
              {appDetails.appLogo !== '' ? (
                <img
                  className={classes.appCatalogEntryImage}
                  src={appDetails.appLogo}
                />
              ) : (
                <Avatar className={classes.appCatalogEntryAvatar}>
                  <Typography variant="body1">{appInitials}</Typography>
                </Avatar>
              )}

              <div className={classes.appCatalogEntryNameAndOwnerContainer}>
                <Typography
                  variant="body1"
                  className={classes.appCatalogEntryName}
                >
                  {appDetails.appName}
                </Typography>

                <Typography
                  variant="subtitle2"
                  className={classes.appCatalogEntryOwner}
                >
                  {appDetails.appPublisher}
                </Typography>
              </div>
            </div>

            <div className={classes.appCatalogEntryBottomDetails}>
              <Typography
                variant="body2"
                className={classes.appCatalogEntryDescription}
              >
                {appDetails.appDescription}
              </Typography>

              <div className={classes.appCatalogEntryLabelsContainer}>
                {appDetails.appLabels.length ? (
                  appDetails.appLabels.map((appLabel, index) => {
                    return (
                      <Box mr={1} key={`appLabel${index}`}>
                        <Chip
                          className={classes.appCatalogEntryLabels}
                          label={`${appLabel}`}
                        />
                      </Box>
                    )
                  })
                ) : (
                  <Box mr={1}>
                    <Chip
                      className={classes.appCatalogEntryLabels}
                      label={`${t('appMarketplace.noLabelsProvidedText')}`}
                    />
                  </Box>
                )}
              </div>
            </div>
          </>
        }
        key={`appCatalogEntry${index}`}
      />
    )
  }

  const appCatalogEntries = appsToDisplay.map((appDetails, index) => {
    return (
      <Grid item key={`linkToApp${index}`} md={4}>
        <Link
          className={classes.appCatalogEntryLink}
          to={`/marketplace/app-details/${appDetails.appID}`}
        >
          {generateAppCatalogEntry(appDetails, index)}
        </Link>
      </Grid>
    )
  })

  return (
    <Grid container spacing={2}>
      {appCatalogEntries}
    </Grid>
  )
}

export default AppCatalog
