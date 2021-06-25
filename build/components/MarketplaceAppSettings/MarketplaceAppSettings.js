import React, { useEffect, useState } from 'react';
import { Box, Grid, TextField, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import clsx from 'clsx';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import useStyles from './styles';
const MarketplaceAppSettings = ({ formState, handleAppVisibility, handleChange, userRole, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const { palette } = useTheme();
    const t = (string, ...args) => {
        return trans.t(`extensions.marketplace.${string}`, ...args);
    };
    const adminRole = 'admin';
    const [appVisibility, setAppVisibility] = useState('');
    const [appDirectURL, setAppDirectURL] = useState('');
    const [appLabels, setAppLabels] = useState('');
    useEffect(() => {
        setAppVisibility(formState.values.appVisibility);
        setAppDirectURL(formState.values.appDirectURL);
        setAppLabels(formState.values.appLabels);
    }, [formState]);
    return (React.createElement(React.Fragment, null,
        React.createElement(Grid, { container: true, spacing: 3 },
            React.createElement(Grid, { item: true, md: 12 },
                React.createElement(Grid, { item: true, md: 6 },
                    React.createElement(Box, { pb: 1.5 },
                        React.createElement(Typography, { variant: "h6", display: "block", gutterBottom: true }, t('appSettings.marketplaceSettingsSubSectionTitle'))),
                    React.createElement(Box, { pb: 5 },
                        React.createElement(Typography, { variant: "body2", display: "block", gutterBottom: true, style: { color: palette.text.secondary } }, t('appSettings.appLabelsSubSectionDescription'))))),
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(Box, { width: 1 },
                    React.createElement(TextField, { className: classes.inputFields, error: formState.errors.appDirectURL, fullWidth: true, helperText: formState.errors.appDirectURL
                            ? formState.errorMsgs.appDirectURL
                            : '', label: t('appSettings.appDirectURLFieldLabel'), margin: "dense", name: "appDirectURL", onChange: handleChange, type: "text", value: appDirectURL, variant: "outlined" })),
                React.createElement(Box, { width: 1 },
                    React.createElement(TextField, { className: clsx(classes.inputFields, {
                            [classes.disabledInputField]: userRole !== adminRole,
                        }), disabled: userRole !== adminRole, fullWidth: true, helperText: t('appSettings.labelsFieldHelperText'), label: t('appSettings.labelsFieldLabel'), margin: "dense", name: "appLabels", onChange: handleChange, type: "text", value: appLabels, variant: "outlined" }))),
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(Box, { className: classes.appVisibilityContainer, onClick: () => {
                        handleAppVisibility('private');
                        setAppVisibility('private');
                    }, mb: 1.5, p: 1 },
                    appVisibility === 'private' ? (React.createElement(RadioButtonCheckedRoundedIcon, { className: classes.selectedAppVisibilityIcon })) : (React.createElement(RadioButtonUncheckedRoundedIcon, { className: classes.notSelectedAppVisibilityIcon })),
                    React.createElement(Box, null,
                        React.createElement(Box, { pb: 1.5 },
                            React.createElement(Typography, { variant: "body2", display: "block" }, t('appSettings.privateMarketplaceAppTitle'))),
                        React.createElement(Box, { pb: 1.5 },
                            React.createElement(Typography, { variant: "body2", display: "block", style: { color: palette.text.secondary } }, t('appSettings.privateMarketplaceAppSubtitle'))))),
                React.createElement(Box, { className: classes.appVisibilityContainer, onClick: () => {
                        handleAppVisibility('public');
                        setAppVisibility('public');
                    }, mb: 1.5, p: 1 },
                    appVisibility === 'public' ? (React.createElement(RadioButtonCheckedRoundedIcon, { className: classes.selectedAppVisibilityIcon })) : (React.createElement(RadioButtonUncheckedRoundedIcon, { className: classes.notSelectedAppVisibilityIcon })),
                    React.createElement(Box, null,
                        React.createElement(Box, { pb: 1.5 },
                            React.createElement(Typography, { variant: "body2", display: "block" }, t('appSettings.publicMarketplaceAppTitle'))),
                        React.createElement(Box, { pb: 1.5 },
                            React.createElement(Typography, { variant: "body2", display: "block", style: { color: palette.text.secondary } }, t('appSettings.publicMarketplaceAppSubtitle'))))))),
        React.createElement("hr", { className: classes.sectionSeparator })));
};
export default MarketplaceAppSettings;
