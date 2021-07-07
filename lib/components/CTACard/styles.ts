import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  ctaCardButton: {
    color: `${theme.palette.secondary.contrastText} !important`,
    textDecoration: 'none',
  },

  ctaCardContentsContainer: {
    alignItems: 'center',
    backgroundColor: theme.palette.background.paper,
    borderRadius: `${theme.shape.borderRadius}px`,
    boxShadow: `0px 3px 10px -3px ${theme.palette.grey[200]}`,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    margin: 'auto',
    maxWidth: '900px',
    padding: '20px 40px',
    width: '100%',
  },

  ctaCardText: {
    fontSize: '20px',
    fontWeight: 200,
    paddingRight: '20px',
    width: '625px',
  },
}))
