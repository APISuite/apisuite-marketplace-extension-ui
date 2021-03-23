export type AppCatalogProps = {
  appsToDisplay: AppDetails[]
}

export type AppDetails = {
  appDescription: string
  appID: number
  appLabel: string
  appLogo: string
  appName: string
  appPublisher: string
}
