export type MarketplaceAppVisibilityProps = {
  formState: FormState
  handleAppVisibility: (selectedAppVisibility: string) => void
  handleChange: (changeEvent) => void
  userRoleID: number
}

export interface FormState {
  values: {
    appAvatarURL: string
    appClientID: string
    appClientSecret: string
    appFullDescription: string
    appLabels: string
    appName: string
    appPrivacyURL: string
    appRedirectURI: string
    appShortDescription: string
    appSupportURL: string
    appTermsURL: string
    appVisibility: string
    appWebsiteURL: string
    appYouTubeURL: string
  }
}
