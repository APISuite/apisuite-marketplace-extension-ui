import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  allSubbedMarketplaceAppsContainer: {
    display: 'flex',
  },

  browseMarketplaceAppsButton: {
    backgroundColor: theme.palette.common.white,
    border: `1px solid ${theme.palette.grey['300']}`,
    borderRadius: `4px`,
    color: `${theme.palette.text.hint} !important`,
    fontSize: '16px',
    fontWeight: 400,
    padding: '12px 21px',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: theme.palette.common.white,
    },
  },

  loadingMarketplaceAppCards: {
    color: theme.palette.text.secondary,
    fontSize: '16px',
    fontWeight: 200,
    marginBottom: '40px',
    marginTop: '40px',
  },

  marketplaceAppCard: {
    height: '331.5px',
    marginBottom: '15px',
    marginRight: '15px',
    textDecoration: 'none',
    width: '285px',

    '&:hover': {
      cursor: 'pointer',
      filter: 'drop-shadow(0px 2.5px 2.5px rgba(0, 0, 0, 0.25))',

      '& > :first-child': {
        '& > :first-child': {
          color: '#505F6F',
        },
      },
    },
  },

  marketplaceAppCardAvatar: {
    background: theme.palette.gradient.light,
    fontSize: '20px',
    fontWeight: 300,
    height: '120px',
    margin: '24px auto',
    textTransform: 'uppercase',
    width: '120px',
  },

  marketplaceAppCardBottomSection: {
    backgroundColor: '#F5F5F5',
    border: `1px solid ${theme.palette.grey['300']}`,
    borderRadius: theme.palette.dimensions.borderRadius,
    borderTop: 'none',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    padding: '12px 24px 24px 24px',
  },

  marketplaceAppCardDescription: {
    color: theme.palette.text.secondary,
    display: '-webkit-box',
    fontSize: '16px',
    fontWeight: 300,
    height: '44.5px',
    lineHeight: '22px',
    marginBottom: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    '-webkit-box-orient': 'vertical',
    '-webkit-line-clamp': 2,
  },

  marketplaceAppCardImage: {
    borderRadius: '50%',
    fontSize: '20px',
    fontWeight: 300,
    height: '120px',
    margin: '20px auto',
    width: '120px',
  },

  marketplaceAppCardLink: {
    textDecoration: 'none',
  },

  marketplaceAppCardTitle: {
    color: theme.palette.text.primary,
    fontSize: '22px',
    fontWeight: 400,
    marginBottom: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  marketplaceAppCardTopSection: {
    backgroundColor: theme.palette.background.default,
    border: `1px solid ${theme.palette.grey['300']}`,
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    borderRadius: theme.palette.dimensions.borderRadius,
    textAlign: 'center',
  },

  marketplaceAppCardWithAvatarIcon: {
    color: theme.palette.grey['300'],
    fontSize: '30px',
    position: 'absolute',
    transform: 'translate(105px, 10px) rotate(45deg)',
  },

  marketplaceAppCardWithImageIcon: {
    color: theme.palette.grey['300'],
    fontSize: '30px',
    position: 'absolute',
    transform: 'translate(165px, 10px) rotate(45deg)',
  },

  marketplaceAppsContainerTitle: {
    color: theme.palette.text.primary,
    fontSize: '24px',
    fontWeight: 400,
    marginBottom: '40px',
    marginTop: '24px',
  },

  retrievingMarketplaceAppCards: {
    color: theme.palette.text.secondary,
    fontSize: '16px',
    fontWeight: 200,
    marginBottom: '40px',
    marginTop: '40px',
  },
}))
