import * as React from 'react';
declare type FieldValues = Record<string, string | number>;
declare type FieldName<FormValues> = keyof FormValues;
declare type FormState<FormValues> = {
    values: FormValues;
    errors: Record<FieldName<FormValues>, boolean>;
    errorMsgs: Record<FieldName<FormValues>, string>;
    focused: Record<FieldName<FormValues>, boolean>;
    touched: Record<FieldName<FormValues>, boolean>;
    dirty: Record<FieldName<FormValues>, boolean>;
    isValid: boolean;
    isDirty: boolean;
};
declare type UseFormHTMLElement = HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
export declare function useForm<FormValues extends FieldValues>(defaultValues: FormValues, rules?: Partial<Record<FieldName<FormValues>, {
    rules: ((value: string | number) => boolean)[];
    message: string;
}>>): {
    formState: FormState<FormValues>;
    handleFocus: (event: React.FocusEvent<UseFormHTMLElement>) => void;
    handleChange: (event: React.ChangeEvent<UseFormHTMLElement>) => void;
    resetForm: (newDefaultValues: FormValues) => void;
    setValue: (name: FieldName<FormValues>, value: string | number) => void;
};
export {};
