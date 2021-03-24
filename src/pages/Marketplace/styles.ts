import { makeStyles } from '@material-ui/styles'

import appCarouselBackground from 'assets/appCarouselBackground.svg'
import spaceBackground from 'assets/space-background.svg'

export default makeStyles({
  amountOfAppMarketAppsText: {
    color: '#4E616F',
    fontSize: '16px',
    fontWeight: 400,
    marginBottom: '25px',

    '& > :first-child': {
      color: '#14283C',
      fontWeight: 700,
    },
  },

  appCatalogContainer: {
    alignItems: 'flex-start',
    display: 'flex',
    flexFlow: 'wrap',
    marginBottom: '25px',
  },

  appMarketApps: {
    maxWidth: '975px',
    padding: '60px 45px',
    width: '100%',
  },

  appMarketFilters: {
    borderRight: '1px solid #E3E3E3',
    maxWidth: '250px',
    padding: '60px 0px',
    width: '100%',
  },

  appMarketFiltersAndAppsSection: {
    display: 'flex',
    margin: '0px auto',
    maxWidth: '1200px',
    minHeight: '630px',
    padding: '0px 60px',
    width: '100%',
  },

  appMarketHeader: {
    // First color is a fallback one - do not remove!
    background:
      '#7DD291 linear-gradient(270deg, rgba(125, 210, 145, 1) 0%, rgba(0, 125, 125, 1) 100%)',
    backgroundImage: 'url(' + spaceBackground + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    borderBottom: '4px solid rgba(20, 40, 60, 0.1)',
    height: '335px',
    width: '100%',
  },

  appMarketHeaderContentsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0px auto',
    maxWidth: '1200px',
    padding: '70px 60px 0px 60px',
    width: '100%',
  },

  appMarketHeaderImage: {
    maxWidth: '330px',
    transform: 'translate(-25px, -10px)',
    width: '100%',
  },

  appMarketHeaderSearchField: {
    maxWidth: '425px',
    width: '100%',

    // The input field itself
    '& input': {
      color: '#BAC0C6',
      fontSize: '16px',
      fontWeight: 400,
      height: '10px',
    },

    // The input field's SVG icon
    '& svg': {
      color: '#BAC0C6',
    },
  },

  appMarketHeaderTitle: {
    color: '#FFFFFF',
    fontSize: '42px',
    fontWeight: 700,
    marginBottom: '25px',
  },

  appMarketHeaderTitleAndSearchField: {
    maxWidth: '425px',
    width: '100%',
  },

  featuredAppCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: '4px',
    boxShadow: '1px 5px 5px 0px rgba(0, 0, 0, 0.15)',
    cursor: 'pointer',
    display: 'flex',
    height: '60px',
    justifyContent: 'center',
    margin: '0px 10px',
    width: '165px',
  },

  featuredAppCardInfo: {
    textAlign: 'left',
    margin: 'auto 7.5px',

    '& > :first-child': {
      color: '#14283C',
      fontSize: '14px',
      fontWeight: 700,
      marginBottom: '-10px',
    },

    '& > :last-child': {
      color: '#51606E',
      fontSize: '12px',
      fontWeight: 400,
    },
  },

  featuredAppCardLogo: {
    margin: 'auto 0px',
    fontSize: '35px',
    color: '#14283C',
  },

  featuredAppCardsSlider: {
    display: 'flex',
    justifyContent: 'center',
  },

  featuredAppsInnerContainer: {
    margin: 'auto',
    padding: '25px 0px',
    textAlign: 'center',
    width: '100%',
  },

  featuredAppsOuterContainer: {
    background: 'rgba(0, 125, 125, 1)',
    backgroundImage: 'url(' + appCarouselBackground + ')',
    backgroundSize: 'cover',
    borderRadius: '4px',
    display: 'flex',
    height: '230px',
    justifyContent: 'space-between',
    marginTop: '50px',
    maxWidth: '720px',
    width: '100%',
  },

  featuredAppsSubtitle: {
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 300,
    marginBottom: '25px',
  },

  featuredAppsTitle: {
    color: '#FFFFFF',
    fontSize: '22px',
    fontWeight: 500,
    marginBottom: '10px',
  },

  filterAccordionContainer: {
    backgroundColor: 'transparent',
    boxShadow: 'none',

    '&::before': {
      content: 'none',
    },
  },

  filterAccordionIcon: {
    color: '#51606E',
  },

  filterAccordionTitle: {
    color: '#51606E',
    fontSize: '16px',
    fontWeight: 400,
  },

  filterSeparator: {
    border: '1px solid #E3E3E3',
    borderRadius: '4px',
    margin: '25px 0px',
    maxWidth: '175px',
    width: '100%',
  },

  filterTitleContainer: {
    alignItems: 'center',
    display: 'flex',
    marginBottom: '10px',
  },

  filterTitleIcon: {
    color: '#14283C',
    marginRight: '7.5px',
  },

  filterTitleText: {
    color: '#14283C',
    fontSize: '18px',
    fontWeight: 500,
  },

  invisibleFeaturedAppCardsSliderButton: {
    cursor: 'auto',
    margin: 'auto 0px',

    '& > svg': {
      color: 'transparent',
      fontSize: '35px',
      verticalAlign: 'middle',
    },
  },

  noAppsToDisplay: {
    color: '#4E616F',
    fontSize: '16px',
    fontWeight: 200,
  },

  noFiltersAvailable: {
    color: '#14283C',
    fontSize: '12px',
    fontWeight: 400,
  },

  notSelectedFilter: {
    fontSize: '16px',
    fontWeight: 400,
    marginBottom: '-5px',

    '& > :first-child': {
      color: '#14283C',
    },

    '& > :last-child': {
      color: '#14283C',
    },
  },

  selectedFilter: {
    fontSize: '16px',
    fontWeight: 400,
    marginBottom: '-5px',

    '& > :first-child': {
      color: '#19B3EE',
    },

    '& > :last-child': {
      color: '#19B3EE',
      fontWeight: 500,
    },
  },

  visibleFeaturedAppCardsSliderButton: {
    cursor: 'pointer',
    margin: 'auto 0px',

    '& > svg': {
      color: '#FFFFFF',
      fontSize: '35px',
      verticalAlign: 'middle',
    },
  },
})
