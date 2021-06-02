import React, { useEffect, useState } from 'react';
import { TextField, useTranslation } from '@apisuite/fe-base';
import clsx from 'clsx';
import RadioButtonCheckedRoundedIcon from '@material-ui/icons/RadioButtonCheckedRounded';
import RadioButtonUncheckedRoundedIcon from '@material-ui/icons/RadioButtonUncheckedRounded';
import useStyles from './styles';
const MarketplaceAppVisibility = ({ formState, handleAppVisibility, handleChange, userRole, }) => {
    const classes = useStyles();
    const trans = useTranslation();
    const t = (string, ...args) => {
        return trans.t(`extensions.marketplace.${string}`, ...args);
    };
    const [appVisibility, setAppVisibility] = useState('');
    const [appLabels, setAppLabels] = useState('');
    useEffect(() => {
        setAppVisibility(formState.values.appVisibility);
        setAppLabels(formState.values.appLabels);
    }, [appLabels, appVisibility, formState]);
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { className: classes.sectionContainer },
            React.createElement("div", { className: classes.leftSubSectionContainer },
                React.createElement("p", { className: classes.marketplaceSettingsSubSectionTitle }, t('appSettings.marketplaceSettingsSubSectionTitle')),
                React.createElement("div", { className: classes.appVisibilityContainer, onClick: () => {
                        handleAppVisibility('private');
                        setAppVisibility('private');
                    } },
                    appVisibility === 'private' ? (React.createElement(RadioButtonCheckedRoundedIcon, { className: classes.selectedAppVisibilityIcon })) : (React.createElement(RadioButtonUncheckedRoundedIcon, { className: classes.notSelectedAppVisibilityIcon })),
                    React.createElement("div", { className: classes.appVisibilityText },
                        React.createElement("p", null, t('appSettings.privateMarketplaceAppTitle')),
                        React.createElement("p", null, t('appSettings.privateMarketplaceAppSubtitle')))),
                React.createElement("div", { className: classes.appVisibilityContainer, onClick: () => {
                        handleAppVisibility('public');
                        setAppVisibility('public');
                    } },
                    appVisibility === 'public' ? (React.createElement(RadioButtonCheckedRoundedIcon, { className: classes.selectedAppVisibilityIcon })) : (React.createElement(RadioButtonUncheckedRoundedIcon, { className: classes.notSelectedAppVisibilityIcon })),
                    React.createElement("div", { className: classes.appVisibilityText },
                        React.createElement("p", null, t('appSettings.publicMarketplaceAppTitle')),
                        React.createElement("p", null, t('appSettings.publicMarketplaceAppSubtitle'))))),
            React.createElement("div", { className: classes.rightSubSectionContainer },
                React.createElement("p", { className: classes.appLabelsSubSectionDescription }, t('appSettings.appLabelsSubSectionDescription')),
                React.createElement(TextField, { className: clsx(classes.inputFields, {
                        [classes.disabledInputField]: userRole !== 'admin',
                    }), disabled: userRole !== 'admin', fullWidth: true, helperText: t('appSettings.labelsFieldHelperText'), label: t('appSettings.labelsFieldLabel'), margin: "dense", name: "appLabels", onChange: handleChange, type: "text", value: appLabels, variant: "outlined" }))),
        React.createElement("hr", { className: classes.sectionSeparator })));
};
export default MarketplaceAppVisibility;
