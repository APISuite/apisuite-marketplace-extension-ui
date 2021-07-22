export type AppCatalogProps = {
  appsToDisplay: AppDetails[]
  catalogMode?: 'marketplace' | 'publisher'
}

export type AppDetails = {
  summary: string
  id: number
  labels: string[]
  logo: string
  name: string
  publisher: string
}
