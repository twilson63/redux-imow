import React from 'react'
import { render } from 'react-native'
import 'typeface-roboto'
import './font.css'
import cache from './utils/cache'

import getStore from './bundles'

import Root from './components/root'

cache.getAll().then(initialData => {
  render(
    <Root store={getStore(initialData)} />,
    document.getElementById('root')
  )
})
