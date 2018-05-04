---
id: tutorial-fetch
title: Fetch and GetXtraArgs
sidebar_label: Fetch
---

With Redux Bundler, there is a feature called `getExtraArgs`, these are functions that are attached on the store object and when called they pass the store in and return an object of functions. When a `actionCreator` is called these functions are included in object that is passed in along with `dispatch` and `getState`. This feature enables us to define re-usable side-effect code in one area in our state management system instead of having to duplicate code in other places or end up with a lot of imports in our state management system.

Here is an example of wrapping the fetch api:

> create a new file called `bundles/extra-args.js` and add the following content.

```js
/* global fetch */
const api = process.env.API || 'https://api.vet-support.xyz'
export default {
  name: 'extra-args',
  // note that the store gets passed in here:
  getExtraArgs: store => {
    return {
      apiFetch: (urlPath, options = { method: 'GET' }) =>
        // if your API requires an authentication token or whatnot
        // here would be a great place to select it from your store
        // and pass it along with the fetch. Then none of your individual
        // action creators need to worry about this.
        fetch(api + urlPath, options)
          .then(res => res.json())
          .catch(err => {
            // if you wanted to, you could look for errors caused
            // by failed authentication to trigger something
            // else on the store here if it existed. Such as redirecting
            // the user to a login page, or whatnot. You have access
            // to the store object itself.
            //
            // The store has all the action creators on it so you
            // can call `store.doWhatever()`
            // but for our purposes we'll just throw here
            throw err
          })
    }
  }
}
```

> Now all we need to do is import it in our bundle index file `bundles/index.js`:

```js
import { composeBundles } from 'redux-bundler'
import routes from './routes'
import extraArgs from './extra-args'

export default composeBundles(routes, extraArgs)
```
