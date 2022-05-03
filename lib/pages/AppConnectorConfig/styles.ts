import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  appDetailsContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '220px auto 0px auto',
    maxWidth: '900px',
    padding: '40px 0px 60px 0px',
    width: '100%',
  },
  leftAppDetailsContainer: {
    maxWidth: '215px',
    width: '100%',
  },
  rightAppDetailsContainer: {
    maxWidth: '700px',
    paddingLeft: '40px',
    width: '100%',
  },
  topMostSubSection: {
    height: '280px',
    width: '100%',
  },
  appImage: {
    borderRadius: '50%',
    height: '150px',
    margin: '0px 25px 42.5px 25px',
    width: '150px',
  },
  appAvatar: {
    background: theme.palette.gradient.light,
    fontSize: '55px',
    fontWeight: 300,
    height: '150px',
    margin: '0px auto 50px auto',
    textTransform: 'uppercase',
    width: '150px',
  },
  customTableHeader: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderTopLeftRadius: theme.shape.borderRadius,
    borderTopRightRadius: theme.shape.borderRadius,
    display: 'flex',
    padding: theme.spacing(1.75, 0),
  },
  tableEntry: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'row',
    padding: theme.spacing(1.25, 0),
    borderLeft: `1px solid ${theme.palette.grey[300]}`,
    borderRight: `1px solid ${theme.palette.grey[300]}`,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
    width: '100%',
  },
  evenTableEntry: {
    backgroundColor: theme.palette.background.paper,
  },

  oddTableEntry: {
    backgroundColor: theme.palette.grey[50],
  },
}))
