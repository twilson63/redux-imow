import { createAsyncResourceBundle, createSelector } from 'redux-bundler'

const categories = createAsyncResourceBundle({
  name: 'categories',
  getPromise: ({ apiFetch }) => apiFetch('/categories')
})

categories.reactCategoriesFetch = createSelector(
  'selectCategoriesShouldUpdate',
  shouldUpdate => {
    if (shouldUpdate) {
      return { actionCreator: 'doFetchCategories' }
    }
  }
)

export default categories
