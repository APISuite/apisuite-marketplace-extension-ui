export type MarketplaceAppSettingsProps = {
  formState: FormState
  handleAppVisibility: (selectedAppVisibility: string) => void
  handleChange: (changeEvent) => void
  userRole: string
}

export interface FormState {
  errors: {
    appAvatarURL: boolean
    appDirectURL: boolean
    appPrivacyURL: boolean
    appRedirectURI: boolean
    appSummary: boolean
    appSupportURL: boolean
    appTermsURL: boolean
    appWebsiteURL: boolean
    appYouTubeURL: boolean
  }
  errorMsgs: {
    appAvatarURL: string
    appDirectURL: string
    appPrivacyURL: string
    appRedirectURI: string
    appSummary: string
    appSupportURL: string
    appTermsURL: string
    appWebsiteURL: string
    appYouTubeURL: string
  }
  values: {
    appAvatarURL: string
    appClientID: string
    appClientSecret: string
    appDirectURL: string
    appDescription: string
    appLabels: string
    appMetaDescription: string
    appMetaKey: string
    appMetaTitle: string
    appMetaValue: string
    appName: string
    appPrivacyURL: string
    appRedirectURI: string
    appSummary: string
    appSupportURL: string
    appTermsURL: string
    appVisibility: string
    appWebsiteURL: string
    appYouTubeURL: string
  }
}
