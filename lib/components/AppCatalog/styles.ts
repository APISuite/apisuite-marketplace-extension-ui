import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  appCatalogEntry: {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey['300']}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    height: '175px',
    padding: '20px 20px 0px 20px',
    width: '215px',
  },

  appCatalogEntryAvatar: {
    background: theme.palette.gradient.light,
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
    color: theme.palette.text.secondary,
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
    backgroundColor: theme.palette.grey['100'],
    borderRadius: theme.palette.dimensions.borderRadius,
    color: theme.palette.text.primary,
    fontSize: '12px',
    fontWeight: 300,
    height: '27.5px',
    marginRight: '7.5px',
    padding: '0px 7.5px',
    width: 'fit-content',
  },

  appCatalogEntryLabelsContainer: {
    display: 'flex',
    height: '40px',
    overflowX: 'auto',
    whiteSpace: 'nowrap',
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
    color: theme.palette.text.primary,
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
    color: theme.palette.text.hint,
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
    borderRadius: theme.palette.dimensions.borderRadius,
    marginRight: '8px',
    padding: '5px 10px',
  },

  appCatalogEntryVersionAndAccess: {
    color: theme.palette.text.hint,
    fontSize: '14px',
    fontWeight: 300,
  },
}))
