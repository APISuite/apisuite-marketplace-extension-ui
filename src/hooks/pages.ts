import { HookPages, PageEntry } from '@apisuite/extension-ui-types'

import Marketplace from 'pages/Marketplace'

const pagesConfig: PageEntry[] = [
  {
    path: '/marketplace',
    exact: true,
    component: Marketplace,
  },
]

const hookPages: HookPages = () => {
  return pagesConfig
}

export default hookPages
