import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'
import {
  Typography,
  useTranslation,
  TextField,
  Grid,
  Icon,
  Button,
  Avatar,
  Box,
  useTheme,
} from '@apisuite/fe-base'
import {
  getAppConnectorConfigAction,
  getAppConnectorSubscriptionAction,
  getAppDetailsAction,
  subscribeAppConnectorAction,
  subscribeToMarketplaceAppAction,
  unsubscribeAppConnectorAction,
  unsubscribeToMarketplaceAppAction,
} from '../Marketplace/ducks'
import useStyles from './styles'
import appConnectorConfigSelector from './selector'
import { useQuery } from '../../util/useQuery'
import clsx from 'clsx'

const AppConnectorConfig: React.FC = () => {
  const classes = useStyles()

  const {
    selectedAppDetails,
    appConnectorConfigDetails,
    appConnectorSubscriptionDetails,
    appConnectorSubscribed,
    userProfile,
  } = useSelector(appConnectorConfigSelector)

  const dispatch = useDispatch()
  const { palette } = useTheme()
  const trans = useTranslation()

  const t = (string: string, ...args) => {
    return trans.t(`extensions.marketplace.${string}`, ...args)
  }

  const history = useHistory()

  // Retrieves the app's ID from the browser window's URL
  const { appID } = useParams<any>()
  const response = useQuery().get('response')
  const getSubscriptionStatus = () =>
    appConnectorConfigDetails.data.workerStatus !== 'stopped' &&
    appConnectorSubscribed &&
    appConnectorSubscriptionDetails &&
    appConnectorSubscriptionDetails.data &&
    appConnectorSubscriptionDetails.data.workerStatus &&
    appConnectorSubscriptionDetails.data.workerStatus !== 'stopped'

  const backToApp = () => {
    history.push(
      `${encodeURI('/marketplace/app-details/' + selectedAppDetails.id)}`
    )
  }
  const [appInitials, setAppInitials] = useState('...')

  useEffect(() => {
    const appInitialsArray = selectedAppDetails.name.split(' ')
    const appNameInitials =
      appInitialsArray.length >= 2
        ? `${appInitialsArray[0][0]}${appInitialsArray[1][0]}`
        : `${appInitialsArray[0][0]}${appInitialsArray[0][1]}`

    setAppInitials(appNameInitials)
  }, [selectedAppDetails])

  const [fieldValues, setFieldValues] = useState({
    apiUrl: '',
    polling_toggle: false,
  })
  const [isValid, setIsValid] = useState(false)
  const [variableValues, setVariableValues] = useState({})

  const renderFieldsRaw = (entries) => {
    return entries
      .filter((entry) => isFieldVisible(entry))
      .map((entry, index) => (
        <Box
          className={clsx(classes.tableEntry, {
            [classes.evenTableEntry]: index % 2 === 0,
            [classes.oddTableEntry]: index % 2 !== 0,
          })}
          key={`fieldMap${index}`}
        >
          <Box ml={2} mr={5} style={{ width: '50%' }}>
            <TextField
              label={t('appMarketplace.appConnectorConfig.appField')}
              InputLabelProps={{
                shrink: true,
              }}
              disabled={true}
              style={{
                width: 100 + '%',
                color: '#84878c !important',
              }}
              onChange={() => null}
              value={entry}
              variant="outlined"
            />
          </Box>
          <Box ml={2} mr={5} style={{ width: '50%' }}>
            <TextField
              label={t('appMarketplace.appConnectorConfig.apiField')}
              InputLabelProps={{
                shrink: true,
              }}
              style={{ width: 100 + '%' }}
              name={entry}
              value={fieldValues[entry] || ''}
              onChange={changeHandler}
              variant="outlined"
            />
          </Box>
        </Box>
      ))
  }

  const changeHandler = (changeEvent) => {
    const newFieldValues = { ...fieldValues }
    newFieldValues[changeEvent.target.name] = changeEvent.target.value
    setFieldValues(newFieldValues)
  }
  const changeVariablesHandler = (changeEvent) => {
    const newVariableValues = { ...variableValues }
    newVariableValues[changeEvent.target.name] = changeEvent.target.value
    setVariableValues(newVariableValues)
  }

  const removeSubscription = () => {
    const userID = parseInt(userProfile.id)
    const selectedAppID = selectedAppDetails.id

    dispatch(unsubscribeToMarketplaceAppAction(userID, selectedAppID))
    dispatch(unsubscribeAppConnectorAction(selectedAppDetails.name))
    history.push(
      `${encodeURI('/marketplace/app-details/' + selectedAppDetails.id)}`
    )
  }
  const saveSubscription = () => {
    if (!appConnectorSubscribed) {
      const userID = parseInt(userProfile.id)
      const selectedAppID = selectedAppDetails.id
      dispatch(subscribeToMarketplaceAppAction(userID, selectedAppID))
    }
    let apiUrl = fieldValues['apiUrl']
    if (
      appConnectorConfigDetails.data.variableValues &&
      appConnectorConfigDetails.data.variableValues.length > 0
    ) {
      apiUrl = appConnectorConfigDetails.data.apiUrl
      for (const variableValuesKey in variableValues) {
        apiUrl = apiUrl.replace(
          `{${variableValuesKey}}`,
          variableValues[variableValuesKey]
        )
      }
    }
    let token =
      (appConnectorSubscriptionDetails.data &&
        appConnectorSubscriptionDetails.data.appToken) ||
      ''
    if (response) {
      token = JSON.parse(response).token
    }
    const data = {
      app_name: appConnectorConfigDetails.data.name,
      api_name: selectedAppDetails.name,
      api_url: apiUrl,
      variables: { ...variableValues },
      map: {},
      appToken: token,
    }
    for (const entry of appConnectorConfigDetails.data.fieldsRaw) {
      if (fieldValues[entry]) {
        data.map[entry] = fieldValues[entry]
      } else {
        data.map[entry] = entry
      }
    }

    dispatch(
      subscribeAppConnectorAction(
        data.app_name,
        data.api_name,
        data.api_url,
        data.variables,
        data.map,
        data.appToken
      )
    )
  }

  useEffect(() => {
    const newVariableValues = { ...variableValues }
    const serverVariableValues =
      (appConnectorSubscriptionDetails.data &&
        appConnectorSubscriptionDetails.data.variablesValues) ||
      {}
    for (const variableValuesKey in serverVariableValues) {
      if (!newVariableValues[variableValuesKey])
        newVariableValues[variableValuesKey] =
          appConnectorSubscriptionDetails.data.variablesValues[
            variableValuesKey
          ]
    }
    setVariableValues(newVariableValues)
  }, [fieldValues])

  useEffect(() => {
    const serverVariableValues =
      (appConnectorConfigDetails.data &&
        appConnectorConfigDetails.data.variableValues) ||
      {}
    let valid = true
    for (const serverVariableValue of serverVariableValues) {
      if (
        !variableValues[serverVariableValue.key] ||
        variableValues[serverVariableValue.key] === ''
      ) {
        valid = false
        break
      }
    }
    setIsValid(valid)
  }, [variableValues])

  useEffect(() => {
    if (appID !== '') dispatch(getAppDetailsAction(appID))
  }, [appID])

  useEffect(() => {
    if (appID !== '') dispatch(getAppConnectorConfigAction(appID))
  }, [selectedAppDetails])

  useEffect(() => {
    if (selectedAppDetails && appConnectorConfigDetails)
      dispatch(
        getAppConnectorSubscriptionAction(
          appConnectorConfigDetails.data.name,
          selectedAppDetails.name
        )
      )
  }, [appConnectorConfigDetails])

  const getFieldValue = (entry) => {
    const mapConfig = appConnectorConfigDetails.data.fieldsMapping.filter(
      (element) => element.fieldIn === entry
    )
    if (
      appConnectorSubscribed &&
      appConnectorSubscriptionDetails &&
      appConnectorSubscriptionDetails.data &&
      appConnectorSubscriptionDetails.data.fieldMapping &&
      appConnectorSubscriptionDetails.data.fieldMapping[entry]
    ) {
      return appConnectorSubscriptionDetails.data.fieldMapping[entry]
    } else if (mapConfig && mapConfig[0]) {
      return mapConfig[0].fieldOut
    }
    return ''
  }

  const isFieldVisible = (entry) => {
    const mapConfig = appConnectorConfigDetails.data.fieldsMapping.filter(
      (element) => element.fieldIn === entry
    )
    if (mapConfig && mapConfig[0]) {
      return mapConfig[0].editable
    }
    return false
  }

  useEffect(() => {
    const newFieldValues = { ...fieldValues }
    newFieldValues['apiUrl'] =
      (appConnectorSubscribed &&
        appConnectorSubscriptionDetails.data &&
        appConnectorSubscriptionDetails.data.apiUrl) ||
      appConnectorConfigDetails.data.apiUrl ||
      ''

    for (const entry of appConnectorConfigDetails.data.fieldsRaw) {
      newFieldValues[entry] = getFieldValue(entry)
    }
    newFieldValues['polling_status'] = getSubscriptionStatus()
    setFieldValues(newFieldValues)
  }, [appConnectorSubscriptionDetails, appConnectorConfigDetails])
  return (
    <main>
      <section className={classes.appDetailsContainer}>
        <section className={classes.leftAppDetailsContainer}>
          <div className={classes.topMostSubSection}>
            {selectedAppDetails && selectedAppDetails.logo !== '' ? (
              <img className={classes.appImage} src={selectedAppDetails.logo} />
            ) : (
              <Avatar className={classes.appAvatar}>{appInitials}</Avatar>
            )}
          </div>
        </section>
        <section className={classes.rightAppDetailsContainer}>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Typography variant="h3" style={{ marginBottom: 8 + 'px' }}>
                {t('appMarketplace.appConnectorConfig.title', {
                  appName: selectedAppDetails.name,
                })}
              </Typography>
              <Typography
                variant="subtitle1"
                style={{ marginBottom: 40 + 'px' }}
              >
                {t('appMarketplace.appConnectorConfig.description', {
                  appName: selectedAppDetails.name,
                })}
              </Typography>
            </Grid>
            {!appConnectorConfigDetails.data.variableValues ||
            appConnectorConfigDetails.data.variableValues.length == 0 ? (
              <>
                <Grid item xs={12}>
                  <Typography variant="h6" style={{ marginBottom: 8 + 'px' }}>
                    {t('appMarketplace.appConnectorConfig.apiEndpointTitle')}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    style={{ marginBottom: 8 + 'px' }}
                  >
                    {t(
                      'appMarketplace.appConnectorConfig.apiEndpointDescription',
                      {
                        appName: selectedAppDetails.name,
                      }
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="api_endpoint"
                    name="apiUrl"
                    InputLabelProps={{
                      shrink: true,
                    }}
                    style={{ width: 80 + '%' }}
                    variant="outlined"
                    type="url"
                    required={true}
                    onChange={changeHandler}
                    value={fieldValues['apiUrl']}
                    disabled={appConnectorConfigDetails.data.apiUrl !== ''}
                    placeholder="https://example.com"
                    label={t(
                      'appMarketplace.appConnectorConfig.apiEndpointLabel'
                    )}
                  />
                </Grid>
              </>
            ) : (
              <>
                <Grid item xs={12}>
                  <Typography variant="h6" style={{ marginBottom: 8 + 'px' }}>
                    {t('appMarketplace.appConnectorConfig.dataVariablesTitle')}
                  </Typography>
                  <Typography variant="subtitle1">
                    {t(
                      'appMarketplace.appConnectorConfig.dataVariablesDescription'
                    )}
                  </Typography>
                </Grid>
                {appConnectorConfigDetails.data.variableValues.map(
                  (element, index) => (
                    <Grid key={`item${index}`} item xs={12}>
                      <TextField
                        name={element.key}
                        InputLabelProps={{
                          shrink: true,
                        }}
                        style={{ width: 80 + '%' }}
                        variant="outlined"
                        onChange={changeVariablesHandler}
                        value={variableValues[element.key]}
                        helperText={element.description}
                        label={element.friendlyName}
                        required={true}
                        fullWidth
                      />
                    </Grid>
                  )
                )}
              </>
            )}

            {(appConnectorConfigDetails.data.fieldsRaw || []).filter((entry) =>
              isFieldVisible(entry)
            ).length > 0 && (
              <>
                <Grid item xs={12}>
                  <Typography variant="h6" style={{ marginBottom: 8 + 'px' }}>
                    {t('appMarketplace.appConnectorConfig.fieldMatching')}
                  </Typography>
                  <Typography variant="subtitle1">
                    {t(
                      'appMarketplace.appConnectorConfig.fieldMatchingDescription',
                      {
                        appName: selectedAppDetails.name,
                      }
                    )}
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Box className={classes.customTableHeader}>
                    <Box ml={2} mr={5} style={{ width: '50%' }}>
                      <Typography
                        style={{ color: palette.text.secondary }}
                        variant="body1"
                      >
                        {t('appMarketplace.appConnectorConfig.appFields', {
                          appName: selectedAppDetails.name,
                        })}
                      </Typography>
                    </Box>
                    <Box ml={2} mr={5} style={{ width: '50%' }}>
                      <Typography
                        style={{ color: palette.text.secondary }}
                        variant="body1"
                      >
                        {t('appMarketplace.appConnectorConfig.apiFields')}
                      </Typography>
                    </Box>
                  </Box>
                  {renderFieldsRaw(
                    appConnectorConfigDetails.data.fieldsRaw || []
                  )}
                </Grid>
              </>
            )}
            <Grid item xs={10}>
              <Button
                variant="contained"
                style={{
                  backgroundColor: isValid ? '#32C896' : palette.grey[50],
                  borderColor: '#32C896',
                  marginRight: '8px',
                  color: isValid ? '#FFFFFF' : palette.grey[300],
                }}
                onClick={saveSubscription}
                disabled={!isValid}
              >
                {t(
                  appConnectorSubscribed
                    ? 'appMarketplace.appConnectorConfig.save'
                    : 'appMarketplace.appDetails.appConnectButton'
                )}
              </Button>
              {appConnectorSubscribed && (
                <Button
                  variant="outlined"
                  onClick={removeSubscription}
                  startIcon={<Icon>link_off</Icon>}
                >
                  {t('appMarketplace.appDetails.appAlreadyConnectedButton')}
                </Button>
              )}
            </Grid>
            <Grid item xs={2}>
              <Button variant="outlined" onClick={backToApp}>
                {t('appMarketplace.appConnectorConfig.cancel')}
              </Button>
            </Grid>
          </Grid>
        </section>
      </section>
    </main>
  )
}

export default AppConnectorConfig
