export interface SandboxConfig {
  includes: { [prop: string]: boolean }
  portalName: string
  clientName: string
  infra: any
  social: any
  footer: {
    copyright: string
  }
  palette: any
  dimensions: any
  pages: any
}

export interface RoleLevel {
  label: string
  value: string
  level: number
}

export interface Roles {
  [name: string]: RoleLevel
}
