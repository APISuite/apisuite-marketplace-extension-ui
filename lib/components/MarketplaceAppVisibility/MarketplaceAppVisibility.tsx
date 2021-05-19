import React, { useState } from 'react'
import { TextField, useTranslation } from '@apisuite/fe-base'
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded'
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded'

import { MarketplaceAppVisibilityProps } from './types'
import useStyles from './styles'

const MarketplaceAppVisibility: React.FC<MarketplaceAppVisibilityProps> = ({
  setMarketplaceAppVisibilityAction,
  setMarketplaceAppLabelsAction,
}) => {
  const classes = useStyles()

  const trans = useTranslation()

  const t = (string: string, ...args) => {
    return trans.t(`extensions.marketplace.${string}`, ...args)
  }

  /* App's visibility logic */

  const [appVisibility, setAppVisibility] = useState('private')

  const handleAppVisibility = (appVisibility: string) => {
    setAppVisibility(appVisibility)

    setMarketplaceAppVisibilityAction(appVisibility)
  }

  /* App's labels logic */

  const [appLabels, setAppLabels] = useState('')

  const handleAppLabelsChange = (
    changeEvent: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    changeEvent.preventDefault()

    const newAppLabels = changeEvent.target.value

    setAppLabels(newAppLabels)

    const arrayOfAppLabels = newAppLabels.length
      ? newAppLabels
          .replace(/\s*,\s*/g, ',')
          .split(',')
          .filter((label) => {
            return label.length > 0
          })
      : []

    setMarketplaceAppLabelsAction(arrayOfAppLabels)
  }

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
            onClick={() => handleAppVisibility('private')}
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
            onClick={() => handleAppVisibility('public')}
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
            className={classes.inputFields}
            fullWidth
            helperText={t('appSettings.labelsFieldHelperText')}
            label={t('appSettings.labelsFieldLabel')}
            margin="dense"
            name="appLabels"
            onChange={handleAppLabelsChange}
            type="text"
            value={appLabels}
            variant="outlined"
          />
        </div>
      </div>

      <hr className={classes.regularSectionSeparator} />
    </>
  )
}

export default MarketplaceAppVisibility
