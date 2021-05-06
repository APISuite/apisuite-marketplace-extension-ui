import React, { useEffect } from 'react'
import { Avatar, Button, useTranslation } from '@apisuite/fe-base'
import HeightRoundedIcon from '@material-ui/icons/HeightRounded'

import { BASE_URI } from '../../helpers/constants'
import { SubbedMarketplaceApp } from '../../pages/Marketplace/types'
import { SubbedMarketplaceAppCardsProps } from './types'
import Link from '../Link'
import useStyles from './styles'

const SubbedMarketplaceAppCards: React.FC<SubbedMarketplaceAppCardsProps> = ({
  allSubbedMarketplaceApps,
  getAllSubbedMarketplaceAppsAction,
  retrievedAllSubbedMarketplaceApps,
  userProfile,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  function t(str: string) {
    return trans.t(`extensions.Marketplace.${str}`)
  }

  useEffect(() => {
    /* Triggers the retrieval and storage (under the 'marketplace' section of our app's Store)
    of all information we presently have on some user's marketplace app subscriptions. */
    if (userProfile) {
      const userID = parseInt(userProfile.id)

      getAllSubbedMarketplaceAppsAction(userID)
    }
  }, [userProfile])

  const stringChecker = (providedString: string) => {
    return providedString.length ? providedString : false
  }

  let allMarketplaceAppNames: string[] = []

  /* Generates an 'app card' for every marketplace app a user has subscribed to. */
  const subbedMarketplaceAppCardGenerator = (
    subbedMarketplaceApps: SubbedMarketplaceApp[]
  ) => {
    if (!retrievedAllSubbedMarketplaceApps) {
      return (
        <p className={classes.loadingMarketplaceApplicationCards}>
          Retrieving all subscribed Marketplace apps...
        </p>
      )
    }

    if (subbedMarketplaceApps.length === 0) {
      return (
        <p className={classes.loadingMarketplaceApplicationCards}>
          {t('appListing.noMarketplaceAppSubscriptions')}
        </p>
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
          <Link
            className={classes.marketplaceAppCardLink}
            key={`marketplaceAppCardLink${index}`}
            to={`${BASE_URI}/app-details/${subbedMarketplaceApp.id}`}
          >
            <div className={classes.marketplaceAppCard}>
              <div className={classes.marketplaceAppCardTopSection}>
                <HeightRoundedIcon
                  className={
                    subbedMarketplaceApp.logo !== ''
                      ? classes.marketplaceAppCardWithImageIcon
                      : classes.marketplaceAppCardWithAvatarIcon
                  }
                />

                {subbedMarketplaceApp.logo !== '' ? (
                  <img
                    className={classes.marketplaceAppCardImage}
                    src={subbedMarketplaceApp.logo}
                  />
                ) : (
                  <Avatar className={classes.marketplaceAppCardAvatar}>
                    {appNameInitials}
                  </Avatar>
                )}
              </div>

              <div className={classes.marketplaceAppCardBottomSection}>
                <p className={classes.marketplaceAppCardTitle}>
                  {subbedMarketplaceApp.name}
                </p>

                <p className={classes.marketplaceAppCardDescription}>
                  {
                    //stringChecker(subbedMarketplaceApp.shortDescription) ||
                    stringChecker(subbedMarketplaceApp.description) ||
                      t('appListing.noAppDescriptionProvided')
                  }
                </p>
              </div>
            </div>
          </Link>
        )
      }
    )

    return allSubbedMarketplaceAppCardsArray
  }

  return (
    <div>
      <p className={classes.applicationsContainerTitle}>
        {t('appListing.marketplaceAppsSectionTitle')}
      </p>

      <Button className={classes.browseMarketplaceAppsButton} href={BASE_URI}>
        {t('appListing.browseMarketplaceApps')}
      </Button>

      <div className={classes.allSubbedMarketplaceAppsContainer}>
        {subbedMarketplaceAppCardGenerator(allSubbedMarketplaceApps)}
      </div>
    </div>
  )
}

export default SubbedMarketplaceAppCards
