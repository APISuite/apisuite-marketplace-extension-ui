import React from 'react'
import {
  Box,
  Grid,
  TextField,
  Typography,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'
import { Controller } from 'react-hook-form'

import { isValidURL } from '../../util/formValidation'
import { ExternalFormSectionProps } from './types'
import useStyles from '../MarketplaceAppSettings/styles'

export const ApplicationURL: React.FC<ExternalFormSectionProps> = ({
  formUtil,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  const { palette } = useTheme()

  const t = (string: string, ...args) => {
    return trans.t(`extensions.marketplace.${string}`, ...args)
  }

  const validateURI = (uri: string | number) => {
    const stringURI = uri ? uri.toString() : null

    if (stringURI === null || stringURI.length === 0) return true
    if (stringURI.length > 0) return isValidURL(stringURI)

    return false
  }

  return (
    <>
      {/* 'Marketplace settings' section */}
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Grid item md={6}>
            <Box pb={1.5}>
              <Typography variant="h6" display="block" gutterBottom>
                {t('appSettings.formSection.appURL.title')}
              </Typography>
            </Box>

            <Box pb={5}>
              <Typography
                variant="body2"
                display="block"
                gutterBottom
                style={{ color: palette.text.secondary }}
              >
                {t('appSettings.formSection.appURL.description')}
              </Typography>
            </Box>
          </Grid>
        </Grid>

        <Grid item md={12}>
          <Box width={1}>
            <Controller
              control={formUtil.control}
              name="directURL"
              render={({ field }) => (
                <TextField
                  className={classes.inputFields}
                  error={!!formUtil.errors.directURL}
                  {...field}
                  fullWidth
                  helperText={formUtil.errors.directURL?.message}
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
        </Grid>
      </Grid>
    </>
  )
}
