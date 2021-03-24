import { makeStyles } from '@material-ui/styles'

export default makeStyles({
  appCatalogEntry: {
    backgroundColor: '#FFFFFF',
    border: '1px solid #BAC0C6',
    borderRadius: '4px',
    height: '175px',
    padding: '20px',
    width: '215px',
  },

  appCatalogEntryAvatar: {
    background:
      '#C8DC8C linear-gradient(270deg, rgba(200, 220, 140, 1) 0%, rgba(25, 165, 140, 1) 100%)',
    fontSize: '15px',
    fontWeight: 300,
    height: '45px',
    marginRight: '12.5px',
    textTransform: 'uppercase',
    width: '45px',
  },

  appCatalogEntryBottomDetails: {
    display: 'block',
    maxWidth: '175px',
    width: '100%',
  },

  appCatalogEntryDescription: {
    color: '#85909A',
    display: '-webkit-box',
    fontSize: '14px',
    fontWeight: 300,
    height: '35px',
    lineHeight: '18px',
    marginBottom: '15px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
  },

  appCatalogEntryImage: {
    borderRadius: '50%',
    fontSize: '20px',
    fontWeight: 300,
    height: '45px',
    marginRight: '12.5px',
    width: '45px',
  },

  appCatalogEntryLabel: {
    backgroundColor: '#EEEEEE',
    borderRadius: '4px',
    color: '#14283C',
    fontSize: '12px',
    fontWeight: 300,
    padding: '0px 7.5px',
    width: 'fit-content',
  },

  appCatalogEntryLink: {
    marginBottom: '25px',
    marginRight: '25px',
    textDecoration: 'none',

    '&:hover': {
      cursor: 'pointer',
      filter: 'drop-shadow(0px 2.5px 2.5px rgba(0, 0, 0, 0.25))',
    },
  },

  appCatalogEntryName: {
    color: '#14283C',
    fontSize: '16px',
    fontWeight: 700,
    marginBottom: '-10px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  appCatalogEntryNameAndOwnerContainer: {
    display: 'block',
    width: '110px',
  },

  appCatalogEntryOwner: {
    color: '#51606E',
    fontSize: '14px',
    fontWeight: 400,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  appCatalogEntryText: {
    padding: '15px 12.5px 15px 0px',
    width: '130px',
  },

  appCatalogEntryTopDetails: {
    display: 'flex',
    marginBottom: '15px',
    maxWidth: '175px',
    width: '100%',
  },

  appCatalogEntryVersion: {
    borderRadius: '4px',
    marginRight: '8px',
    padding: '5px 10px',
  },

  appCatalogEntryVersionAndAccess: {
    color: '#51606E',
    fontSize: '14px',
    fontWeight: 300,
  },
})
