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
import appDetails from '../AppDetails'

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
            value={
              (appConnectorSubscribed &&
                appConnectorSubscriptionDetails.data.fieldMapping[entry]) ||
              ''
            }
            variant="outlined"
          />
        </Grid>
      </React.Fragment>
    ))
  }

  /* Triggers the retrieval and storage (on the app's Store, under 'marketplace > selectedAppDetails')
  of all information we presently have on the currently selected marketplace app. */
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
  }, [appDetails, appConnectorConfigDetails])

  /* The following effect code will check if the currently selected app is one that
  the user's already subscribed to. */

  // 3. Currently selected Marketplace app's details logic

  const isURLEmpty = (providedURL: string) => {
    return providedURL === null || providedURL === ''
  }

  // 4. 'More (Marketplace apps) from publisher' section logic

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
                <Alert severity="success">
                  {t('appMarketplace.appConnectorConfig.alerts.upToDate', {
                    appName: selectedAppDetails.name,
                  })}
                </Alert>
                <Alert severity="warning">
                  {t('appMarketplace.appConnectorConfig.alerts.outdated', {
                    appName: selectedAppDetails.name,
                  })}
                </Alert>
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
                name="api_endpoint"
                InputLabelProps={{
                  shrink: true,
                }}
                style={{ width: 80 + '%' }}
                variant="outlined"
                type="url"
                value={
                  (appConnectorSubscribed &&
                    appConnectorSubscriptionDetails.data.apiUrl) ||
                  ''
                }
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
                    name="checkedA"
                    checked={getSubscriptionStatus()}
                    disabled={
                      appConnectorConfigDetails.data.workerStatus !== 'stopped'
                    }
                  />
                }
                label={t(
                  getSubscriptionStatus()
                    ? 'appMarketplace.appConnectorConfig.connectionOff'
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
