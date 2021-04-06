import * as React from 'react'

import { useParams } from 'react-router'

import ImageGallery from 'react-image-gallery'

import { useTranslation } from 'translations'

import { Avatar, Button } from '@material-ui/core'

import { AppDetailsProps } from './types'

import useStyles from './styles'

import 'react-image-gallery/styles/scss/image-gallery.scss'

const AppDetails: React.FC<AppDetailsProps> = ({
  getAppDetailsAction,
  retrievedSelectedAppDetails,
  selectedAppDetails,
}) => {
  const classes = useStyles()

  const [t] = useTranslation()

  // Retrieves the app's ID from the browser window's URL
  const { appID } = useParams()

  React.useEffect(() => {
    /* Triggers the retrieval and storage (under the 'marketplace -> selectedAppDetails'
    section of the app's Store) of all information we have on a particular public app. */
    if (appID !== '') getAppDetailsAction(appID)
  }, [appID])

  const [appNameInitials, setAppNameInitials] = React.useState('...')

  React.useEffect(() => {
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
  const imagesArray = [
    {
      original: 'https://picsum.photos/id/1018/1000/600/',
      thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1015/1000/600/',
      thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
      original: 'https://picsum.photos/id/1019/1000/600/',
      thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
  ]

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

                <Button className={classes.appSubscribeButton}>
                  {t('appMarketplace.appDetails.appSubscribeButton')}
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

                {/* Change this once there's an org to show */}
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
                      target="_blank"
                      rel="noopener noreferrer"
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
                      target="_blank"
                      rel="noopener noreferrer"
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
                {
                  // TODO: Go through each label string, and generate a beautiful label
                  selectedAppDetails && selectedAppDetails.labels.length ? (
                    selectedAppDetails.labels.map((label, index) => {
                      return (
                        <p
                          className={classes.appLabel}
                          key={`appLabel${index}`}
                        >
                          {label}
                        </p>
                      )
                    })
                  ) : (
                    <p className={classes.appLabel}>
                      {t('appMarketplace.appDetails.noLabels')}
                    </p>
                  )
                }
              </div>

              {/* TODO: Add something that loads this AFTER all details are in */}
              <ImageGallery
                additionalClass={classes.appImageGallery}
                items={imagesArray}
                showNav={false}
                showPlayButton={false}
              />

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
