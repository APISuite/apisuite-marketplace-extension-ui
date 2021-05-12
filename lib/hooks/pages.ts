import { HookPages, PageEntry } from '@apisuite/extension-ui-types'

import { BASE_URI } from '../helpers/constants'
import AppDetails from '../pages/AppDetails'
import Marketplace from '../pages/Marketplace'

const pagesConfig: PageEntry[] = [
  {
    auth: false,
    component: Marketplace,
    exact: true,
    path: BASE_URI,
  },
  {
    auth: false,
    component: AppDetails,
    exact: true,
    path: `${BASE_URI}/app-details/:appID`,
  },
]

const hookPages: HookPages = () => {
  return pagesConfig
}

export default hookPages
