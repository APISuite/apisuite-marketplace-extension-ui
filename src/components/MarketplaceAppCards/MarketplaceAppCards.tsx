import * as React from 'react'

import Link from 'components/Link'

import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'

import HeightRoundedIcon from '@material-ui/icons/HeightRounded'

import { AppDetails } from 'pages/Marketplace/types'

// import { MarketplaceAppCardsProps } from './types'

import useStyles from './styles'

const MarketplaceAppCards: React.FC = () => {
  const classes = useStyles()

  // TODO: Use this until it is possible to retrieve all subscribed marketplace apps from the BE
  const mockSubscribedMarketplaceApps = [
    {
      createdAt: '2021-02-24T08:38:36.088Z',
      description: 'Diamonds, they are all one needs.',
      id: 1,
      labels: [],
      logo:
        'https://upload.wikimedia.org/wikipedia/commons/3/36/Diamond.jpg',
      name: 'Diamond App',
      organization: {
        id: '1',
        name: 'ACME',
        privacyUrl: null,
        supportUrl: null,
        tosUrl: null,
      },
      orgId: 1,
      privacyUrl: '',
      shortDescription: 'Diamonds are forever, you see',
      supportUrl: '',
      tosUrl: '',
      updatedAt: '2021-03-30T16:52:29.283Z',
      websiteUrl: '',
      youtubeUrl: '',
    },
  ]

  let allMarketplaceAppNames: string[] = []

  /* Generates an 'app card' for every marketplace app a user has subscribed to. */
  const marketplaceAppCardGenerator = (
    mockSubscribedMarketplaceApps: AppDetails[]
  ) => {
    if (mockSubscribedMarketplaceApps.length === 0) {
      return (
        <p className={classes.loadingMarketplaceApplicationCards}>
          You have not subscribed to any marketplace apps yet.
        </p>
      )
    }

    const allMarketplaceAppCardsArray = mockSubscribedMarketplaceApps.map(
      (marketplaceApp, index) => {
        const appNameInitialsArray = marketplaceApp.name.split(' ')
        const appNameInitials =
          appNameInitialsArray.length >= 2
            ? `${appNameInitialsArray[0][0]}${appNameInitialsArray[1][0]}`
            : `${appNameInitialsArray[0][0]}${appNameInitialsArray[0][1]}`

        allMarketplaceAppNames = [
          ...allMarketplaceAppNames,
          marketplaceApp.name,
        ]

        return (
          <Link
            className={classes.marketplaceAppCardLink}
            key={`marketplaceAppCardLink${index}`}
            to={`/marketplace/app-details/${marketplaceApp.id}`}
          >
            <div className={classes.marketplaceAppCard}>
              <div className={classes.marketplaceAppCardTopSection}>
                <HeightRoundedIcon
                  className={
                    marketplaceApp.logo !== ''
                      ? classes.marketplaceAppCardWithImageIcon
                      : classes.marketplaceAppCardWithAvatarIcon
                  }
                />

                {marketplaceApp.logo !== '' ? (
                  <img
                    className={classes.marketplaceAppCardImage}
                    src={marketplaceApp.logo}
                  />
                ) : (
                  <Avatar className={classes.marketplaceAppCardAvatar}>
                    {appNameInitials}
                  </Avatar>
                )}
              </div>

              <div className={classes.marketplaceAppCardBottomSection}>
                <p className={classes.marketplaceAppCardTitle}>
                  {marketplaceApp.name}
                </p>

                <p className={classes.marketplaceAppCardDescription}>
                  {marketplaceApp.shortDescription
                    ? marketplaceApp.shortDescription
                    : marketplaceApp.description
                    ? marketplaceApp.description
                    : 'No description available'}
                </p>
              </div>
            </div>
          </Link>
        )
      }
    )

    return allMarketplaceAppCardsArray
  }

  return (
    <div>
      <p className={classes.applicationsContainerTitle}>
        Marketplace applications
      </p>

      <Button
        className={classes.browseMarketplaceAppsButton}
        href="/marketplace"
      >
        Browse the app marketplace
      </Button>

      {marketplaceAppCardGenerator(mockSubscribedMarketplaceApps)}
    </div>
  )
}

export default MarketplaceAppCards
