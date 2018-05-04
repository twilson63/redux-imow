import { createRouteBundle } from 'redux-bundler'
import Home from '../components/pages/home'
import Menu from '../components/pages/menu'

export default createRouteBundle({
  '/': Home,
  '/menu': Menu
})
