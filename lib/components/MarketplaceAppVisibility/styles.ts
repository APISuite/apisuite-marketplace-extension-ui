import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  appLabelsSubSectionDescription: {
    color: theme.palette.text.secondary,
    fontSize: 14,
    fontWeight: 400,
    lineHeight: '17px',
    marginBottom: 40,
  },

  disabledInputField: {
    // Disabled text field's label styles
    '& > label': {
      color: 'rgba(0, 0, 0, 0.26) !important',
    },

    // Disabled text field's input text styles
    '& .MuiInputBase-root': {
      '& .MuiInputBase-input': {
        backgroundColor: 'rgba(0, 0, 0, 0.12)',
        borderRadius: 4,
      },
    },
  },

  inputFields: {
    marginBottom: 25,
    marginTop: 0,
    maxWidth: 400,
    width: '100%',

    // Text field's label styles
    '& > label': {
      color: theme.palette.label,
    },

    '& label.Mui-focused': {
      color: `${theme.palette.action.focus} !important`,
    },

    // Text field's input outline styles
    '& .MuiOutlinedInput-root': {
      '&:hover fieldset': {
        borderColor: `${theme.palette.grey[300]} !important`,
      },

      '&.Mui-focused fieldset': {
        borderColor: `${theme.palette.action.focus} !important`,
      },

      // Multiline text field's styles
      '&.MuiInputBase-multiline': {
        height: '104.5px',
      },
    },

    // Text field's helper text styles
    '& > p': {
      color: theme.palette.label,
    },

    // Text field's input text styles
    '& .MuiInputBase-root': {
      '& .MuiInputBase-input': {
        color: theme.palette.action.active,
      },
    },
  },

  leftSubSectionContainer: {
    marginRight: 40,
    width: 460,
  },

  marketplaceSettingsSubSectionTitle: {
    color: theme.palette.secondary.main,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '20px',
    marginBottom: 37.5,
  },

  sectionSeparator: {
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: theme.shape.borderRadius,
    margin: '25px 0px 25px 0px',
    width: '100%',
  },

  rightSubSectionContainer: {
    width: 400,
  },

  sectionContainer: {
    display: 'flex',
  },

  appVisibilityContainer: {
    alignItems: 'flex-start',
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.grey[300]}`,
    borderRadius: theme.shape.borderRadius,
    cursor: 'pointer',
    display: 'flex',
    height: 100,
    marginBottom: 12,
    maxWidth: 400,
    padding: 12,
    width: '100%',

    // Selects the 'public' app visibility container
    '&:nth-of-type(2)': {
      marginBottom: 24,
    },
  },

  selectedAppVisibilityIcon: {
    color: '#2DB7BA',
    fontSize: 24,
    marginRight: 8,
  },

  notSelectedAppVisibilityIcon: {
    color: '#D1D1D1',
    fontSize: 24,
    marginRight: 8,
  },

  appVisibilityText: {
    '& > :first-child': {
      color: theme.palette.text.primary,
      fontSize: 16,
      fontWeight: 500,
      lineHeight: '23.5px',
      marginBottom: 8,
    },

    '& > :last-child': {
      color: theme.palette.text.hint,
      fontSize: 14,
      fontWeight: 300,
      lineHeight: '20px',
    },
  },
}))
