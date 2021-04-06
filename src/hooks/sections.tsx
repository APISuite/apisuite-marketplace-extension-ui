import React from 'react'

import { Sections, HookSections } from '@apisuite/extension-ui-types'

import MarketplaceAppCards from 'components/MarketplaceAppCards'

type SectionsConfig = {
  [section: string]: React.FC
}

const sections: SectionsConfig = {
  ['MARKETPLACE_APPLICATIONS']: MarketplaceAppCards,
}

const hookSections: HookSections = (section, props) => {
  const Component = sections[section]

  if (Component) {
    return <Component {...props} />
  }

  return null
}

export default hookSections
