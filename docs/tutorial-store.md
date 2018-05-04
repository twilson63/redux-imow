---
id: tutorial-store
title: Add Redux Store
sidebar_label: Redux Store
---

Adding a Redux Store to React using Redux Bundler is very similar to adding to the store using the `react-redux` package. We will use the `redux-bundler-react` module to give us a `Provider` component and we can import our bundles from the `bundles/index` module.

```js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'redux-bundler-react'
import getStore from './bundles'

import App from './components/app'

render(
  <Provider store={getStore()}>
    <App />
  </Provider>,
  getElementById('app')
)
```

> `getStore` can take some initial data and we will use this feature when we add our caching library.
