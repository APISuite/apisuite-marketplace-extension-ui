import React, { useEffect, useState } from 'react';
import { Box, FormControl, FormControlLabel, Grid, Radio, RadioGroup, TextField, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import clsx from 'clsx';
import { Controller } from 'react-hook-form';
import { isValidURL } from '../../util/formValidation';
import useStyles from './styles';
const MarketplaceAppSettings = ({ formUtil, data, userRole, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const { palette } = useTheme();
    const t = (string, ...args) => {
        return trans.t(`extensions.marketplace.${string}`, ...args);
    };
    const adminRole = 'admin';
    const [appVisibility, setAppVisibility] = useState('private');
    const validateURI = (uri) => {
        const stringURI = uri ? uri.toString() : null;
        if (stringURI === null || stringURI.length === 0)
            return true;
        if (stringURI.length > 0)
            return isValidURL(stringURI);
        return false;
    };
    useEffect(() => {
        setAppVisibility(data.visibility || 'private');
    }, [data]);
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
                    React.createElement(Controller, { control: formUtil.control, name: "appDirectURL", render: ({ field }) => (React.createElement(TextField, Object.assign({ className: classes.inputFields, error: !!formUtil.errors.appDirectURL }, field, { fullWidth: true, helperText: formUtil.errors.appDirectURL?.message, label: t('appSettings.appDirectURLFieldLabel'), margin: "dense", type: "text", variant: "outlined" }))), rules: {
                            validate: (value) => validateURI(value) || t('appSettings.invalidURL'),
                        } })),
                React.createElement(Box, { width: 1 },
                    React.createElement(Controller, { control: formUtil.control, name: "appLabels", render: ({ field }) => (React.createElement(TextField, Object.assign({ className: clsx(classes.inputFields, {
                                [classes.disabledInputField]: userRole !== adminRole,
                            }), disabled: userRole !== adminRole }, field, { fullWidth: true, helperText: t('appSettings.labelsFieldHelperText'), label: t('appSettings.labelsFieldLabel'), margin: "dense", type: "text", variant: "outlined" }))) }))),
            React.createElement(Grid, { item: true, md: 6 },
                React.createElement(Controller, { control: formUtil.control, name: "appVisibility", render: ({ field }) => (React.createElement(FormControl, { component: "fieldset" },
                        React.createElement(RadioGroup, { "aria-label": "app visibility", name: "appVisibility" },
                            React.createElement(Box, { className: classes.appVisibilityContainer, flexDirection: "column", onClick: () => {
                                    formUtil.setValue('appVisibility', 'private', {
                                        shouldDirty: appVisibility === 'public',
                                    });
                                    setAppVisibility('private');
                                }, mb: 1.5, p: 1 },
                                React.createElement(Box, null,
                                    React.createElement(FormControlLabel, Object.assign({ checked: appVisibility === 'private', control: React.createElement(Radio, { color: "primary" }) }, field, { label: t('appSettings.privateMarketplaceAppTitle'), labelPlacement: "end", value: "private" }))),
                                React.createElement(Box, { pl: 3.75, pb: 1.5 },
                                    React.createElement(Typography, { variant: "body2", display: "block", style: { color: palette.text.secondary } }, t('appSettings.privateMarketplaceAppSubtitle')))),
                            React.createElement(Box, { className: classes.appVisibilityContainer, flexDirection: "column", onClick: () => {
                                    formUtil.setValue('appVisibility', 'public', {
                                        shouldDirty: appVisibility === 'private',
                                    });
                                    setAppVisibility('public');
                                }, mb: 1.5, p: 1 },
                                React.createElement(Box, null,
                                    React.createElement(FormControlLabel, Object.assign({ checked: appVisibility === 'public', control: React.createElement(Radio, { color: "primary" }) }, field, { label: t('appSettings.publicMarketplaceAppTitle'), labelPlacement: "end", value: "public" }))),
                                React.createElement(Box, { pl: 3.75, pb: 1.5 },
                                    React.createElement(Typography, { variant: "body2", display: "block", style: { color: palette.text.secondary } }, t('appSettings.publicMarketplaceAppSubtitle'))))))) }))),
        React.createElement("hr", { className: classes.sectionSeparator })));
};
export default MarketplaceAppSettings;
