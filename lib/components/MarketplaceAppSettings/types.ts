import {
  Control,
  DeepMap,
  FieldError,
  UseFormGetValues,
  UseFormRegister,
  UseFormReset,
  UseFormSetValue,
} from 'react-hook-form/dist/types'

export type MarketplaceAppSettingsProps = {
  formUtil: {
    control: Control
    errors: DeepMap<FormFields, FieldError>
    getValues: UseFormGetValues<FormFields>
    reset: UseFormReset<FormFields>
    register: UseFormRegister<FormFields>
    setValue: UseFormSetValue<FormFields>
  }
  data: {
    directURL: string
    labels: string
    visibility: string
  }
  userRole: string
}

export type FormFields = {
  appDirectURL: string
  appLabels: string
  appVisibility: string
}
