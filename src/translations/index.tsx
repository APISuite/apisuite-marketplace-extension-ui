import * as React from 'react'
import i18next from 'i18next'
import { EXT_NAME } from 'helpers/constants'
import enUS from './en-US.json'
import ptPT from './pt-PT.json'
import {
  Namespace,
  useTranslation as useCoreTranslation,
  UseTranslationOptions,
  UseTranslationResponse,
  Trans as OrigTrans,
  TransProps,
} from 'react-i18next'

i18next.addResourceBundle('en', EXT_NAME, enUS)
i18next.addResourceBundle('pt', EXT_NAME, ptPT)

export const t = i18next.getFixedT(null, EXT_NAME)
export const tCore = i18next.t

export const useTranslation = (
  ns?: Namespace,
  options?: UseTranslationOptions
): UseTranslationResponse => {
  const namespaces = Array.isArray(ns) ? ns : [ns].filter(Boolean)
  return useCoreTranslation([EXT_NAME, ...namespaces], options)
}

export const Trans = ({
  children,
  ...props
}: TransProps): React.ReactElement => {
  const [t] = useTranslation()

  return (
    <OrigTrans t={t} {...props}>
      {children}
    </OrigTrans>
  )
}
