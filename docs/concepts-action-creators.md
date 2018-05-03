---
id: action-creators
title: ActionCreators
sidebar_label: ActionCreators
---

ActionCreators are functions that return an action object.

```js
function doFetchResources() {
  return { type: 'RESOURCES_FETCH_FINISHED', payload: data }
}
```

Often times you want to do asynchronous function call before dispatching an action to redux, this can be enabled using redux middleware, then your action calls will be higher order functions.

```js
function doPostResource(resource) {
  return function(dispatch) {
    return fetch('/resources', {
      method: 'POST',
      body: JSON.stringify(resource)
    })
      .then(res => res.json())
      .then(result =>
        dispatch({ type: 'RESOURCES_FETCH_FINISHED', payload: resource })
      )
  }
}
```

When using a middleware like redux thunk, you pass a function back to redux, which it invokes providing the `dispatch` and `getState` arguments to resolve.

## Comments

ActionCreators is the place your put your outbound side effect, for example making a call to an API Endpoint, or a External API, then your get the results and notify your state using dispatch. Keeping all of your side effects in one pattern creates predictable systems. Which means easy to test and easy to debug.
