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

import { MarketplaceAppVisibilityProps } from './types'
import useStyles from './styles'

const MarketplaceAppVisibility: React.FC<MarketplaceAppVisibilityProps> = ({
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

  const [appVisibility, setAppVisibility] = useState('')
  const [appLabels, setAppLabels] = useState('')

  useEffect(() => {
    setAppVisibility(formState.values.appVisibility)
    setAppLabels(formState.values.appLabels)
  }, [appLabels, appVisibility, formState])

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

        {/* 'App labels' subsection */}
        <Grid item md={6} spacing={3}>
          <Box width={1} display="flex" justifyContent="space-around">
            <TextField
              className={clsx(classes.inputFields, {
                [classes.disabledInputField]: userRole !== 'admin',
              })}
              disabled={userRole !== 'admin'}
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
      </Grid>

      <hr className={classes.sectionSeparator} />
    </>
  )
}

export default MarketplaceAppVisibility
