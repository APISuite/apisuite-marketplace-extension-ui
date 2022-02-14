import { Control, DeepMap, FieldError, UseFormGetValues, UseFormRegister, UseFormReset, UseFormSetValue } from 'react-hook-form/dist/types';
export declare type ExternalFormSectionProps = {
    formUtil: {
        control: Control;
        errors: DeepMap<FormFields, FieldError>;
        getValues: UseFormGetValues<FormFields>;
        reset: UseFormReset<FormFields>;
        register: UseFormRegister<FormFields>;
        setValue: UseFormSetValue<FormFields>;
    };
    data: {
        directUrl: string;
    };
    userRole: string;
};
export declare type FormFields = {
    directUrl: string;
};
