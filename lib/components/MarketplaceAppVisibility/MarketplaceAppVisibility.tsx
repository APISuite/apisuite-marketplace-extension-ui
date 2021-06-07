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
        <Grid md={12} spacing={3}>
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
        <Grid item md={6} spacing={2}>
          <div
            className={classes.appVisibilityContainer}
            onClick={() => {
              handleAppVisibility('private')
              setAppVisibility('private')
            }}
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

            <div className={classes.appVisibilityText}>
              <Box pb={1.5}>
                <Typography variant="body1" display="block" gutterBottom>
                  {t('appSettings.privateMarketplaceAppTitle')}
                </Typography>
              </Box>
              <Box pb={1.5}>
                <Typography variant="body1" display="block" gutterBottom>
                  {t('appSettings.privateMarketplaceAppSubtitle')}
                </Typography>
              </Box>
            </div>
          </div>

          <div
            className={classes.appVisibilityContainer}
            onClick={() => {
              handleAppVisibility('public')
              setAppVisibility('public')
            }}
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

            <div className={classes.appVisibilityText}>
              <p>{t('appSettings.publicMarketplaceAppTitle')}</p>

              <p>{t('appSettings.publicMarketplaceAppSubtitle')}</p>
            </div>
          </div>
        </Grid>

        {/* 'App labels' subsection */}
        <Grid item md={6} spacing={2}>
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
        </Grid>
      </Grid>

      <hr className={classes.sectionSeparator} />
    </>
  )
}

export default MarketplaceAppVisibility
