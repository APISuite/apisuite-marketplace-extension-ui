import React from 'react';
import { Box, Grid, TextField, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import { Controller } from 'react-hook-form';
import { isValidURL } from '../../util/formValidation';
import useStyles from '../MarketplaceAppSettings/styles';
export const ApplicationURL = ({ formUtil, data, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const { palette } = useTheme();
    const t = (string, ...args) => {
        return trans.t(`extensions.marketplace.${string}`, ...args);
    };
    const validateURI = (uri) => {
        const stringURI = uri ? uri.toString() : null;
        if (stringURI === null || stringURI.length === 0)
            return true;
        if (stringURI.length > 0) {
            try {
                new URL(stringURI);
                return isValidURL(stringURI);
            }
            catch {
                return false;
            }
        }
        return false;
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Grid, { container: true, spacing: 3 },
            React.createElement(Grid, { item: true, md: 12 },
                React.createElement(Grid, { item: true, md: 6 },
                    React.createElement(Box, { pb: 1.5 },
                        React.createElement(Typography, { variant: "h6", display: "block", gutterBottom: true }, t('appSettings.formSection.appURL.title'))),
                    React.createElement(Box, { pb: 5 },
                        React.createElement(Typography, { variant: "body2", display: "block", gutterBottom: true, style: { color: palette.text.secondary } }, t('appSettings.formSection.appURL.description'))))),
            React.createElement(Grid, { item: true, md: 12 },
                React.createElement(Box, { width: 1 },
                    React.createElement(Controller, { control: formUtil.control, defaultValue: data.directUrl || '', name: "directUrl", render: ({ field }) => (React.createElement(TextField, Object.assign({ className: classes.inputFields, error: !!formUtil.errors.directUrl }, field, { fullWidth: true, helperText: formUtil.errors.directUrl?.message, label: t('appSettings.appDirectURLFieldLabel'), margin: "dense", type: "text", variant: "outlined" }))), rules: {
                            validate: (value) => validateURI(value) || t('appSettings.invalidURL'),
                        } }))))));
};
