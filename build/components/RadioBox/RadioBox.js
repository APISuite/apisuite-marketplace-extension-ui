import React from 'react';
import { Box, FormControlLabel, Radio, Typography, useTheme, } from '@apisuite/fe-base';
import clsx from 'clsx';
import useStyles from './styles';
export const RadioBox = ({ description, disabled = false, label, selected, value, onClick, ...rest }) => {
    const classes = useStyles();
    const { palette } = useTheme();
    return (React.createElement(Box, { className: clsx(classes.radioBox, { [classes.enabled]: !disabled }), onClick: !disabled ? onClick : undefined },
        React.createElement(FormControlLabel, Object.assign({ control: React.createElement(Radio, { color: "primary" }), checked: value === selected, disabled: disabled, label: label, labelPlacement: "end" }, rest, { value: value })),
        description && (React.createElement(Box, { mb: 1, ml: 4, mr: 2 },
            React.createElement(Typography, { style: { color: !disabled ? palette.label : palette.grey[200] }, variant: "caption" }, description)))));
};
