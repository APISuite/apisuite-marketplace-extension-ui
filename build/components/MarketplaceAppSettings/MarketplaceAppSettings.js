import React, { useEffect, useState } from 'react';
import { Box, Chip, FormControl, Grid, RadioGroup, TextField, Typography, useTheme, useTranslation, } from '@apisuite/fe-base';
import clsx from 'clsx';
import { Controller, useFieldArray } from 'react-hook-form';
import { RadioBox } from '../RadioBox';
import { Visibility } from './types';
import useStyles from './styles';
const MarketplaceAppSettings = ({ formUtil, data, userRole, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const { palette, shape, spacing } = useTheme();
    const t = (string, ...args) => {
        return trans.t(`extensions.marketplace.${string}`, ...args);
    };
    // FIXME this role should come from a common place
    const adminRole = 'admin';
    const [visibility, setAppVisibility] = useState(Visibility.PRIVATE);
    const [labels, setLabels] = useState([]);
    const [label, setLabel] = useState('');
    const { append, fields, remove } = useFieldArray({
        name: 'labels',
        control: formUtil.control,
    });
    useEffect(() => {
        const vi = formUtil.getValues('visibility');
        const lb = formUtil.getValues('labels');
        if (!lb) {
            formUtil.register('labels');
        }
        if (!vi) {
            formUtil.register('visibility', { required: true });
        }
        if (!Array.isArray(lb) || !lb.length) {
            if (data.labels &&
                data.labels.length &&
                JSON.stringify(data.labels) !== JSON.stringify(labels)) {
                append(data.labels);
                setLabels(data.labels);
            }
        }
    }, [data, formUtil]);
    useEffect(() => {
        formUtil.setValue('visibility', data.visibility || Visibility.PRIVATE);
        setAppVisibility(data.visibility || Visibility.PRIVATE);
    }, [data]);
    const handleVisibilityChange = (event) => {
        setAppVisibility(event.target.value);
    };
    const handleTag = (e) => {
        const labelTags = e.target.value;
        const tags = labelTags
            .split(',')
            .map((l) => l.trim())
            .filter(Boolean);
        if (labelTags.split(',').length > 1 && tags.length > 0) {
            append(tags[0]);
            setLabel('');
        }
        else {
            setLabel(labelTags);
        }
    };
    const checkIfEnter = (keyPressEvent) => {
        if (keyPressEvent.key !== 'Enter')
            return;
        // If the 'Enter' key is pressed while typing a label, we append said label to our set of labels
        append(label);
        setLabel('');
    };
    return (React.createElement(React.Fragment, null,
        React.createElement(Grid, { container: true, spacing: 3 },
            React.createElement(Grid, { item: true, md: 12 },
                React.createElement(Grid, { item: true, md: 6 },
                    React.createElement(Box, { pb: 1.5 },
                        React.createElement(Typography, { variant: "h6", display: "block", gutterBottom: true }, t('appSettings.labelsFieldLabel'))))),
            React.createElement(Grid, { item: true, md: 12 },
                React.createElement(Box, { width: 1 },
                    React.createElement("fieldset", { className: clsx(classes.inputFields, {
                            [classes.disabledLabels]: userRole !== adminRole,
                        }), style: {
                            border: `1px solid ${palette.divider}`,
                            borderRadius: shape.borderRadius,
                            marginBottom: spacing(1),
                        } },
                        React.createElement("legend", null,
                            React.createElement(Typography, { style: { color: palette.label }, variant: "caption" }, t('appSettings.labelsFieldLabel'))),
                        fields.map((field, index) => (React.createElement(Chip, { color: "secondary", disabled: userRole !== adminRole, key: field.id, label: formUtil.getValues(`labels.${index}`), onDelete: () => remove(index), style: { margin: spacing(1) } }))),
                        React.createElement(TextField, { className: clsx(classes.inputFields, {
                                [classes.disabledInputField]: userRole !== adminRole,
                            }), color: "secondary", disabled: userRole !== adminRole, fullWidth: true, InputProps: {
                                disableUnderline: true,
                            }, margin: "dense", onChange: handleTag, onKeyPress: checkIfEnter, style: { marginBottom: spacing(1) }, type: "text", value: label, variant: "standard" })),
                    React.createElement("legend", { style: { marginBottom: spacing(3) } },
                        React.createElement(Typography, { style: { color: palette.label }, variant: "caption" }, t('appSettings.labelsFieldHelperText'))))),
            React.createElement(Grid, { container: true, item: true },
                React.createElement(Grid, { container: true, item: true, md: 12 },
                    React.createElement(Grid, { item: true, md: 6 },
                        React.createElement(Box, { pb: 1.5 },
                            React.createElement(Typography, { variant: "h6", display: "block", gutterBottom: true },
                                t('appSettings.marketplaceSettings.visibility.title'),
                                " *"))),
                    React.createElement(Grid, { item: true, md: 6 },
                        React.createElement(Box, { pb: 5 },
                            React.createElement(Typography, { variant: "body2", display: "block", gutterBottom: true, style: { color: palette.text.secondary } }, t('appSettings.marketplaceSettings.visibility.description'))))),
                React.createElement(Grid, { item: true, md: 12 },
                    React.createElement(Controller, { control: formUtil.control, defaultValue: Visibility.PRIVATE, name: "visibility", render: ({ field }) => (React.createElement(FormControl, { component: "fieldset", style: { width: '100%' } },
                            React.createElement(RadioGroup, { "aria-label": "app visibility", name: "visibility", onChange: handleVisibilityChange, style: {
                                    flexDirection: 'row',
                                    justifyContent: 'space-between',
                                }, value: visibility },
                                React.createElement(RadioBox, Object.assign({ description: t('appSettings.privateMarketplaceAppSubtitle'), label: t('appSettings.privateMarketplaceAppTitle') }, field, { onClick: () => {
                                        formUtil.setValue('visibility', Visibility.PRIVATE, {
                                            shouldDirty: visibility === Visibility.PUBLIC,
                                        });
                                        setAppVisibility(Visibility.PRIVATE);
                                    }, selected: visibility, value: Visibility.PRIVATE })),
                                React.createElement(RadioBox, Object.assign({ description: t('appSettings.publicMarketplaceAppSubtitle') }, field, { label: t('appSettings.publicMarketplaceAppTitle'), onClick: () => {
                                        formUtil.setValue('visibility', Visibility.PUBLIC, {
                                            shouldDirty: visibility === Visibility.PRIVATE,
                                        });
                                        setAppVisibility(Visibility.PUBLIC);
                                    }, selected: visibility, value: Visibility.PUBLIC }))))), rules: { required: true } })))),
        React.createElement("hr", { className: classes.sectionSeparator })));
};
export default MarketplaceAppSettings;
