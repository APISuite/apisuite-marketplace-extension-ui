import { HookPages, PageEntry } from '@apisuite/extension-ui-types'

import AppDetails from '../pages/AppDetails'
import Marketplace from '../pages/Marketplace'

const pagesConfig: PageEntry[] = [
  {
    auth: false,
    component: Marketplace,
    exact: true,
    path: '/marketplace',
  },
  {
    auth: false,
    component: AppDetails,
    exact: true,
    path: '/marketplace/app-details/:appID',
  },
]

const hookPages: HookPages = () => {
  return pagesConfig
}

export default hookPages
