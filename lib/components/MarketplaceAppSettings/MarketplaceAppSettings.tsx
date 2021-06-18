import React, { useEffect, useState } from 'react'
import {
  Box,
  Grid,
  TextField,
  Typography,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'
import clsx from 'clsx'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'

import { MarketplaceAppSettingsProps } from './types'
import useStyles from './styles'

const MarketplaceAppSettings: React.FC<MarketplaceAppSettingsProps> = ({
  formState,
  handleAppVisibility,
  handleChange,
  userRole,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  const { palette } = useTheme()

  const t = (string: string, ...args) => {
    return trans.t(`extensions.marketplace.${string}`, ...args)
  }

  const adminRole = 'admin'

  const [appVisibility, setAppVisibility] = useState('')
  const [appDirectURL, setAppDirectURL] = useState('')
  const [appLabels, setAppLabels] = useState('')

  useEffect(() => {
    setAppVisibility(formState.values.appVisibility)
    setAppDirectURL(formState.values.appDirectURL)
    setAppLabels(formState.values.appLabels)
  }, [formState])

  return (
    <>
      {/* 'Marketplace settings' section */}
      <Grid container>
        <Grid md={12}>
          <Grid md={6} spacing={3}>
            <Box pb={1.5}>
              <Typography variant="h6" display="block" gutterBottom>
                {t('appSettings.marketplaceSettingsSubSectionTitle')}
              </Typography>
            </Box>

            <Box pb={5}>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                style={{ color: palette.text.secondary }}
              >
                {t('appSettings.appLabelsSubSectionDescription')}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        {/* 'App direct URL & labels' subsection */}
        <Grid item md={6} spacing={3}>
          <Box width={1}>
            <TextField
              className={classes.inputFields}
              error={formState.errors.appDirectURL}
              fullWidth
              helperText={
                formState.errors.appDirectURL
                  ? formState.errorMsgs.appDirectURL
                  : ''
              }
              label={t('appSettings.appDirectURLFieldLabel')}
              margin="dense"
              name="appDirectURL"
              onChange={handleChange}
              type="text"
              value={appDirectURL}
              variant="outlined"
            />
          </Box>

          <Box width={1}>
            <TextField
              className={clsx(classes.inputFields, {
                [classes.disabledInputField]: userRole !== adminRole,
              })}
              disabled={userRole !== adminRole}
              fullWidth
              helperText={t('appSettings.labelsFieldHelperText')}
              label={t('appSettings.labelsFieldLabel')}
              margin="dense"
              name="appLabels"
              onChange={handleChange}
              type="text"
              value={appLabels}
              variant="outlined"
            />
          </Box>
        </Grid>

        {/* 'App visibility' subsection */}
        <Grid item md={6} spacing={3}>
          <Box
            className={classes.appVisibilityContainer}
            onClick={() => {
              handleAppVisibility('private')
              setAppVisibility('private')
            }}
            mb={1.5}
            p={1}
          >
            {appVisibility === 'private' ? (
              <RadioButtonCheckedRoundedIcon
                className={classes.selectedAppVisibilityIcon}
              />
            ) : (
              <RadioButtonUncheckedRoundedIcon
                className={classes.notSelectedAppVisibilityIcon}
              />
            )}

            <Box>
              <Box pb={1.5}>
                <Typography
                  variant="body2"
                  display="block"
                  style={{ color: palette.text.secondary }}
                >
                  {t('appSettings.privateMarketplaceAppTitle')}
                </Typography>
              </Box>

              <Box pb={1.5}>
                <Typography
                  variant="body2"
                  display="block"
                  style={{ color: palette.text.secondary }}
                >
                  {t('appSettings.privateMarketplaceAppSubtitle')}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box
            className={classes.appVisibilityContainer}
            onClick={() => {
              handleAppVisibility('public')
              setAppVisibility('public')
            }}
            mb={1.5}
            p={1}
          >
            {appVisibility === 'public' ? (
              <RadioButtonCheckedRoundedIcon
                className={classes.selectedAppVisibilityIcon}
              />
            ) : (
              <RadioButtonUncheckedRoundedIcon
                className={classes.notSelectedAppVisibilityIcon}
              />
            )}

            <Box>
              <Box pb={1.5}>
                <Typography
                  variant="body2"
                  display="block"
                  style={{ color: palette.text.secondary }}
                >
                  {t('appSettings.publicMarketplaceAppTitle')}
                </Typography>
              </Box>

              <Box pb={1.5}>
                <Typography
                  variant="body2"
                  display="block"
                  style={{ color: palette.text.secondary }}
                >
                  {t('appSettings.publicMarketplaceAppSubtitle')}
                </Typography>
              </Box>
            </Box>
          </Box>
        </Grid>
      </Grid>

      <hr className={classes.sectionSeparator} />
    </>
  )
}

export default MarketplaceAppSettings
