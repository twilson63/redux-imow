import React from 'react'
import { render } from 'react-native'
import 'typeface-roboto'
import './font.css'

import getStore from './bundles'

import Root from './components/root'

render(<Root store={getStore()} />, document.getElementById('root'))
