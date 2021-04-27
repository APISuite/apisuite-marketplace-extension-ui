import { makeStyles } from '@apisuite/fe-base'

export default makeStyles({
  allSubbedMarketplaceAppsContainer: {
    display: 'flex',
  },

  applicationsContainerTitle: {
    color: '#14283C',
    fontSize: '24px',
    fontWeight: 400,
    marginBottom: '24px',
    marginTop: '24px',
  },

  browseMarketplaceAppsButton: {
    backgroundColor: '#FFFFFF',
    border: `1px solid #BAC0C6`,
    borderRadius: `4px`,
    color: `#51606E !important`,
    fontSize: '16px',
    fontWeight: 400,
    marginBottom: '40px',
    padding: '6px 21px',
    textDecoration: 'none',
    textTransform: 'none',

    '&:hover': {
      backgroundColor: '#FFFFFF',
    },
  },

  loadingMarketplaceApplicationCards: {
    color: '#85909A',
    fontSize: '16px',
    fontWeight: 200,
    marginBottom: '25px',
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
    background:
      '#C8DC8C linear-gradient(270deg, rgba(200, 220, 140, 1) 0%, rgba(25, 165, 140, 1) 100%)',
    fontSize: '20px',
    fontWeight: 300,
    height: '120px',
    margin: '24px auto',
    textTransform: 'uppercase',
    width: '120px',
  },

  marketplaceAppCardBottomSection: {
    backgroundColor: '#F5F5F5',
    border: `1px solid #BAC0C6`,
    borderRadius: '4px',
    borderTop: 'none',
    borderTopLeftRadius: '0px',
    borderTopRightRadius: '0px',
    padding: '12px 24px 24px 24px',
  },

  marketplaceAppCardDescription: {
    color: '#85909A',
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
    color: '#14283C',
    fontSize: '22px',
    fontWeight: 400,
    marginBottom: '12px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },

  marketplaceAppCardTopSection: {
    backgroundColor: '#F7F8F9',
    border: `1px solid #BAC0C6`,
    borderBottomLeftRadius: '0px',
    borderBottomRightRadius: '0px',
    borderRadius: '4px',
    textAlign: 'center',
  },

  marketplaceAppCardWithAvatarIcon: {
    color: '#BAC0C6',
    fontSize: '30px',
    position: 'absolute',
    transform: 'translate(105px, 10px) rotate(45deg)',
  },

  marketplaceAppCardWithImageIcon: {
    color: '#BAC0C6',
    fontSize: '30px',
    position: 'absolute',
    transform: 'translate(165px, 10px) rotate(45deg)',
  },
})
