import React, { useEffect, useState } from 'react'
import {
  Box,
  FormControl,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'
import clsx from 'clsx'
import { Controller } from 'react-hook-form'

import { isValidURL } from '../../util/formValidation'
import { MarketplaceAppSettingsProps } from './types'
import useStyles from './styles'

const MarketplaceAppSettings: React.FC<MarketplaceAppSettingsProps> = ({
  formUtil,
  data,
  userRole,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  const { palette } = useTheme()

  const t = (string: string, ...args) => {
    return trans.t(`extensions.marketplace.${string}`, ...args)
  }

  const adminRole = 'admin'

  const [appVisibility, setAppVisibility] = useState('private')

  const validateURI = (uri: string | number) => {
    const stringURI = uri ? uri.toString() : null

    if (stringURI === null || stringURI.length === 0) return true
    if (stringURI.length > 0) return isValidURL(stringURI)

    return false
  }

  useEffect(() => {
    setAppVisibility(data.visibility)
  }, [data])

  return (
    <>
      {/* 'Marketplace settings' section */}
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Grid item md={6}>
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
        <Grid item md={6}>
          <Box width={1}>
            <Controller
              control={formUtil.control}
              name="appDirectURL"
              render={({ field }) => (
                <TextField
                  className={classes.inputFields}
                  error={!!formUtil.errors.appDirectURL}
                  {...field}
                  fullWidth
                  helperText={formUtil.errors.appDirectURL?.message}
                  label={t('appSettings.appDirectURLFieldLabel')}
                  margin="dense"
                  type="text"
                  variant="outlined"
                />
              )}
              rules={{
                validate: (value) =>
                  validateURI(value) || t('appSettings.invalidURL'),
              }}
            />
          </Box>

          <Box width={1}>
            <Controller
              control={formUtil.control}
              name="appLabels"
              render={({ field }) => (
                <TextField
                  className={clsx(classes.inputFields, {
                    [classes.disabledInputField]: userRole !== adminRole,
                  })}
                  disabled={userRole !== adminRole}
                  {...field}
                  fullWidth
                  helperText={t('appSettings.labelsFieldHelperText')}
                  label={t('appSettings.labelsFieldLabel')}
                  margin="dense"
                  type="text"
                  variant="outlined"
                />
              )}
            />
          </Box>
        </Grid>

        {/* 'App visibility' subsection */}
        <Grid item md={6}>
          <Controller
            control={formUtil.control}
            name="appVisibility"
            render={({ field }) => (
              <FormControl component="fieldset">
                <RadioGroup
                  aria-label="app visibility"
                  name="appVisibility"
                  defaultValue={appVisibility}
                >
                  <Box
                    className={classes.appVisibilityContainer}
                    flexDirection="column"
                    onClick={() => {
                      formUtil.setValue('appVisibility', 'private', {
                        shouldDirty: appVisibility === 'public',
                      })
                      setAppVisibility('private')
                    }}
                    mb={1.5}
                    p={1}
                  >
                    <Box>
                      <FormControlLabel
                        checked={appVisibility === 'private'}
                        control={<Radio color="primary" />}
                        {...field}
                        label={t('appSettings.privateMarketplaceAppTitle')}
                        labelPlacement="end"
                        value="private"
                      />
                    </Box>
                    <Box pl={3.75} pb={1.5}>
                      <Typography
                        variant="body2"
                        display="block"
                        style={{ color: palette.text.secondary }}
                      >
                        {t('appSettings.privateMarketplaceAppSubtitle')}
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    className={classes.appVisibilityContainer}
                    flexDirection="column"
                    onClick={() => {
                      formUtil.setValue('appVisibility', 'public', {
                        shouldDirty: appVisibility === 'private',
                      })
                      setAppVisibility('public')
                    }}
                    mb={1.5}
                    p={1}
                  >
                    <Box>
                      <FormControlLabel
                        checked={appVisibility === 'public'}
                        control={<Radio color="primary" />}
                        {...field}
                        label={t('appSettings.publicMarketplaceAppTitle')}
                        labelPlacement="end"
                        value="public"
                      />
                    </Box>
                    <Box pl={3.75} pb={1.5}>
                      <Typography
                        variant="body2"
                        display="block"
                        style={{ color: palette.text.secondary }}
                      >
                        {t('appSettings.publicMarketplaceAppSubtitle')}
                      </Typography>
                    </Box>
                  </Box>
                </RadioGroup>
              </FormControl>
            )}
          />
        </Grid>
      </Grid>

      <hr className={classes.sectionSeparator} />
    </>
  )
}

export default MarketplaceAppSettings
