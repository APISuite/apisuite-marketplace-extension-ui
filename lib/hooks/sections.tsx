import React from 'react'

import { HookSections } from '@apisuite/extension-ui-types/v1'

import MarketplaceAppVisibility from '../components/MarketplaceAppVisibility'
import SubbedMarketplaceAppCards from '../components/SubbedMarketplaceAppCards'

type SectionsConfig = {
  [section: string]: React.FC
}

const sections: SectionsConfig = {
  ['MARKETPLACE_APP_VISIBILITY']: MarketplaceAppVisibility,
  ['SUBBED_MARKETPLACE_APPS']: SubbedMarketplaceAppCards,
}

const hookSections: HookSections = (section, props) => {
  const Component = sections[section]

  if (Component) {
    return <Component {...props} />
  }

  return null
}

export default hookSections
