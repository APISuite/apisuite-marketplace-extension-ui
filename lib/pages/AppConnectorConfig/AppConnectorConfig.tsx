import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import {
  Box,
  Typography,
  useTranslation,
  TextField,
  Grid,
  Icon,
  Switch,
  FormControlLabel,
  Button,
  Divider,
} from '@apisuite/fe-base'
import {
  getAppConnectorConfigAction,
  getAppConnectorSubscriptionAction,
  getAppDetailsAction,
} from '../Marketplace/ducks'
import useStyles from './styles'
import appConnectorConfigSelector from './selector'
import { Alert } from '@material-ui/lab'

const AppConnectorConfig: React.FC = () => {
  const classes = useStyles()

  const {
    selectedAppDetails,
    appConnectorConfigDetails,
    appConnectorSubscriptionDetails,
    appConnectorSubscribed,
  } = useSelector(appConnectorConfigSelector)

  const dispatch = useDispatch()

  const trans = useTranslation()

  const t = (string: string, ...args) => {
    return trans.t(`extensions.marketplace.${string}`, ...args)
  }

  const history = useHistory()
  // 1. Subscription logic for the currently selected Marketplace app

  // Retrieves the app's ID from the browser window's URL
  const { appID } = useParams<any>()

  const getSubscriptionStatus = () =>
    appConnectorConfigDetails.data.workerStatus !== 'stopped' &&
    appConnectorSubscribed

  const backToApp = () => {
    history.push(
      `${encodeURI('/marketplace/app-details/' + selectedAppDetails.id)}`
    )
  }

  const [fieldValues, setFieldValues] = useState({
    apiUrl: '',
    polling_toggle: getSubscriptionStatus(),
  })
  console.log('field values:', fieldValues)

  const renderFieldsRaw = (entries) => {
    return entries.map((entry, key) => (
      <React.Fragment key={key}>
        <Grid item xs={5}>
          <TextField
            label={t('appMarketplace.appConnectorConfig.appField')}
            InputLabelProps={{
              shrink: true,
            }}
            disabled={true}
            style={{ width: 100 + '%' }}
            value={entry}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <Icon
            style={{
              width: 100 + '%',
              height: 100 + '%',
              textAlign: 'center',
              lineHeight: 50 + 'px',
              color: '#62acee',
            }}
          >
            arrow_right_alt
          </Icon>
        </Grid>
        <Grid item xs={5}>
          <TextField
            label={t('appMarketplace.appConnectorConfig.apiField')}
            InputLabelProps={{
              shrink: true,
            }}
            style={{ width: 100 + '%' }}
            name={entry}
            value={fieldValues[entry]}
            onChange={changeHandler}
            variant="outlined"
          />
        </Grid>
      </React.Fragment>
    ))
  }

  const changeHandler = (changeEvent) => {
    console.log(changeEvent)
    const newFieldValues = { ...fieldValues }
    newFieldValues[changeEvent.target.name] = changeEvent.target.value
    setFieldValues(newFieldValues)
  }

  const updatePollingStatus = () => {
    console.log('pooling toggle', fieldValues['polling_toggle'])
  }

  const saveSubscription = (event) => {
    console.log('field values', fieldValues)
    event.preventDefault()
  }

  const mappingIsOutdated = (currentMapping) => {
    for (const currentMappingKey in currentMapping) {
      if (
        appConnectorConfigDetails.data.fieldsRaw.indexOf(currentMappingKey) ==
        -1
      )
        return true
    }
    return false
  }

  useEffect(() => {
    if (appID !== '') dispatch(getAppDetailsAction(appID))
  }, [appID])

  useEffect(() => {
    if (appID !== '') dispatch(getAppConnectorConfigAction(appID))
  }, [appID])

  useEffect(() => {
    if (selectedAppDetails && appConnectorConfigDetails)
      dispatch(
        getAppConnectorSubscriptionAction(
          appConnectorConfigDetails.data.name,
          selectedAppDetails.name
        )
      )
  }, [selectedAppDetails, appConnectorConfigDetails])

  useEffect(() => {
    const newFieldValues = { ...fieldValues }
    newFieldValues['apiUrl'] =
      (appConnectorSubscribed && appConnectorSubscriptionDetails.data.apiUrl) ||
      ''
    for (const entry in appConnectorConfigDetails.data.fieldsRaw) {
      newFieldValues[entry] =
        (appConnectorSubscribed &&
          appConnectorSubscriptionDetails.data.fieldMapping[entry]) ||
        ''
    }
    newFieldValues['polling_toggle'] = getSubscriptionStatus()
    setFieldValues(newFieldValues)
  }, [appConnectorSubscriptionDetails, appConnectorSubscribed])

  return (
    <main>
      <section className={classes.appDetailsContainer}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Grid container spacing={3}>
              <Grid item xs={8}>
                <Typography variant="h3" style={{ marginBottom: 8 + 'px' }}>
                  {t('appMarketplace.appConnectorConfig.title', {
                    appName: selectedAppDetails.name,
                  })}
                </Typography>
                <Typography variant="body1">
                  {t('appMarketplace.appConnectorConfig.description', {
                    appName: selectedAppDetails.name,
                  })}
                </Typography>
              </Grid>
              <Grid item xs={4}>
                {appConnectorConfigDetails &&
                  appConnectorConfigDetails.data.workerStatus == 'stopped' && (
                    <Alert severity="error">
                      {t(
                        'appMarketplace.appConnectorConfig.alerts.workerOffline',
                        {
                          appName: selectedAppDetails.name,
                        }
                      )}
                    </Alert>
                  )}
                {appConnectorSubscribed &&
                  ((mappingIsOutdated(
                    appConnectorSubscriptionDetails.data.fieldMapping
                  ) && (
                    <Alert severity="warning">
                      {t('appMarketplace.appConnectorConfig.alerts.outdated', {
                        appName: selectedAppDetails.name,
                      })}
                    </Alert>
                  )) || (
                    <Alert severity="success">
                      {t('appMarketplace.appConnectorConfig.alerts.upToDate', {
                        appName: selectedAppDetails.name,
                      })}
                    </Alert>
                  ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h4" style={{ marginBottom: 8 + 'px' }}>
                {t('appMarketplace.appConnectorConfig.apiEndpointTitle')}
              </Typography>
              <TextField
                id="api_endpoint"
                name="apiUrl"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: 80 + '%' }}
                variant="outlined"
                type="url"
                onChange={changeHandler}
                value={fieldValues['apiUrl']}
                placeholder="https://example.com"
                label={t('appMarketplace.appConnectorConfig.apiEndpointLabel')}
              />
            </Box>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h4">
                {t('appMarketplace.appConnectorConfig.fieldMatching')}
              </Typography>
              <Typography variant="body1">
                {t(
                  'appMarketplace.appConnectorConfig.fieldMatchingDescription',
                  {
                    appName: selectedAppDetails.name,
                  }
                )}
              </Typography>
            </Box>
          </Grid>

          <Grid item xs={5}>
            <Typography variant="body1">
              {t('appMarketplace.appConnectorConfig.appFields', {
                appName: selectedAppDetails.name,
              })}
            </Typography>
          </Grid>
          <Grid item xs={2}></Grid>
          <Grid item xs={5}>
            <Typography variant="body1">
              {t('appMarketplace.appConnectorConfig.apiFields')}
            </Typography>
          </Grid>
          {renderFieldsRaw(appConnectorConfigDetails.data.fieldsRaw)}
          <Grid item xs={12}>
            <Button
              variant="contained"
              style={{ backgroundColor: '#32C896', borderColor: '#32C896' }}
              onClick={saveSubscription}
            >
              {t('appMarketplace.appConnectorConfig.save')}
            </Button>
          </Grid>
          <Grid item xs={12}>
            <Divider variant="middle" />
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h4" style={{ marginBottom: 8 + 'px' }}>
                {t('appMarketplace.appConnectorConfig.connectionStatus')}
              </Typography>
              <Typography variant="body1" style={{ marginBottom: 8 + 'px' }}>
                {t(
                  'appMarketplace.appConnectorConfig.connectionStatusDescription'
                )}
              </Typography>
              <FormControlLabel
                control={
                  <Switch
                    name="polling_toggle"
                    checked={fieldValues['polling_toggle']}
                    disabled={
                      appConnectorConfigDetails.data.workerStatus !== 'stopped'
                    }
                    onChange={updatePollingStatus}
                  />
                }
                label={t(
                  fieldValues['polling_toggle']
                    ? 'appMarketplace.appConnectorConfig.connectionOn'
                    : 'appMarketplace.appConnectorConfig.connectionOff'
                )}
              />
            </Box>
          </Grid>
          <Grid item xs={10}></Grid>
          <Grid item xs={2}>
            <Box>
              <Button variant="contained" onClick={backToApp}>
                {t('appMarketplace.appConnectorConfig.cancel')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </section>
    </main>
  )
}

export default AppConnectorConfig
