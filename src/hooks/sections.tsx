import React from 'react'

import { HookSections } from '@apisuite/extension-ui-types/v1'

import SubbedMarketplaceAppCards from 'components/SubbedMarketplaceAppCards'

type SectionsConfig = {
  [section: string]: React.FC
}

const sections: SectionsConfig = {
  // TODO: Fix the error ignored by the following ts-ignore
  // @ts-ignore
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
