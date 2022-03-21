import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import { Box, Typography, useTranslation, TextField, Grid, Icon, Switch, FormControlLabel, Button, Divider, } from '@apisuite/fe-base';
import { getAppConnectorConfigAction, getAppConnectorSubscriptionAction, getAppDetailsAction, setPoolingStatusAction, subscribeAppConnectorAction, } from '../Marketplace/ducks';
import useStyles from './styles';
import appConnectorConfigSelector from './selector';
import { Alert } from '@material-ui/lab';
const AppConnectorConfig = () => {
    const classes = useStyles();
    const { selectedAppDetails, appConnectorConfigDetails, appConnectorSubscriptionDetails, appConnectorSubscribed, } = useSelector(appConnectorConfigSelector);
    const dispatch = useDispatch();
    const trans = useTranslation();
    const t = (string, ...args) => {
        return trans.t(`extensions.marketplace.${string}`, ...args);
    };
    const history = useHistory();
    // Retrieves the app's ID from the browser window's URL
    const { appID } = useParams();
    const getSubscriptionStatus = () => appConnectorConfigDetails.data.workerStatus !== 'stopped' &&
        appConnectorSubscribed &&
        appConnectorSubscriptionDetails &&
        appConnectorSubscriptionDetails.data &&
        appConnectorSubscriptionDetails.data.workerStatus &&
        appConnectorSubscriptionDetails.data.workerStatus !== 'stopped';
    const backToApp = () => {
        history.push(`${encodeURI('/marketplace/app-details/' + selectedAppDetails.id)}`);
    };
    const [fieldValues, setFieldValues] = useState({
        apiUrl: '',
        polling_toggle: false,
    });
    const renderFieldsRaw = (entries) => {
        return entries.map((entry, key) => (React.createElement(React.Fragment, { key: key },
            React.createElement(Grid, { item: true, xs: 5 },
                React.createElement(TextField, { label: t('appMarketplace.appConnectorConfig.appField'), InputLabelProps: {
                        shrink: true,
                    }, disabled: true, style: {
                        width: 100 + '%',
                        color: '#84878c !important',
                    }, onChange: () => null, value: entry, variant: "outlined" })),
            React.createElement(Grid, { item: true, xs: 2 },
                React.createElement(Icon, { style: {
                        width: 100 + '%',
                        height: 100 + '%',
                        textAlign: 'center',
                        lineHeight: 50 + 'px',
                        color: '#62acee',
                    } }, "arrow_right_alt")),
            React.createElement(Grid, { item: true, xs: 5 },
                React.createElement(TextField, { label: t('appMarketplace.appConnectorConfig.apiField'), InputLabelProps: {
                        shrink: true,
                    }, style: { width: 100 + '%' }, name: entry, value: fieldValues[entry] || '', onChange: changeHandler, variant: "outlined" })))));
    };
    const changeHandler = (changeEvent) => {
        const newFieldValues = { ...fieldValues };
        newFieldValues[changeEvent.target.name] = changeEvent.target.value;
        setFieldValues(newFieldValues);
    };
    const updatePollingStatus = (changeEvent) => {
        const newValues = { ...fieldValues };
        newValues['polling_toggle'] = changeEvent.target.checked;
        const postValues = {
            app_name: appConnectorConfigDetails.data.name,
            api_name: selectedAppDetails.name,
            command: changeEvent.target.checked ? 'start' : 'stop',
        };
        dispatch(setPoolingStatusAction(postValues.app_name, postValues.api_name, postValues.command));
        setFieldValues(newValues);
    };
    const saveSubscription = () => {
        const data = {
            app_name: appConnectorConfigDetails.data.name,
            api_name: selectedAppDetails.name,
            api_url: fieldValues['apiUrl'],
            map: {},
        };
        for (const entry of appConnectorConfigDetails.data.fieldsRaw) {
            if (fieldValues[entry])
                data.map[entry] = fieldValues[entry];
        }
        dispatch(subscribeAppConnectorAction(data.app_name, data.api_name, data.api_url, data.map));
    };
    const mappingIsOutdated = () => {
        const currentMapping = (appConnectorSubscribed &&
            appConnectorSubscriptionDetails &&
            appConnectorSubscriptionDetails.data &&
            appConnectorSubscriptionDetails.data.fieldMapping) ||
            {};
        for (const currentMappingKey in currentMapping) {
            if (appConnectorConfigDetails.data.fieldsRaw.indexOf(currentMappingKey) ==
                -1)
                return true;
        }
        return false;
    };
    useEffect(() => {
        if (appID !== '')
            dispatch(getAppDetailsAction(appID));
    }, [appID]);
    useEffect(() => {
        if (appID !== '')
            dispatch(getAppConnectorConfigAction(appID));
    }, [selectedAppDetails]);
    useEffect(() => {
        if (selectedAppDetails && appConnectorConfigDetails)
            dispatch(getAppConnectorSubscriptionAction(appConnectorConfigDetails.data.name, selectedAppDetails.name));
    }, [appConnectorConfigDetails]);
    useEffect(() => {
        const newFieldValues = { ...fieldValues };
        newFieldValues['apiUrl'] =
            (appConnectorSubscribed &&
                appConnectorSubscriptionDetails.data &&
                appConnectorSubscriptionDetails.data.apiUrl) ||
                '';
        for (const entry of appConnectorConfigDetails.data.fieldsRaw) {
            newFieldValues[entry] =
                (appConnectorSubscribed &&
                    appConnectorSubscriptionDetails &&
                    appConnectorSubscriptionDetails.data &&
                    appConnectorSubscriptionDetails.data.fieldMapping &&
                    appConnectorSubscriptionDetails.data.fieldMapping[entry]) ||
                    '';
        }
        newFieldValues['polling_status'] = getSubscriptionStatus();
        setFieldValues(newFieldValues);
    }, [appConnectorSubscriptionDetails]);
    return (React.createElement("main", null,
        React.createElement("section", { className: classes.appDetailsContainer },
            React.createElement(Grid, { container: true, spacing: 3 },
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Grid, { container: true, spacing: 3 },
                        React.createElement(Grid, { item: true, xs: 8 },
                            React.createElement(Typography, { variant: "h3", style: { marginBottom: 8 + 'px' } }, t('appMarketplace.appConnectorConfig.title', {
                                appName: selectedAppDetails.name,
                            })),
                            React.createElement(Typography, { variant: "body1" }, t('appMarketplace.appConnectorConfig.description', {
                                appName: selectedAppDetails.name,
                            }))),
                        React.createElement(Grid, { item: true, xs: 4 }, (appConnectorConfigDetails &&
                            appConnectorConfigDetails.data.workerStatus == 'stopped' && (React.createElement(Alert, { severity: "error" }, t('appMarketplace.appConnectorConfig.alerts.workerOffline', {
                            appName: selectedAppDetails.name,
                        })))) ||
                            (appConnectorSubscribed &&
                                ((mappingIsOutdated() && (React.createElement(Alert, { severity: "warning" }, t('appMarketplace.appConnectorConfig.alerts.outdated', {
                                    appName: selectedAppDetails.name,
                                })))) || (React.createElement(Alert, { severity: "success" }, t('appMarketplace.appConnectorConfig.alerts.upToDate', {
                                    appName: selectedAppDetails.name,
                                })))))))),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Box, null,
                        React.createElement(Typography, { variant: "h4", style: { marginBottom: 8 + 'px' } }, t('appMarketplace.appConnectorConfig.apiEndpointTitle')),
                        React.createElement(TextField, { id: "api_endpoint", name: "apiUrl", InputLabelProps: {
                                shrink: true,
                            }, style: { width: 80 + '%' }, variant: "outlined", type: "url", onChange: changeHandler, value: fieldValues['apiUrl'], placeholder: "https://example.com", label: t('appMarketplace.appConnectorConfig.apiEndpointLabel') }))),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Box, null,
                        React.createElement(Typography, { variant: "h4" }, t('appMarketplace.appConnectorConfig.fieldMatching')),
                        React.createElement(Typography, { variant: "body1" }, t('appMarketplace.appConnectorConfig.fieldMatchingDescription', {
                            appName: selectedAppDetails.name,
                        })))),
                React.createElement(Grid, { item: true, xs: 5 },
                    React.createElement(Typography, { variant: "body1" }, t('appMarketplace.appConnectorConfig.appFields', {
                        appName: selectedAppDetails.name,
                    }))),
                React.createElement(Grid, { item: true, xs: 2 }),
                React.createElement(Grid, { item: true, xs: 5 },
                    React.createElement(Typography, { variant: "body1" }, t('appMarketplace.appConnectorConfig.apiFields'))),
                renderFieldsRaw(appConnectorConfigDetails.data.fieldsRaw),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Button, { variant: "contained", style: { backgroundColor: '#32C896', borderColor: '#32C896' }, onClick: saveSubscription }, t('appMarketplace.appConnectorConfig.save'))),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Divider, { variant: "middle" })),
                React.createElement(Grid, { item: true, xs: 12 },
                    React.createElement(Box, null,
                        React.createElement(Typography, { variant: "h4", style: { marginBottom: 8 + 'px' } }, t('appMarketplace.appConnectorConfig.connectionStatus')),
                        React.createElement(Typography, { variant: "body1", style: { marginBottom: 8 + 'px' } }, t('appMarketplace.appConnectorConfig.connectionStatusDescription')),
                        React.createElement(FormControlLabel, { control: React.createElement(Switch, { name: "polling_toggle", checked: fieldValues['polling_toggle'], disabled: appConnectorConfigDetails.data.workerStatus == 'stopped', onChange: updatePollingStatus }), label: t(fieldValues['polling_toggle']
                                ? 'appMarketplace.appConnectorConfig.connectionOn'
                                : 'appMarketplace.appConnectorConfig.connectionOff') }))),
                React.createElement(Grid, { item: true, xs: 10 }),
                React.createElement(Grid, { item: true, xs: 2 },
                    React.createElement(Box, null,
                        React.createElement(Button, { variant: "contained", onClick: backToApp }, t('appMarketplace.appConnectorConfig.cancel'))))))));
};
export default AppConnectorConfig;
