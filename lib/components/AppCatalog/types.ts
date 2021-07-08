export type AppCatalogProps = {
  appsToDisplay: AppDetails[]
  catalogMode?: 'marketplace' | 'publisher'
}

export type AppDetails = {
  description: string
  id: number
  labels: string[]
  logo: string
  name: string
  publisher: string
}
