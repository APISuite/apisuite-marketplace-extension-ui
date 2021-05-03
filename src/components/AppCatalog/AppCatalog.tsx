import React from 'react'
import { Avatar, useTranslation } from '@apisuite/fe-base'

import { AppCatalogProps, AppDetails } from './types'
import Link from 'components/Link'
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
      <div className={classes.appCatalogEntry} key={`appCatalogEntry${index}`}>
        <div className={classes.appCatalogEntryTopDetails}>
          {appDetails.appLogo !== '' ? (
            <img
              className={classes.appCatalogEntryImage}
              src={appDetails.appLogo}
            />
          ) : (
            <Avatar className={classes.appCatalogEntryAvatar}>
              {appInitials}
            </Avatar>
          )}

          <div className={classes.appCatalogEntryNameAndOwnerContainer}>
            <p className={classes.appCatalogEntryName}>{appDetails.appName}</p>

            <p className={classes.appCatalogEntryOwner}>
              {appDetails.appPublisher}
            </p>
          </div>
        </div>

        <div className={classes.appCatalogEntryBottomDetails}>
          <p className={classes.appCatalogEntryDescription}>
            {appDetails.appDescription}
          </p>

          <div className={classes.appCatalogEntryLabelsContainer}>
            {appDetails.appLabels.length ? (
              appDetails.appLabels.map((appLabel, index) => {
                return (
                  <p
                    className={classes.appCatalogEntryLabel}
                    key={`appLabel${index}`}
                  >
                    {appLabel}
                  </p>
                )
              })
            ) : (
              <p className={classes.appCatalogEntryLabel}>
                {t('appMarketplace.noLabelsProvidedText')}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  }

  const appCatalogEntries = appsToDisplay.map((appDetails, index) => {
    return (
      <Link
        className={classes.appCatalogEntryLink}
        key={`linkToApp${index}`}
        to={`marketplace/app-details/${appDetails.appID}`}
      >
        {generateAppCatalogEntry(appDetails, index)}
      </Link>
    )
  })

  return <>{appCatalogEntries}</>
}

export default AppCatalog
