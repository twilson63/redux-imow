---
id: bundles-app-time 
title: AppTime Bundle 
sidebar_label: AppTime Bundle
---

AppTime is a bundle that dispatches an APP_IDLE event every x seconds when the tab is in focus and there is not other work going on. This is a great action to listen for when determining if your state becomes stale. For example, if you generate a list of items that each have a last updated date and your design calls for you to show these using fromNow difference logic, if you do not measure stale data the visual will start to be wrong, because it will be based on the time of last render not the 10 minutes that has went by. By using the APP_IDLE action you can test in
your own reducers and determine if your data is stale, and update it.

AppTimeBundle is added automatically when using the combineBundles function.

```js
import { combineBundles } from 'redux-bundler'

export default combineBundles({
  //...userBundles
})
```
