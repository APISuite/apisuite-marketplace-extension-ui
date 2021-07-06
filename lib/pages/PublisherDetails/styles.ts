import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  pageContainer: {
    marginTop: theme.spacing(27.5),
    maxWidth: 900,
    width: '100%',
  },

  publisherCard: {
    backgroundColor: theme.palette.background.default,
    border: `2px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    margin: `${theme.spacing(0)}px auto`,
    padding: `${theme.spacing(4.375)}px 0px`,
  },

  publisherAvatar: {
    background: theme.palette.gradient.light,
    height: 120,
    margin: `${theme.spacing(0)}px ${theme.spacing(5)}px`,
    textTransform: 'uppercase',
    width: 120,

    '& > img': {
      height: 'auto',
    },
  },
}))
