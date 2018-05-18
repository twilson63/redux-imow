---
id: bundles-specs
title: Bundle Specifications
sidebar_label: Specifications
---

A redux bundle is simply a javascript object, that can contain one name key, and one reducer key, and zero to many ActionCreators, zero to many selectors, zero to many reactors, and
an init method.

```js
export default {
  name: 'foo',
  reducer: (state, action) => {
    return state
  }
}
```

These bundles can be combined and can return a redux store.

```js
export default combineBundles({
  foo,
  bar,
  baz
})
```

Each concept for redux has a special convention for redux-bundler.

### actioncreators = doX

```js
export default {
  name: 'CoolBundle',
  doFetchCool: () => {
    return { type: 'COOL' }
  }
}
```

### selectors = selectX

```js
export default {
  name: 'coolBundle',
  reducer: (state = { title: '' }, action) => {},
  selectTitle: state => {
    return state.coolBundle.title
  }
}
```

### reactors = reactX

```js
export default {
  name: 'coolBundle',
  reducer: (state = { title: '' }, action) => {},
  reactCool: state => {
    // do some reactor stuff....
  }
}
```

> Since each bundle returns a single object with conventional methods, it is very easy to test each method using any basic unit testing library.
