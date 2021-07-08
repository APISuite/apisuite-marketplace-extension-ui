import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  avatarWithImage: {
    backgroundColor: 'transparent',
    backgroundImage: `repeating-linear-gradient(45deg, ${theme.palette.grey[50]} 25%, transparent 25%, transparent 75%, ${theme.palette.grey[50]} 75%, ${theme.palette.grey[50]}), repeating-linear-gradient(45deg, ${theme.palette.grey[50]} 25%, ${theme.palette.common.white} 25%, ${theme.palette.common.white} 75%, ${theme.palette.grey[50]} 75%, ${theme.palette.grey[50]})`,
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
    border: `2px solid ${theme.palette.grey[300]}`,
    margin: `${theme.spacing(0)}px auto`,
    padding: `${theme.spacing(4.375)}px 0px`,
  },

  publisherAvatar: {
    height: 120,
    margin: theme.spacing(0, 5),
    textTransform: 'uppercase',
    width: 120,
  },
}))
