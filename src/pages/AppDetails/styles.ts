import { makeStyles } from '@apisuite/fe-base'

export default makeStyles({
  appAvatar: {
    background:
      '#C8DC8C linear-gradient(270deg, rgba(200, 220, 140, 1) 0%, rgba(25, 165, 140, 1) 100%)',
    fontSize: '55px',
    fontWeight: 300,
    height: '150px',
    margin: '0px auto 50px auto',
    textTransform: 'uppercase',
    width: '150px',
  },

  appAlreadySubscribedButton: {
    backgroundColor: '#14283C',
    borderColor: '#14283C',
    borderRadius: '4px',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 500,
    opacity: 0.5,
    // Keep this commented for demo purposes - we want to be able to sub and unsub Marketplace apps
    // pointerEvents: 'none',
    textTransform: 'inherit',
    width: '100%',

    '&:active, &:hover, &:link, &:visited': {
      backgroundColor: '#14283C',
      borderColor: '#14283C',
      borderRadius: '4px',
      color: '#FFFFFF',
    },
  },

  appDescription: {
    color: '#14283C',
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
      border: '4px solid #19B3EE',
    },
  },

  appLabel: {
    backgroundColor: '#EEEEEE',
    borderRadius: '4px',
    color: '#14283C',
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
    color: '#85909A',
    fontSize: '16px',
    fontWeight: 300,
  },

  appOverviewTitle: {
    color: '#14283C',
    fontSize: '24px',
    fontWeight: 500,
    margin: '40px 0px 25px 0px',
  },

  appSubscribeButton: {
    backgroundColor: '#32C896',
    borderColor: '#32C896',
    borderRadius: '4px',
    color: '#FFFFFF',
    fontSize: '16px',
    fontWeight: 500,
    textTransform: 'inherit',
    width: '100%',

    '&:active, &:hover, &:link, &:visited': {
      backgroundColor: '#32C896',
      borderColor: '#32C896',
      borderRadius: '4px',
      color: '#FFFFFF',
    },
  },

  appTitle: {
    color: '#14283C',
    fontSize: '42px',
    fontWeight: 700,
    marginBottom: '20px',
  },

  leftAppDetailsContainer: {
    maxWidth: '200px',
    width: '100%',
  },

  loadingAppDetails: {
    color: '#14283C',
    fontSize: '20px',
    fontWeight: 200,
  },

  providedLink: {
    color: '#19B3EE !important',
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
    borderRadius: '4px',
    margin: '15px 0px 15px 0px',
    width: '100%',
  },

  subSectionText: {
    color: '#85909A',
    fontSize: '14px',
    fontWeight: 300,
  },

  subSectionTitle: {
    color: '#14283C',
    fontSize: '16px',
    fontWeight: 500,
  },

  topMostSubSection: {
    height: '250px',
    width: '100%',
  },
})
