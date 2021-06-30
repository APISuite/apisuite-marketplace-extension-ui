export type AppCatalogProps = {
  appsToDisplay: AppDetails[]
}

export type AppDetails = {
  appDescription: string
  appID: number
  appLabels: string[]
  appLogo: string
  appName: string
  appPublisher: string
}
