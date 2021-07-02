export type AppCatalogProps = {
  appsToDisplay: AppDetails[]
}

export type AppDetails = {
  description: string
  id: number
  labels: string[]
  logo: string
  name: string
  publisher: string
}
