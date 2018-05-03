---
id: bundles-cache
title: Cache Bundle
sidebar_label: Cache
---

With the incredible enhancements with browser api's the last few years local cacheing is a reality and can play a huge improvement to user experience. Using the redux middleware api we can inject cacheing into our application state.

There are several options `redux-persist`, `pouchdb`, etc. Using Redux Bundler you can take advantage of the CacheBundle to bridge to a cache of your choice.

The `createCacheBundler` function takes a function that has two arguments, a key and a value.

## Example

TODO:

> Caution: when using cacheing you need to manage a way to understand users and versions, as your data might change over time, if your data shape has changed then you want to invalidate the cache to load with the new version, if your user changes you want to make sure you do read from another users cache.
