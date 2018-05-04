---
id: tutorial-caching
title: Caching
sidebar_label: Caching
---

Caching data is what really makes PWA's shine, the mental model moves from pulling data each time the user clicks on a link to request the data to a iterative process behind the scenes, that contains a process to cache the returned data and keep the data fresh, so when the user requests a particular data point, the rendering in instant because no server-side request is necessary. Also, if the user is offline, the data can still be presented.

The Human Redux Author compares this to a spreadsheet mental model versus a traditional request/response model. With spreadsheets the computed fields and presentation fields are waiting for the data to change, then they react, and this is very much how the `react` library is designed. By providing the data from the client you get faster render times per request.

So when you look at this challenge immediately you start to ask some questions, about how to invalidate the cache, how to manage security, how to manage different users data, etc.

The Redux Bundler system gives you the tools and patterns to be able to address this using any persistence library you want. We will use the library `money-clip` that uses a very light wrapper around `indexDb` and takes a simple version node to perform cache invalidation.

> Lets install `money-clip`

```sh
yarn add money-clip
```

> Lets create a `util/cache.js`

```js
import { getConfiguredCache } from 'money-clip'

// This just creates a cache helper that is pre-configured
// these options.
// The version number should come from a config, this protects
// from trying load cached data when the internal data structures
// that your app expects have changed.
//
// Additionally, if you're caching user-specific data, you should build a
// version string that includes some user identifier along with your actual
// version number. This will ensure than switching users won't result in
// someone loading someone else's cached data.
//
// So, there are gotchas, but it sure is cool when you've got it all set up.
export default getConfiguredCache({
  maxAge: 1000 * 60 * 60,
  version: process.env.CACHE_VERSION
})
```

This is a simple example, but if you wanted to provide cache invalidation, when you ship different data shapes you can simply change the version number and it will discard the initial cache and use the new version.

If you are tracking users, then you may want to create a Higher Order Function that accepts a unique user identifier to be a part of the version, then you will create a separate cache per user.

Now that we have created our cache utililty function, we need to bind it to our Redux Store. Using a higher order redux bundle.

> In `bundles/index.js` we import our cache and use the createCacheBundle to wrap our cache function:

```js
import { composeBundles, createCacheBundle } from 'redux-bundler'
import routes from './routes'
import extraArgs from './extra-args'
import cache from '../utils/cache'

export default composeBundles(routes, createCacheBundle(cache.set), extraArgs)
```

> Lets add caching to our application index `index.js`:

```js
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'redux-bundler-react'
import getStore from './bundles'
import cache from './utils/cache'
import App from './components/app'

cache.getAll().then(initialState =>
  render(
    <Provider store={getStore(initialState)}>
      <App />
    </Provider>,
    getElementById('app')
  )
)
```
