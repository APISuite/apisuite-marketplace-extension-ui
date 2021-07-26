import { Control, DeepMap, FieldError, UseFormGetValues, UseFormRegister, UseFormReset, UseFormSetValue } from 'react-hook-form/dist/types';
export declare type MarketplaceAppSettingsProps = {
    formUtil: {
        control: Control;
        errors: DeepMap<FormFields, FieldError>;
        getValues: UseFormGetValues<FormFields>;
        reset: UseFormReset<FormFields>;
        register: UseFormRegister<FormFields>;
        setValue: UseFormSetValue<FormFields>;
    };
    data: {
        directURL: string;
        labels: string;
        visibility: string;
    };
    userRole: string;
};
export declare type FormFields = {
    appDirectURL: string;
    appLabels: string;
    appVisibility: string;
};
