import { createAsyncResourceBundle, createSelector } from 'redux-bundler'

const resources = createAsyncResourceBundle({
  name: 'resources',
  getPromise: ({ apiFetch }) => apiFetch('/resources')
})

resources.reactResourcesFetch = createSelector(
  'selectResourcesShouldUpdate',
  shouldUpdate => {
    if (shouldUpdate) {
      return { actionCreator: 'doFetchResources' }
    }
  }
)

export default resources
