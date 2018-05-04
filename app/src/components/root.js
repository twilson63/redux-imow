import React from 'react'
import { Provider } from 'redux-bundler-react'

import Layout from './layout'

const Root = ({ store }) => {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  )
}

export default Root
