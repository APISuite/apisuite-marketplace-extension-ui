import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  appAvatar: {
    background: theme.palette.gradient.main,
    fontSize: '55px',
    fontWeight: 300,
    height: '150px',
    margin: '0px auto 50px auto',
    textTransform: 'uppercase',
    width: '150px',
  },

  appAlreadySubscribedButton: {
    backgroundColor: theme.palette.primary.main,
    borderColor: theme.palette.primary.main,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: theme.palette.primary.contrastText,
    fontSize: '16px',
    fontWeight: 500,
    opacity: 0.5,
    // Keep this commented for demo purposes - we want to be able to sub and unsub Marketplace apps
    // pointerEvents: 'none',
    textTransform: 'inherit',
    width: '100%',

    '&:active, &:hover, &:link, &:visited': {
      backgroundColor: theme.palette.primary.main,
      borderColor: theme.palette.primary.main,
      borderRadius: theme.palette.dimensions.borderRadius,
      color: theme.palette.primary.contrastText,
    },
  },

  appDescription: {
    color: theme.palette.text.primary,
    fontSize: '20px',
    fontWeight: 200,
    marginBottom: '15px',
  },

  appDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: 'auto',
    maxWidth: '900px',
    padding: '40px 0px 60px 0px',
    width: '100%',
  },

  appImage: {
    borderRadius: '50%',
    height: '150px',
    margin: '0px 25px 42.5px 25px',
    width: '150px',
  },

  appImageGallery: {
    '& .image-gallery-slides': {
      borderRadius: '10px',
    },

    '& .active': {
      border: `4px solid theme.palette.action.focus`,
    },
  },

  appLabel: {
    backgroundColor: theme.palette.grey['100'],
    borderRadius: theme.palette.dimensions.borderRadius,
    color: theme.palette.text.primary,
    fontSize: '12px',
    fontWeight: 300,
    marginBottom: '7.5px',
    marginRight: '7.5px',
    padding: '0px 7.5px',
    width: 'fit-content',
  },

  appLabelsContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '40px',
  },

  appLinksSubSection: {
    height: '120px',
    width: '100%',
  },

  appOverviewDescription: {
    color: theme.palette.text.secondary,
    fontSize: '16px',
    fontWeight: 300,
  },

  appOverviewTitle: {
    color: theme.palette.text.primary,
    fontSize: '24px',
    fontWeight: 500,
    margin: '40px 0px 25px 0px',
  },

  appSubscribeButton: {
    backgroundColor: theme.palette.secondary.main,
    borderColor: theme.palette.secondary.main,
    borderRadius: theme.palette.dimensions.borderRadius,
    color: theme.palette.common.white,
    fontSize: '16px',
    fontWeight: 500,
    textTransform: 'inherit',
    width: '100%',

    '&:active, &:hover, &:link, &:visited': {
      backgroundColor: theme.palette.secondary.main,
      borderColor: theme.palette.secondary.main,
      borderRadius: theme.palette.dimensions.borderRadius,
      color: theme.palette.common.white,
    },
  },

  appTitle: {
    color: theme.palette.text.primary,
    fontSize: '42px',
    fontWeight: 700,
    marginBottom: '20px',
  },

  leftAppDetailsContainer: {
    maxWidth: '200px',
    width: '100%',
  },

  loadingAppDetails: {
    color: theme.palette.text.primary,
    fontSize: '20px',
    fontWeight: 200,
  },

  providedLink: {
    color: `${theme.palette.info.main} !important`,
    display: 'block',
    fontSize: '14px',
    fontWeight: 300,
  },

  rightAppDetailsContainer: {
    maxWidth: '700px',
    paddingLeft: '40px',
    width: '100%',
  },

  subSectionSeparator: {
    border: '1px solid #E3E3E3',
    borderRadius: theme.palette.dimensions.borderRadius,
    margin: '15px 0px 15px 0px',
    width: '100%',
  },

  subSectionText: {
    color: theme.palette.text.secondary,
    fontSize: '14px',
    fontWeight: 300,
  },

  subSectionTitle: {
    color: theme.palette.text.primary,
    fontSize: '16px',
    fontWeight: 500,
  },

  topMostSubSection: {
    height: '250px',
    width: '100%',
  },
}))
