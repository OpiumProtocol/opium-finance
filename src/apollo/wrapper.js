import React from 'react'
import Helmet from 'react-helmet'
import { DOCSEARCH_STYLESHEET_URL } from '../utils/constants'
import ApplicationContextProvider, { Updater as ApplicationContextUpdater } from '../contexts/Application'

export function wrapRootElement({ element }) {
  return (
      <ApplicationContextProvider>
        <ApplicationContextUpdater />
        <Helmet>
          <link rel="stylesheet" href={DOCSEARCH_STYLESHEET_URL} />
        </Helmet>
        {element}
      </ApplicationContextProvider>
  )
}
