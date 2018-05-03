---
id: reactors
title: Reactors
sidebar_label: Reactors
---

Reactors are selectors that return either null or an ActionCreator, this enables you to trigger functionality during a specific transition to a component, but it is important to modify the state that is triggering the reactor immediately after it is triggered so you do not end up in an infinite loop.

Reactors are great for handling stale data on a given component or triggering the initial fetch for a non-cached data object.

```js
const reactShouldFetchResources = createSelector(
  'selectResourcesShouldUpdate',
  shouldUpdate => {
    if (shouldUpdate) {
      return { actionCreator: 'doFetchResources' }
    }
  }
)
```
