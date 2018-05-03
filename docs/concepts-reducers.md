---
id: reducers
title: Redux Reducers
sidebar_label: Reducers
---

Reducers is the meat and potatoes of redux this is where you manage an incoming action and return the new state. Reducers are pure functions that always take two arguments. The current state and an action object. Then it must return a new state back to the store. Every reducer gets fired when a new action is dispatched to the store.

```js
function rootReducer(state = {}, action) {
  //... do stuff
  return state
}
```

This is the basic reducer, it takes in state and an action object, traditionally you may use a switch case statement to check the action type to determine if you you should adjust the state.

```js
function rootReducer(state = { appTime: null }, action) {
  switch (action.type) {
    case 'APP_IDLE':
      state.appTime = new Date()
      return state
    default:
      return state
  }

  return state
}
```

Or you could use an if statement if switch statements are not your thing.

```js
function rootReducer(state = { appTime: null }, action) {
  if (action.type === 'APP_IDLE') {
    state.appTime = new Date()
    return state
  }
  return state
}
```

> One note to keep in mind is that the reducer should be a pure function and always return a new state, I prefer to leverage ramda to make this very easy and declarative.

```js
function rootReducer(state = { appTime: null }, action) {
  if (equals(prop('type', action), 'APP_IDLE')) {
    return assoc('appTime', new Date(), state)
  }
  return state
}
```

The `equals` function compares two arguments, prop function will return the `prop` value or null and the `assoc` function will apply the change to the key appTime and return the new state in one line.

## combineReducers

An important aspect of redux is the ability to combine reducers using a compose pattern. Using the `combineReducers` function you can separate your reducers into multiple modules then simply combine them using the variable names to mimic the store tree.

```js
createStore(
  combineReducers({
    resources,
    categories,
    users
  })
)
```

In this example, you will create a root state of the following:

```json
{
  "resources": {},
  "categories": {},
  "users": {}
}
```
