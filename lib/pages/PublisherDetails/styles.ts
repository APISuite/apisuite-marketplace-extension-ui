import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  avatarWithImage: {
    backgroundColor: 'transparent',
    backgroundImage:
      'repeating-linear-gradient(45deg, #ECEDEF 25%, transparent 25%, transparent 75%, #ECEDEF 75%, #ECEDEF), repeating-linear-gradient(45deg, #ECEDEF 25%, #FFFFFF 25%, #FFFFFF 75%, #ECEDEF 75%, #ECEDEF)',
    backgroundPosition: '0 0, 10px 10px',
    backgroundSize: '20px 20px',
    opacity: 0.8,
  },

  avatarWithoutImage: {
    background: theme.palette.gradient.light,
  },

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
    height: 120,
    margin: `${theme.spacing(0)}px ${theme.spacing(5)}px`,
    textTransform: 'uppercase',
    width: 120,

    '& > img': {
      height: 'auto',
    },
  },
}))
