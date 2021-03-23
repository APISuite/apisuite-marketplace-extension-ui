import { Menus, MenuEntry, HookMenu } from '@apisuite/extension-ui-types'

import { BASE_URI } from 'helpers/constants'

type MenuConfig = {
  [menu: string]: MenuEntry[]
}

const menuConfig: MenuConfig = {
  [Menus.HeaderAnonymousMain]: [
    {
      label: 'Marketplace',
      title: 'Marketplace',
      route: BASE_URI,
    },
  ],

  [Menus.HeaderAuthenticatedMain]: [
    {
      label: 'Marketplace',
      title: 'Marketplace',
      route: BASE_URI,
    },
  ],
}

const hookMenu: HookMenu = (menu) => {
  return menuConfig[menu] || null
}

export default hookMenu
