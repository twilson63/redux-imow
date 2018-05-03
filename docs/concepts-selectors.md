---
id: selectors 
title: Selectors 
sidebar_label: Selectors
---

Redux Selectors is a way to derive state into a computed form for any connected component. At first it may not sound valuable, but once you dive deep into selectors and the ability to compose selectors you will start to see the benefits and see how impactful it can be by placing most of your presentation data logic in the selector, serving up very nice and rich data bytes for your components to consume.

A selector is just a function that takes a state object as its argument and returns an object or value that can be then passed to a component as props.

```js
function selectTitle(state) {
  return state.appData.title
}
```

## Using Reselect

Reselect is a library that allows you to compose selectors, this library has a function called `createSelector`, that takes 0..n strings then the last argument is your selector, each string is a selector function on the store that create selector will call, then pass all of the values into your final selector.

```js
createSelector('selectTitle', 'selectAuthor', (title, author) => {
  return { author, title }
})
```

> By composing selectors you can leverage the single responsibility principal and reuse functionality everywhere.
