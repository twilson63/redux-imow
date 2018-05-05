import { createRouteBundle } from 'redux-bundler'

import Home from '../components/pages/home'
import Menu from '../components/pages/menu'
import Categories from '../components/pages/categories'
import Resources from '../components/pages/resources'

export default createRouteBundle({
  '/': Home,
  '/menu': Menu,
  '/categories': Categories,
  '/resources': Resources
})
