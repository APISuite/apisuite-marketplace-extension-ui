import React from 'react';
export function useForm(defaultValues, rules) {
    const _createStateObject = (initObj, defaultValue) => {
        return Object.keys(initObj).reduce((obj, key) => ({
            ...obj,
            [key]: defaultValue,
        }), {});
    };
    const byErrorMsg = React.useCallback((formRules) => {
        const errorMsgs = {};
        if (formRules) {
            ;
            Object.keys(formRules).forEach((field) => {
                const fieldFormRules = formRules[field];
                if (fieldFormRules)
                    errorMsgs[field] = fieldFormRules.message;
            });
        }
        return errorMsgs;
    }, [rules]);
    const [defaultValuesState, setDefaultValuesState] = React.useState(defaultValues);
    const [formState, setFormState] = React.useState({
        values: defaultValues,
        errors: {},
        errorMsgs: byErrorMsg(rules),
        focused: _createStateObject(defaultValues, false),
        touched: _createStateObject(defaultValues, false),
        dirty: _createStateObject(defaultValues, false),
        isValid: false,
        isDirty: false,
    });
    const resetForm = React.useCallback((newDefaultValues) => {
        setFormState({
            values: newDefaultValues,
            errors: {},
            errorMsgs: byErrorMsg(rules),
            focused: _createStateObject(newDefaultValues, false),
            touched: _createStateObject(newDefaultValues, false),
            dirty: _createStateObject(newDefaultValues, false),
            isValid: false,
            isDirty: false,
        });
        setDefaultValuesState(newDefaultValues);
    }, [byErrorMsg, rules]);
    const isFormValid = (errors) => {
        if (Object.values(errors).includes(true))
            return false;
        return true;
    };
    const isFormDirty = (dirty) => {
        if (Object.values(dirty).includes(true))
            return true;
        return false;
    };
    const isDirty = (event) => {
        if (typeof defaultValuesState[event.target.name] === 'number') {
            return (parseInt(event.target.value, 10) !==
                defaultValuesState[event.target.name]);
        }
        return event.target.value !== defaultValuesState[event.target.name];
    };
    const isError = (value, fieldRules) => {
        let valid = false;
        if (fieldRules) {
            fieldRules.forEach((rule) => {
                if (!rule(value)) {
                    valid = true;
                }
            });
        }
        return valid;
    };
    const checkInitialErrors = () => {
        return Object.keys(formState.values).reduce((obj, key) => {
            let error = false;
            if (rules) {
                const fieldRules = rules[key];
                if (fieldRules) {
                    error = isError(formState.values[key], fieldRules.rules);
                }
            }
            return {
                ...obj,
                [key]: error,
            };
        }, {});
    };
    React.useEffect(() => {
        setFormState({
            ...formState,
            errors: checkInitialErrors(),
        });
    }, []);
    const validate = (name, value) => {
        if (rules) {
            const fieldRules = rules[name];
            if (fieldRules) {
                setFormState((prevFormState) => ({
                    ...prevFormState,
                    errors: {
                        ...prevFormState.errors,
                        [name]: isError(value, fieldRules.rules),
                    },
                    isValid: isFormValid({
                        ...prevFormState.errors,
                        [name]: isError(value, fieldRules.rules),
                    }),
                }));
            }
        }
    };
    const handleChange = (event) => {
        event.persist();
        validate(event.target.name, event.target.value);
        setFormState((prevFormState) => ({
            ...prevFormState,
            values: {
                ...prevFormState.values,
                [event.target.name]: event.target.value,
            },
            dirty: {
                ...prevFormState.dirty,
                [event.target.name]: isDirty(event),
            },
            isDirty: isFormDirty({
                ...prevFormState.dirty,
                [event.target.name]: isDirty(event),
            }),
        }));
    };
    const handleFocus = (event) => {
        event.persist();
        const touchedField = Object.keys(formState.focused).find((key) => formState.focused[key] === true);
        setFormState((prevFormState) => ({
            ...prevFormState,
            focused: {
                ...prevFormState.focused,
                [event.target.name]: true,
            },
        }));
        if (touchedField) {
            setFormState((prevFormState) => ({
                ...prevFormState,
                focused: {
                    ...prevFormState.focused,
                    [touchedField]: false,
                },
                touched: {
                    ...prevFormState.touched,
                    [touchedField]: true,
                },
            }));
            validate(touchedField, formState.values[touchedField]);
        }
    };
    const setValue = (name, value) => {
        setFormState({
            ...formState,
            values: {
                ...formState.values,
                [name]: value,
            },
        });
    };
    return {
        formState: formState,
        handleFocus: handleFocus,
        handleChange: handleChange,
        resetForm: resetForm,
        setValue: setValue,
    };
}
