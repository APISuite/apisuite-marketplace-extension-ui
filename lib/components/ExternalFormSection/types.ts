import {
  Control,
  DeepMap,
  FieldError,
  UseFormGetValues,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form/dist/types'

export type ExternalFormSectionProps = {
  formUtil: {
    control: Control
    errors: DeepMap<FormFields, FieldError>
    getValues: UseFormGetValues<FormFields>
    reset: UseFormReset<FormFields>
    register: UseFormRegister<FormFields>
    setValue: UseFormSetValue<FormFields>
  }
  data: {
    directUrl: string
  }
  userRole: string
}

export type FormFields = {
  directUrl: string
}
