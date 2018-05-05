import { composeBundles, createCacheBundle } from 'redux-bundler'
import cache from '../utils/cache'
import routes from './routes'
import apiFetch from './api-fetch'

import categories from './categories'
import resources from './resources'

export default composeBundles(
  routes,
  createCacheBundle(cache.set),
  apiFetch,
  categories,
  resources
)
