---
id: tutorial-resource-bundle
title: Resource Bundle
sidebar_label: Resources
---

Until now, we have been setting up our redux store with routing, caching and the ability to do remote requests, now we need to create a bundle of `resources` which are documents that contain information about organizations that can help veterans get back into civilian life.

> Lets create a new bundle file `bundles/resources.js`:

```js
import { createAsyncResourceBundle } from 'redux-bundler'

export default createAsyncResourceBundle({
  name: 'resources',
  getPromise: ({ apiFetch }) => apiFetch('/resources')
})
```

createAsyncResourceBundle is a higher order bundle that takes a bundle object and merges it with some conventions that can handle caching, error control and loading flags.

We can break this down, but I encourage you to take a look at the source of the HOB.

https://github.com/HenrikJoreteg/redux-bundler/blob/master/src/bundles/create-async-resource-bundle.js

You will find that it creates a reducer, and some actionCreators and some selectors.

* reducer
* doFetchResources
* doMarkResources
* doClearResources
* doExpiresResources
* selectResourcesRaw
* selectResources
* selectResourcesIsStale
* selectResourcesIsExpired
* selectResourcesIsLoading
* selectResourcesLastError
* selectResourcesIsWaitingToRetry
* selectResourcesFailedPermanently
* selectResourcesShouldUpdate

This resource handles a lot of boilier plate to manage getting and maintaining a data resource in a cache and keeping the data fresh.
