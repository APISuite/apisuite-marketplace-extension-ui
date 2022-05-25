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
    labels: string[]
    visibility: Visibility
  }
  userRole: string
  showLabels: boolean
  showVisibility: boolean
  visibilityEnabled: boolean
}

export type FormFields = {
  labels: string[]
  visibility: string
}

export enum Visibility {
  PUBLIC = 'public',
  PRIVATE = 'private',
}
