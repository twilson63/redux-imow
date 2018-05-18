---
id: store 
title: Redux Store
sidebar_label: Store
---

The redux store is the heart of redux it is a single object that contains all of your application state. It comes with three methods:

* dispatch
* getState
* subscribe

### dispatch

```js
store.dispatch({ type: 'APP_IDLE' })
```

The `dispatch` method takes an action (see next section) object, the action object runs through your state process logic and modifies the existing state.

### getState

The `getState` method returns the entire state of redux, which is usually in the form of an object.

### subscribe

```js
store.subscribe(function() {
  console.log('State Changed!')
})
```

The `subscribe` method allows you to provide a function that will be called every time a change in state occurs.
