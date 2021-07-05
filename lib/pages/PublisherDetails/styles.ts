import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  pageContainer: {
    marginTop: 220,
    maxWidth: 900,
    width: '100%',
  },

  publisherCard: {
    backgroundColor: theme.palette.background.default,
    border: `2px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    margin: '0px auto',
    padding: '35px 0px',
  },

  publisherAvatar: {
    background: theme.palette.gradient.light,
    fontSize: 55,
    fontWeight: 300,
    height: 120,
    margin: '0px 40px 0px 40px',
    textTransform: 'uppercase',
    width: 120,

    '& > img': {
      height: 'auto',
    },
  },
}))
