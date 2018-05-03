---
id: middleware
title: Redux Middleware
sidebar_label: middleware
---

Redux middleware is an interesting concept, it basically allows for you to add bridge code in between the dispatch process before it gets to the store and state managers, this enables you to provide asynchronous tooling like redux-thunk, or logging, or any other type of plugin you can think of without interrupting the flow from dispatch to the state reducers.

I think middleware is a deep dive to comprehend, my take way is to leverage tools that build middleware versus trying to build it yourself. If you do need to build some middleware, read this:

https://redux.js.org/advanced/middleware
