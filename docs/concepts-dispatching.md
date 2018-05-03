---
id: dispatching 
title: Dispatching 
sidebar_label: Dispatching
---

Dispatching is the process of notifying state that a side effect or event has occurred, this gives the ability for state to take in all input via one pipeline and it controls how the state is modified. Basically making the state immutable, having immutable state provides a predictable flow of data, which makes it easier to debug and troubleshoot.

The dispatch method is attached to the store instance and takes either a action object or a function.

> Dispatch Action Object Example

```js
store.dispatch({ type: 'APP_IDLE' })
```

> Dispatch Action Function Example

```js
store.dispatch(function(dispatch) {
  //... do stuff
  dispatch(/* action */)
})
```

These simple patterns gives you a lot of flexibility on the tools that you may use to deal with side effects. Fetch, RxJS, WebSocket, Etc.
