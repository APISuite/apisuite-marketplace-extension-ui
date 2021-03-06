import React, { useEffect, useState } from 'react'
import {
  Box,
  Chip,
  FormControl,
  Grid,
  RadioGroup,
  TextField,
  Typography,
  useTheme,
  useTranslation,
} from '@apisuite/fe-base'
import clsx from 'clsx'
import { Controller, useFieldArray } from 'react-hook-form'
import { RadioBox } from '../RadioBox'

import { MarketplaceAppSettingsProps, Visibility } from './types'
import useStyles from './styles'

const MarketplaceAppSettings: React.FC<MarketplaceAppSettingsProps> = ({
  formUtil,
  data,
  userRole,
  showLabels,
  showVisibility,
  visibilityEnabled,
}) => {
  const classes = useStyles()
  const trans = useTranslation()
  const { palette, shape, spacing } = useTheme()
  const t = (string: string, ...args) => {
    return trans.t(`extensions.marketplace.${string}`, ...args)
  }

  // FIXME this role should come from a common place
  const adminRole = 'admin'

  const [visibility, setAppVisibility] = useState<Visibility>(
    Visibility.PRIVATE
  )

  const [labels, setLabels] = useState<string[]>([])
  const [label, setLabel] = useState('')

  const { append, fields, remove } = useFieldArray({
    name: 'labels',
    control: formUtil.control,
  })

  useEffect(() => {
    const vi = formUtil.getValues('visibility')
    const lb = formUtil.getValues('labels')
    if (!lb) {
      formUtil.register('labels')
    }
    if (!vi) {
      formUtil.register('visibility', { required: true })
    }
    if (!Array.isArray(lb) || !lb.length) {
      if (
        data.labels &&
        data.labels.length &&
        JSON.stringify(data.labels) !== JSON.stringify(labels)
      ) {
        append(data.labels)
        setLabels(data.labels)
      }
    }
  }, [data, formUtil])

  useEffect(() => {
    formUtil.setValue('visibility', data.visibility || Visibility.PRIVATE)
    setAppVisibility(data.visibility || Visibility.PRIVATE)
  }, [data])

  const handleVisibilityChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setAppVisibility(event.target.value as Visibility)
  }

  const handleTag = (e) => {
    const labelTags = e.target.value
    const tags = labelTags
      .split(',')
      .map((l) => l.trim())
      .filter(Boolean)

    if (labelTags.split(',').length > 1 && tags.length > 0) {
      append(tags[0])
      setLabel('')
    } else {
      setLabel(labelTags)
    }
  }

  const checkIfEnter = (keyPressEvent) => {
    if (keyPressEvent.key !== 'Enter') return

    // If the 'Enter' key is pressed while typing a label, we append said label to our set of labels
    append(label)
    setLabel('')
  }

  return (
    <>
      {/* 'Marketplace settings' section */}
      <Grid container spacing={3}>
        {showLabels && (
          <>
            <Grid item md={12}>
              <Grid item md={6}>
                <Box pb={1.5}>
                  <Typography variant="h6" display="block" gutterBottom>
                    {t('appSettings.labelsFieldLabel')}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            {/* 'Labels' subsection */}
            <Grid item md={12}>
              <Box width={1}>
                <fieldset
                  className={clsx(classes.inputFields, {
                    [classes.disabledLabels]: userRole !== adminRole,
                  })}
                  style={{
                    border: `1px solid ${palette.divider}`,
                    borderRadius: shape.borderRadius,
                    marginBottom: spacing(1),
                  }}
                >
                  <legend>
                    <Typography
                      style={{ color: palette.label }}
                      variant="caption"
                    >
                      {t('appSettings.labelsFieldLabel')}
                    </Typography>
                  </legend>
                  {fields.map((field, index) => (
                    <Chip
                      color="secondary"
                      disabled={userRole !== adminRole}
                      key={field.id}
                      label={formUtil.getValues(`labels.${index}` as const)}
                      onDelete={() => remove(index)}
                      style={{ margin: spacing(1) }}
                    />
                  ))}
                  <TextField
                    className={clsx(classes.inputFields, {
                      [classes.disabledInputField]: userRole !== adminRole,
                    })}
                    color="secondary"
                    disabled={userRole !== adminRole}
                    fullWidth
                    InputProps={{
                      disableUnderline: true,
                    }}
                    margin="dense"
                    onChange={handleTag}
                    onKeyPress={checkIfEnter}
                    style={{ marginBottom: spacing(1) }}
                    type="text"
                    value={label}
                    variant="standard"
                  />
                </fieldset>
                <legend style={{ marginBottom: spacing(3) }}>
                  <Typography
                    style={{ color: palette.label }}
                    variant="caption"
                  >
                    {t('appSettings.labelsFieldHelperText')}
                  </Typography>
                </legend>
              </Box>
            </Grid>
          </>
        )}
        {/* 'App visibility' subsection */}
        {showVisibility && (
          <Grid container item>
            <Grid container item md={12}>
              <Grid item md={6}>
                <Box pb={1.5}>
                  <Typography variant="h6" display="block" gutterBottom>
                    {t('appSettings.marketplaceSettings.visibility.title')}{' '}
                    {showLabels && showVisibility && '*'}
                  </Typography>
                </Box>
              </Grid>
              <Grid item md={showLabels ? 6 : 12}>
                <Box pb={5}>
                  <Typography
                    variant="body2"
                    display="block"
                    gutterBottom
                    style={{ color: palette.text.secondary }}
                  >
                    {t(
                      'appSettings.marketplaceSettings.visibility.description'
                    )}
                  </Typography>
                </Box>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Controller
                control={formUtil.control}
                defaultValue={Visibility.PRIVATE}
                name="visibility"
                render={({ field }) => (
                  <FormControl component="fieldset" style={{ width: '100%' }}>
                    <RadioGroup
                      aria-label="app visibility"
                      name="visibility"
                      onChange={handleVisibilityChange}
                      style={{
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                      }}
                      value={visibility}
                      aria-disabled={!visibilityEnabled}
                    >
                      <RadioBox
                        description={t(
                          'appSettings.privateMarketplaceAppSubtitle'
                        )}
                        label={t('appSettings.privateMarketplaceAppTitle')}
                        {...field}
                        onClick={() => {
                          formUtil.setValue('visibility', Visibility.PRIVATE, {
                            shouldDirty: visibility === Visibility.PUBLIC,
                          })
                          setAppVisibility(Visibility.PRIVATE)
                        }}
                        selected={visibility}
                        value={Visibility.PRIVATE}
                        disabled={!visibilityEnabled}
                      />
                      <RadioBox
                        description={t(
                          'appSettings.publicMarketplaceAppSubtitle'
                        )}
                        {...field}
                        label={t('appSettings.publicMarketplaceAppTitle')}
                        onClick={() => {
                          formUtil.setValue('visibility', Visibility.PUBLIC, {
                            shouldDirty: visibility === Visibility.PRIVATE,
                          })
                          setAppVisibility(Visibility.PUBLIC)
                        }}
                        selected={visibility}
                        value={Visibility.PUBLIC}
                        disabled={!visibilityEnabled}
                      />
                    </RadioGroup>
                  </FormControl>
                )}
                rules={{ required: showLabels && showVisibility }}
              />
            </Grid>
          </Grid>
        )}
      </Grid>
      {showLabels && showVisibility && (
        <hr className={classes.sectionSeparator} />
      )}
    </>
  )
}

export default MarketplaceAppSettings
