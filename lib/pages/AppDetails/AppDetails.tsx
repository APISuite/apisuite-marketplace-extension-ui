import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/scss/image-gallery.scss'

import { AppDetailsProps } from './types'
import { Avatar, Button, useTranslation } from '@apisuite/fe-base'
import useStyles from './styles'

const AppDetails: React.FC<AppDetailsProps> = ({
  allSubbedMarketplaceApps,
  getAllSubbedMarketplaceAppsAction,
  getAppDetailsAction,
  retrievedSelectedAppDetails,
  selectedAppDetails,
  subscribeToMarketplaceAppAction,
  unsubscribeToMarketplaceAppAction,
  userProfile,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  const t = (string: string) => {
    return trans.t(`extensions.marketplace.${string}`)
  }

  // 1. All subbed Marketplace apps' retrieval

  /* Triggers the retrieval and storage (on the app's Store, under 'marketplace > allSubbedMarketplaceApps')
  of all information we presently have on a user's marketplace app subscriptions. This will come in handy when
  we want to check if the currently selected app is one that the user's already subscribed to. */
  useEffect(() => {
    if (userProfile && userProfile.id) {
      const userID = parseInt(userProfile.id)

      getAllSubbedMarketplaceAppsAction(userID)
    }
  }, [userProfile])

  // 2. Subscription logic for the currently selected Marketplace app

  // Retrieves the app's ID from the browser window's URL
  const { appID } = useParams<any>()

  /* Triggers the retrieval and storage (on the app's Store, under 'marketplace > selectedAppDetails')
  of all information we presently have on the currently selected marketplace app. */
  useEffect(() => {
    if (appID !== '') getAppDetailsAction(appID)
  }, [appID])

  const [isUserSubbedToApp, setIsUserSubbedToApp] = useState(false)

  /* The following effect code will check if the currently selected app is one that
  the user's already subscribed to. */
  useEffect(() => {
    const currentAppIsInSubs = allSubbedMarketplaceApps.find(
      (marketplaceApp) => {
        return marketplaceApp.id.toString() === appID
      }
    )

    if (currentAppIsInSubs) {
      setIsUserSubbedToApp(true)
    }
  }, [allSubbedMarketplaceApps])

  const handleMarketplaceAppSubscription = () => {
    const userID = parseInt(userProfile.id)
    const selectedAppID = selectedAppDetails.id

    if (isUserSubbedToApp) {
      unsubscribeToMarketplaceAppAction(userID, selectedAppID)
      setIsUserSubbedToApp(false)
    } else {
      subscribeToMarketplaceAppAction(userID, selectedAppID)
      setIsUserSubbedToApp(true)
    }
  }

  // 3. Currently selected Marketplace app's details logic

  const [appNameInitials, setAppNameInitials] = useState('...')

  useEffect(() => {
    const appNameInitialsArray = selectedAppDetails.name.split(' ')
    const appNameInitials =
      appNameInitialsArray.length >= 2
        ? `${appNameInitialsArray[0][0]}${appNameInitialsArray[1][0]}`
        : `${appNameInitialsArray[0][0]}${appNameInitialsArray[0][1]}`

    setAppNameInitials(appNameInitials)
  }, [selectedAppDetails])

  const isURLEmpty = (providedURL: string) => {
    return providedURL === null || providedURL === ''
  }

  // All images - as well as all thumbnails - must be of the same size
  const imagesArray = selectedAppDetails
    ? selectedAppDetails?.images?.map((image) => {
        return {
          original: image,
          thumbnail: image,
        }
      })
    : []

  console.log('imagesArray', imagesArray)

  return (
    <main>
      <section className={classes.appDetailsContainer}>
        {retrievedSelectedAppDetails ? (
          <>
            <section className={classes.leftAppDetailsContainer}>
              <div className={classes.topMostSubSection}>
                {selectedAppDetails && selectedAppDetails.logo !== '' ? (
                  <img
                    className={classes.appImage}
                    src={selectedAppDetails.logo}
                  />
                ) : (
                  <Avatar className={classes.appAvatar}>
                    {appNameInitials ? appNameInitials : '...'}
                  </Avatar>
                )}

                <Button
                  className={
                    isUserSubbedToApp
                      ? classes.appAlreadySubscribedButton
                      : classes.appSubscribeButton
                  }
                  onClick={handleMarketplaceAppSubscription}
                >
                  {isUserSubbedToApp
                    ? t('appMarketplace.appDetails.appAlreadySubscribedButton')
                    : t('appMarketplace.appDetails.appSubscribeButton')}
                </Button>
              </div>

              <hr className={classes.subSectionSeparator} />

              <div>
                <p className={classes.subSectionTitle}>
                  {t('appMarketplace.appDetails.subSectionTitleOne')}
                </p>

                {selectedAppDetails &&
                  !isURLEmpty(selectedAppDetails.websiteUrl) && (
                    <a
                      className={classes.providedLink}
                      href={selectedAppDetails.websiteUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {t('appMarketplace.appDetails.appLinks.websiteURL')}
                    </a>
                  )}

                {selectedAppDetails && !isURLEmpty(selectedAppDetails.tosUrl) && (
                  <a
                    className={classes.providedLink}
                    href={selectedAppDetails.tosUrl}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    {t('appMarketplace.appDetails.appLinks.tosURL')}
                  </a>
                )}

                {selectedAppDetails &&
                  !isURLEmpty(selectedAppDetails.privacyUrl) && (
                    <a
                      className={classes.providedLink}
                      href={selectedAppDetails.privacyUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {t('appMarketplace.appDetails.appLinks.privacyPolicyURL')}
                    </a>
                  )}

                {selectedAppDetails &&
                  !isURLEmpty(selectedAppDetails.youtubeUrl) && (
                    <a
                      className={classes.providedLink}
                      href={selectedAppDetails.youtubeUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {t('appMarketplace.appDetails.appLinks.youTubeURL')}
                    </a>
                  )}

                {selectedAppDetails &&
                  !isURLEmpty(selectedAppDetails.supportUrl) && (
                    <a
                      className={classes.providedLink}
                      href={selectedAppDetails.supportUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {t('appMarketplace.appDetails.appLinks.supportURL')}
                    </a>
                  )}

                {selectedAppDetails &&
                  isURLEmpty(selectedAppDetails.privacyUrl) &&
                  isURLEmpty(selectedAppDetails.supportUrl) &&
                  isURLEmpty(selectedAppDetails.tosUrl) &&
                  isURLEmpty(selectedAppDetails.websiteUrl) &&
                  isURLEmpty(selectedAppDetails.youtubeUrl) && (
                    <p className={classes.subSectionText}>
                      {t('appMarketplace.appDetails.appLinks.noAppLinks')}
                    </p>
                  )}
              </div>

              <hr className={classes.subSectionSeparator} />

              <div>
                <p className={classes.subSectionTitle}>
                  {t('appMarketplace.appDetails.subSectionTitleTwo')}
                </p>

                <p className={classes.subSectionText}>
                  {selectedAppDetails && selectedAppDetails.organization.name
                    ? selectedAppDetails.organization.name
                    : '...'}
                </p>
              </div>

              <hr className={classes.subSectionSeparator} />

              <div>
                <p className={classes.subSectionTitle}>
                  {t('appMarketplace.appDetails.subSectionTitleThree')}
                </p>

                {selectedAppDetails &&
                  !isURLEmpty(selectedAppDetails.organization.tosUrl) && (
                    <a
                      className={classes.providedLink}
                      href={selectedAppDetails.organization.tosUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {t('appMarketplace.appDetails.publisherLinks.tosURL')}
                    </a>
                  )}

                {selectedAppDetails &&
                  !isURLEmpty(selectedAppDetails.organization.privacyUrl) && (
                    <a
                      className={classes.providedLink}
                      href={selectedAppDetails.organization.privacyUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {t(
                        'appMarketplace.appDetails.publisherLinks.privacyPolicyURL'
                      )}
                    </a>
                  )}

                {selectedAppDetails &&
                  !isURLEmpty(selectedAppDetails.organization.supportUrl) && (
                    <a
                      className={classes.providedLink}
                      href={selectedAppDetails.organization.supportUrl}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      {t('appMarketplace.appDetails.publisherLinks.supportURL')}
                    </a>
                  )}

                {selectedAppDetails &&
                  isURLEmpty(selectedAppDetails.organization.privacyUrl) &&
                  isURLEmpty(selectedAppDetails.organization.supportUrl) &&
                  isURLEmpty(selectedAppDetails.organization.tosUrl) && (
                    <p className={classes.subSectionText}>
                      {t(
                        'appMarketplace.appDetails.publisherLinks.noPublisherLinks'
                      )}
                    </p>
                  )}
              </div>
            </section>

            <section className={classes.rightAppDetailsContainer}>
              <h1 className={classes.appTitle}>
                {selectedAppDetails && selectedAppDetails.name
                  ? selectedAppDetails.name
                  : '...'}
              </h1>

              <p className={classes.appDescription}>
                {selectedAppDetails && selectedAppDetails.shortDescription
                  ? selectedAppDetails.shortDescription
                  : t('appMarketplace.appDetails.noShortDescription')}
              </p>

              <div className={classes.appLabelsContainer}>
                {selectedAppDetails && selectedAppDetails.labels.length ? (
                  selectedAppDetails.labels.map((label, index) => {
                    return (
                      <p className={classes.appLabel} key={`appLabel${index}`}>
                        {label}
                      </p>
                    )
                  })
                ) : (
                  <p className={classes.appLabel}>
                    {t('appMarketplace.appDetails.noLabels')}
                  </p>
                )}
              </div>

              {imagesArray.length !== 0 && (
                <ImageGallery
                  additionalClass={classes.appImageGallery}
                  items={imagesArray}
                  showNav={false}
                  showPlayButton={false}
                />
              )}

              <h1 className={classes.appOverviewTitle}>
                {t('appMarketplace.appDetails.partOfAppOverviewTitle')}
              </h1>

              <p className={classes.appOverviewDescription}>
                {selectedAppDetails && selectedAppDetails.description
                  ? selectedAppDetails.description
                  : t('appMarketplace.appDetails.noAppOverview')}
              </p>
            </section>
          </>
        ) : (
          <p className={classes.loadingAppDetails}>
            {t('appMarketplace.appDetails.loadingAppDetails')}
          </p>
        )}
      </section>
    </main>
  )
}

export default AppDetails
