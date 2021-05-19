import { makeStyles } from '@apisuite/fe-base'

export default makeStyles((theme) => ({
  /* 1. Modal */

  modalContentsContainer: {
    backgroundColor: theme.palette.background.paper,
    borderRadius: `${theme.shape.borderRadius}px`,
    boxShadow: '0px 0px 20px 0px rgba(0,0,0,0.3)',
    height: '100%',
    /* The 'outline' property is necessary to remove
    an annoying orange border that Material UI adds
    to modals by default. Do NOT remove. */
    outline: 'none',
    /* The 'overflow' property is necessary to allow
    for scrolling on Material UI modals. Do NOT remove. */
    overflow: 'scroll',
    padding: '25px 80px',
    width: '100%',
  },

  /* 1.1 Modal's header */

  closeModalButtonContainer: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'flex',

    '& > p': {
      color: theme.palette.label,
      fontSize: '14px',
      fontWeight: 300,
      marginRight: '15px',
      textDecoration: 'underline',
    },

    '& > svg': {
      color: theme.palette.action.active,
      height: '25px',
      width: '25px',
    },
  },

  editApplicationHeader: {
    color: theme.palette.secondary.main,
    fontSize: '22px',
    fontWeight: 400,
    margin: '20px 0px 0px 0px',
  },

  iconLogo: {
    color: theme.palette.primary.main,
    height: 'auto',
    marginRight: '10px',
    width: '60px',
  },

  imageLogo: {
    height: 'auto',
    marginRight: '10px',
    padding: '5px',
    width: '60px',
  },

  logoAndNameContainer: {
    alignItems: 'center',
    display: 'flex',
  },

  modalHeaderContainer: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
    margin: '0 auto',
    maxWidth: '900px',
    width: '100%',
  },

  newApplicationHeader: {
    color: theme.palette.secondary.main,
    fontSize: '22px',
    fontWeight: 400,
    margin: '20px 0px 0px 0px',
  },

  portalName: {
    color: theme.palette.secondary.main,
    fontSize: '24px',
    fontWeight: 500,
  },

  /* 1.2 Modal's body */

  additionalInfoSubSectionTitle: {
    color: theme.palette.secondary.main,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    marginBottom: '37.5px',
  },

  alternativeSectionSeparator: {
    border: `1px solid ${theme.palette.grey['100']}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    margin: '25px 0px',
    width: '100%',
  },

  appAvatarContainer: {
    position: 'relative',
  },

  appAvatarSubSectionDescription: {
    color: theme.palette.text.primary,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '17px',
    marginBottom: '25px',
  },

  appNameAndShortDescriptionSubSectionTitle: {
    color: theme.palette.secondary.main,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    marginBottom: '40px',
  },

  appURLFieldWrapper: {
    display: 'flex',

    '& > :first-child': {
      marginRight: '10px',
      maxWidth: '350px',
      width: '100%',
    },

    '& > :last-child': {
      backgroundColor: theme.palette.background.default,
      border: `1px solid ${theme.palette.grey['300']}`,
      borderRadius: `${theme.shape.borderRadius}px`,
      color: theme.palette.action.active,
      cursor: 'pointer',
      height: '40px',
      maxWidth: '40px',
      minWidth: '0px',
      padding: '6.5px',
      textAlign: 'center',
      width: '100%',
    },
  },

  avatarIcons: {
    color: theme.palette.action.active,
    cursor: 'pointer',
    height: '20px',
    position: 'absolute',
    right: '7.5px',
    top: '7.5px',
    width: '20px',
    zIndex: 2,
  },

  avatarURLInputField: {
    marginTop: '0px',
    maxWidth: '400px',
    width: '100%',

    '&:disabled': {
      backgroundColor: theme.palette.action.disabled,
    },

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
    },

    // Text field's input text styles
    '& .MuiInputBase-root': {
      '& .MuiInputBase-input': {
        color: theme.palette.action.active,
        height: '85px',
        transform: 'translateY(30px)',
      },
    },

    // Text field's helper text
    '& .MuiFormHelperText-root': {
      color: theme.palette.label,

      '&.Mui-error': {
        color: theme.palette.error.main,
      },
    },
  },

  buttonsContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '25px',
  },

  clientApplicationCardStatusText: {
    color: theme.palette.label,
    fontSize: '14px',
    fontWeight: 300,
    textAlign: 'left',
  },

  appLabelsSubSectionDescription: {
    color: '#85909A',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '17px',
    marginBottom: '22.5px',
  },

  clientSecretInputFieldContainer: {
    display: 'flex',
  },

  disabledClientSecretInputFieldRefreshButton: {
    border: `1px solid ${theme.palette.action.disabledBackground}`,
    borderRadius: theme.shape.borderRadius,
    color: theme.palette.action.disabledBackground,
    height: 40,
    marginLeft: 10,
    padding: '7px 0px',
    marginTop: 9,
    pointerEvents: 'none',
    textAlign: 'center',
    width: 47,
  },

  draftClientApplicationCardStatusIcon: {
    color: theme.palette.label,
    fontSize: '12px',
    margin: '0px 12px 0px 12px',
  },

  editApplicationHeaderContainer: {
    display: 'flex',
  },

  editApplicationHeaderStatusContainer: {
    alignItems: 'center',
    display: 'flex',
    marginTop: '20px',
  },

  enabledClientIDInputField: {
    marginBottom: '25px',
    marginTop: '0px',
    maxWidth: '400px',
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

    // Text field's input text styles
    '& .MuiInputBase-root': {
      paddingRight: '8.5px !important',

      '& .MuiInputBase-input': {
        borderRight: '1px solid rgba(0, 0, 0, 0.2)',
        color: theme.palette.action.active,
      },

      '& .MuiInputAdornment-root': {
        color: theme.palette.action.active,
        cursor: 'pointer',
      },
    },
  },

  enabledClientSecretInputField: {
    marginBottom: '25px',
    marginTop: '0px',
    maxWidth: '350px',
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

    // Text field's input text styles
    '& .MuiInputBase-root': {
      paddingRight: '8.5px !important',

      '& .MuiInputBase-input': {
        borderRight: '1px solid rgba(0, 0, 0, 0.2)',
        color: theme.palette.action.active,
      },

      '& .MuiInputAdornment-root': {
        color: theme.palette.action.active,
        cursor: 'pointer',
      },
    },
  },

  enabledClientSecretInputFieldRefreshButton: {
    border: '1px solid rgba(0, 0, 0, 0.2)',
    borderRadius: `${theme.shape.borderRadius}px`,
    color: theme.palette.action.active,
    cursor: 'pointer',
    height: '40px',
    marginLeft: '10px',
    padding: '7px 0px',
    textAlign: 'center',
    width: '47px',
  },

  focusedAvatar: {
    background: theme.palette.gradient.light,
    fontSize: '13.75px',
    fontWeight: 300,
    height: '55px',
    left: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    right: 0,
    textTransform: 'uppercase',
    top: '12.5px',
    width: '55px',
    zIndex: 2,
  },

  infoBox: {
    alignItems: 'flex-start',
    backgroundColor: theme.palette.info.light,
    borderRadius: `${theme.shape.borderRadius}px`,
    display: 'flex',
    height: 75,
    padding: '12px 10px',
    textAlign: 'left',
    width: 400,
  },

  infoBoxIcon: {
    fill: '#46B5EF',
  },

  infoBoxText: {
    color: '#035E86',
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '18px',
    marginLeft: '2.5px',
  },

  inputFields: {
    marginBottom: '25px',
    marginTop: '0px',
    maxWidth: '400px',
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
    marginRight: '40px',
    width: '460px',
  },

  modalBodyContainer: {
    display: 'block',
    margin: '0 auto',
    maxWidth: '900px',
    width: '100%',
  },

  notFocusedAvatar: {
    background: theme.palette.gradient.light,
    fontSize: '20px',
    fontWeight: 300,
    height: '80px',
    left: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    position: 'absolute',
    right: 0,
    textTransform: 'uppercase',
    top: '12.5px',
    width: '80px',
    zIndex: 2,
  },

  optionalURLsSubSectionDescription: {
    color: theme.palette.text.primary,
    fontSize: '14px',
    fontWeight: 400,
    lineHeight: '17px',
    marginBottom: '22.5px',
  },

  otherButtons: {
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${theme.palette.label}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    color: `${theme.palette.action.active} !important`,
    fontSize: '16px',
    fontWeight: 500,
    marginLeft: '25px',
    padding: '6px 21px',
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: theme.palette.background.default,
    },
  },

  marketplaceSettingsSubSectionTitle: {
    color: theme.palette.secondary.main,
    fontSize: '16px',
    fontWeight: 500,
    lineHeight: '20px',
    marginBottom: '37.5px',
  },

  regularSectionSeparator: {
    border: `1px solid ${theme.palette.grey[200]}`,
    borderRadius: theme.shape.borderRadius,
    margin: '25px 0px 25px 0px',
    width: '100%',
  },

  removeAppButton: {
    backgroundColor: theme.palette.error.main,
    border: `1px solid ${theme.palette.error.main}`,
    borderRadius: `${theme.shape.borderRadius}px`,
    color: `${theme.palette.primary.contrastText} !important`,
    fontSize: '16px',
    fontWeight: 500,
    marginLeft: '25px',
    padding: '6px 21px',
    textDecoration: 'none',

    '&:hover': {
      backgroundColor: theme.palette.error.main,
    },
  },

  rightSubSectionContainer: {
    width: '400px',
  },

  sectionContainer: {
    display: 'flex',
  },

  selectorOption: {
    color: theme.palette.action.active,
    fontSize: '15px',
    fontWeight: 300,
    padding: '5px 25px',
  },

  selectorTitle: {
    color: theme.palette.text.primary,
    fontSize: '14px',
    fontWeight: 300,
    padding: '6px 25px',
  },

  subscribedClientApplicationCardStatusIcon: {
    color: theme.palette.primary.main,
    fontSize: '14px',
    margin: '0px 12px 0px 12px',
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
