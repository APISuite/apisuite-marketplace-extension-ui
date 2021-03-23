import MarketplaceReducer from 'pages/Marketplace/ducks'
import MarketplaceRootSaga from 'pages/Marketplace/sagas'

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const injectStuffIntoStore = (coreStoreProps: any): void => {
  coreStoreProps.injectReducer('marketplace', MarketplaceReducer)
  coreStoreProps.injectReducer('settings', MarketplaceReducer)

  coreStoreProps.injectSaga('marketplace', MarketplaceRootSaga)
}
