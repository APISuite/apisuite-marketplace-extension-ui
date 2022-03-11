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
} from '@apisuite/fe-base'
import {
  getAppConnectorConfigAction,
  getAppDetailsAction,
} from '../Marketplace/ducks'
import useStyles from './styles'
import appConnectorConfigSelector from './selector'
import { Alert } from '@material-ui/lab'

const AppConnectorConfig: React.FC = () => {
  const classes = useStyles()

  const { selectedAppDetails, appConnectorConfigDetails } = useSelector(
    appConnectorConfigSelector
  )

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
    appConnectorConfigDetails.data.workerStatus !== 'stopped'

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
            value={entry}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={2}>
          <Icon>arrowrightalt</Icon>
        </Grid>
        <Grid item xs={5}>
          <TextField
            label={t('appMarketplace.appConnectorConfig.apiField')}
            InputLabelProps={{
              shrink: true,
            }}
            name={entry}
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
                <Typography variant="h3">
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
              <Typography variant="h4">
                {t('appMarketplace.appConnectorConfig.apiEndpointTitle')}
              </Typography>
              <TextField
                id="api_endpoint"
                name="api_endpoint"
                InputLabelProps={{
                  shrink: true,
                }}
                variant="outlined"
                type="url"
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
          <Grid item xs={12}>
            <Grid container spacing={3}>
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
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Box>
              <Typography variant="h4">
                {t('appMarketplace.appConnectorConfig.connectionStatus')}
              </Typography>
              <Typography variant="body1">
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
          <Grid item xs={12}>
            <Box>
              <Button variant="contained" onClick={backToApp}>
                {t('appMarketplace.appConnectorConfig.back')}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </section>
    </main>
  )
}

export default AppConnectorConfig
