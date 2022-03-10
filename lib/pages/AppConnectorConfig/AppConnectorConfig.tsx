import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router'

import { useTranslation } from '@apisuite/fe-base'

import { getAppConnectorConfigAction } from '../Marketplace/ducks'
import useStyles from './styles'
import appConnectorConfigSelector from './selector'

const AppConnectorConfig: React.FC = () => {
  const classes = useStyles()

  const { selectedAppDetails, userProfile } = useSelector(
    appConnectorConfigSelector
  )

  const dispatch = useDispatch()

  const trans = useTranslation()

  const t = (string: string, ...args) => {
    return trans.t(`extensions.marketplace.${string}`, ...args)
  }

  const history = useHistory()
  // 1. Subscription logic for the currently selected Marketplace app

  // Retrieves the app's ID from the browser window's URL
  const { appID } = useParams<any>()

  /* Triggers the retrieval and storage (on the app's Store, under 'marketplace > selectedAppDetails')
  of all information we presently have on the currently selected marketplace app. */
  useEffect(() => {
    if (appID !== '') dispatch(getAppConnectorConfigAction(appID))
  }, [appID])

  /* The following effect code will check if the currently selected app is one that
  the user's already subscribed to. */

  // 3. Currently selected Marketplace app's details logic

  const isURLEmpty = (providedURL: string) => {
    return providedURL === null || providedURL === ''
  }

  // 4. 'More (Marketplace apps) from publisher' section logic

  return (
    <main>
      <section className={classes.appDetailsContainer}></section>
    </main>
  )
}

export default AppConnectorConfig
