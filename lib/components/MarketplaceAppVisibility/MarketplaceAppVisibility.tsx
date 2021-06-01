import React, { useEffect, useState } from 'react'
import { TextField, useTranslation } from '@apisuite/fe-base'
import clsx from 'clsx'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'

import { MarketplaceAppVisibilityProps } from './types'
import useStyles from './styles'

const MarketplaceAppVisibility: React.FC<MarketplaceAppVisibilityProps> = ({
  formState,
  handleAppVisibility,
  handleChange,
  userRoleID,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

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
      <div className={classes.sectionContainer}>
        {/* 'App visibility' subsection */}
        <div className={classes.leftSubSectionContainer}>
          <p className={classes.marketplaceSettingsSubSectionTitle}>
            {t('appSettings.marketplaceSettingsSubSectionTitle')}
          </p>

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
              <p>{t('appSettings.privateMarketplaceAppTitle')}</p>

              <p>{t('appSettings.privateMarketplaceAppSubtitle')}</p>
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
        </div>

        {/* 'App labels' subsection */}
        <div className={classes.rightSubSectionContainer}>
          <p className={classes.appLabelsSubSectionDescription}>
            {t('appSettings.appLabelsSubSectionDescription')}
          </p>

          <TextField
            // This input field will be disabled when the user is NOT an admin (i.e., role ID is anything other than 2)
            className={clsx(classes.inputFields, {
              [classes.disabledInputField]: userRoleID !== 2,
            })}
            disabled={userRoleID !== 2}
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
        </div>
      </div>

      <hr className={classes.sectionSeparator} />
    </>
  )
}

export default MarketplaceAppVisibility
